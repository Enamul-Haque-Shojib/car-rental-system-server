import { NextFunction, Request, Response } from "express";
import axios from 'axios';
import { Car } from '../Car/Car.model';

 const aiAssistantController = async(req: Request, res: Response, next: NextFunction):Promise<void> => {
    const { message } = req.body;

  


    try {
        // Fetch all available cars from the database
        const allCars = await Car.find({ status: 'not_rent' });

        // Prepare car data for the AI prompt
        const carDataForAI = allCars.map(car => ({
            id: car._id,
            brand: car.brand,
            model: car.carModel,
            year: car.year,
            type: car.type,
            fuelType: car.fuelType,
            transmission: car.transmission,
            pricePerDay: car.pricePerDay,
            location: car.location,
            image: car.image,

            seats: car.seats,
            mileAge: car.mileAge,

            status: car.status,
            features: car.features,     
            link: `http://localhost:5173/detailsCar/${car._id}`,
        }));

        // Construct the AI prompt
        const prompt = `
        You are a car rental assistant.
        Please only respond in JSON format like this:
        {
          "reply": "Here are your results... and some text here 10 words",
          "cars": [
            {
              "id": "carId123",
              "brand": "Toyota",
              "model": "RAV4",
              "pricePerDay": "1800",
              "location": "Dhaka",
              image:"https://res.cloudinary.com/dqsm6ybdu/image/upload/v1742859610/f88efylheeycdlvhisjj.jpg"
              "link": "http://localhost:5173/detailsCar/carId123"
            }
          ]
        }
        
        User asked: "${message}"
        
        Here is the list of available cars:
        ${JSON.stringify(carDataForAI, null, 2)}
        
        Only return valid JSON. Do not include any markdown, explanation, or extra text.
        Make sure to include the car ID in the response.
        if the user asked for a specific car, please include that car in the response.
        if user asked car details , suggest 3 cars with the same type and brand.
        if user asked not car related question, please answer it in a friendly manner.
        respond in reply field and cars field.
        `;

        // Send the prompt to the AI API
        const aiRes = await axios.post(
            'https://openrouter.ai/api/v1/chat/completions',
            {
                model: "mistralai/mistral-7b-instruct",
                messages: [{ role: 'user', content: prompt }],
                response_format: "json" 
              },
            {
                headers: {
                    Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
                    'Content-Type': 'application/json',
                },
            }
        );

        // Parse the AI response
        const content =  aiRes.data.choices?.[0]?.message?.content;
        
        
        if (!content) {
            throw new Error('AI response is empty or invalid');
        }

        let parsed;
        try {
            // Ensure the response is trimmed and sanitized
            const sanitizedContent = content.trim();

            parsed =await JSON.parse(sanitizedContent);
        } catch (parseError) {
            console.error('Error parsing AI response:', parseError, 'Response content:', content);
            throw new Error('AI response is not valid JSON');
        }
        
        const reply: string = parsed.reply || 'No reply available';
        const cars: [] = parsed.cars || [];

        // Return the parsed response
        
         res.status(200).json({ reply, cars });
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error('Error fetching AI response:', error.message);
            throw new Error(`Error fetching AI response: ${error.message}`);
            next(error);
        } else {    
            console.error('Error fetching AI response:', error);
            throw new Error('An unknown error occurred while fetching AI response.');
        }
        

    }
}
export { aiAssistantController };