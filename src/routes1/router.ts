import {Request,Response} from 'express'
import express from 'express'
import Controller from '../controller/userController'
const router =express.Router()

router.post('/add',Controller.add)
router.get('/show',Controller.show)
router.patch('/update/:id',Controller.update)
router.delete('/delete/:id',Controller.delete)
router .get('/find/:id',Controller.find)
export default router