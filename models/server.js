const express=require('express')
const cors = require('cors')
const {dbConnetion} =require('../database/config')

class Server{
    constructor(){
        this.app=express()
        this.port=process.env.port
        this.encuestaPath='/api/encuesta'
        this.ConectarDB()
        this.middlewares()
        this.routes()
    }

    async ConectarDB(){
        await dbConnetion()
    }
    middlewares(){
        this.app.use(cors())
        this.app.use(express.static('public')) 
        this.app.use(express.json())
    }

    routes(){
        this.app.use(this.encuestaPath,require('../routes/Encuesta'));
    }

    listen(){ 
        this.app.listen(this.port,(req, res)=>{
            console.log(`Escuchando el puerto ${this.port}`)
        })
    }

}

module.exports=Server

