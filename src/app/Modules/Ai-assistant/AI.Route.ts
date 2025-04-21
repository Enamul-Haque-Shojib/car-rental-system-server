import express from 'express'
import { aiAssistantController } from './AI.controller'
const router=express.Router()
router.post('/ask',aiAssistantController)


 const AiRoutes=router
export {AiRoutes}