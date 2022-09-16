const express=require('express')
const {area,perimeter}=require('./recta/calculate')

const app=express()
const length=5;
    const width=3;
app.use('/abebe',(req,res)=>{
    
    res.send(`The area is ${area(length,width)} and the perimeter is ${perimeter(length,width)}`)
})
app.listen(3000,()=>{
    console.log("Server is connected")
})