import {Request,Response} from 'express'
//import connected from '../config/ormconfig'
import User from '../Entity/User'
import dataSource from '../config/ormconfig'
import { Get, Route,Controller,Post,SuccessResponse } from 'tsoa'
  @Route('/User')
 class userController extends Controller{
     @Post('/add')
    static add=async(req:Request,res:Response)=>{
        try{
        console.log(req.body)
        const user=new User()
            
         user.id=req.body.id
         user.name=req.body.name
         user.age=req.body.age
         user.Address=req.body.Address
       const result= await dataSource.manager.save(user)
        res.json({
            sucess:true,
            status:200,
            message:"Data is  insert in to the database",
            data:result
        })
        }catch(error){
            res.json({
                sucess:false,
                status:500,
                message:"Data is not insert in to the database",
                detail:error
            })
        }
        //const user=new User()
      }
     @Get('show')
    static show=async(req:Request,res:Response)=>{
        try{
                const result= await dataSource.manager.find(User)
                res.json({
                    sucess:true,
                    status:200,
                    message:"All Data from database",
                    data:result
                })
                

        }catch(error){
            res.json({
                sucess:false,
                status:500,
                message:"Data are not found in database",
                detail:error
            })
        }
        //res.send('show')
    }
    static update=async(req:Request,res:Response)=>{
        try{
            const result= await dataSource.manager.update(User,
                {id:Number(req.params.id)},{
                    id:req.body.id,
                    name:req.body.name,
                    age:req.body.age,
                    Address:req.body.Address
                }
            )
            if (result.affected===0){
                return res.json({
                sucess:false,
                status:400,
                message: `Not found Data from table of ID= ${req.params.id}`,
                data:result
            })}
            else{
                return res.json({
                    sucess:true,
                    status:200,
                    message:`updated Data from table of ID= ${req.params.id}`,
                    data:result
                })  
            }

        }catch(error){
            res.json({
                sucess:false,
                status:500,
                message:"error occur during update data in table",
                detail:error
            })
        }
        //res.send('update')
    }
    static find=async(req:Request,res:Response)=>{
        try{
           // console.log(req.params.id)
            const result= await dataSource.manager.findOneBy(User,{
                id:Number(req.params.id)
            })
            if (result){
               return res.json({
                    sucess:true,
                    status:200,
                    message:`found Data from table of ID= ${req.params.id}`,
                    data:result
                })
            }else{
                return res.json({
                    sucess:false,
                    status:400,
                    message: `Not found Data from table of ID= ${req.params.id}`,
                    data:result
                })
            }
            
        }
        catch(error){
            res.json({
                sucess:false,
                status:500,
                message:"error occur during find data in table",
                detail:error
            })
        }
        //res.send('find')
    }
    static delete=async(req:Request,res:Response)=>{
        try{
            const result= await dataSource.manager.delete(User,{
                id:Number(req.params.id)
            })
            if (result.affected===1){
               return res.json({
                    sucess:true,
                    status:200,
                    message:`Data delete from table of ID= ${req.params.id}`,
                    data:result
                })
            }else{
                res.json({
                    sucess:false,
                    status:400,
                    message: `Not found Data from table of ID =${req.params.id}`,
                    data:result
                })
            }
            
        }
        catch(error){
            res.json({
                sucess:false,
                status:500,
                message:"error occur during find data in table",
                detail:error
            })
        }
        

        
        //res.send('delete')
    }
}
export   {userController}