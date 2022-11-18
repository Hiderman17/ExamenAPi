const {Schema,model}=require('mongoose')

const EncuestaSchema=Schema({

    NombreEncuesta:{
        type:String
    },
    Fecha:{
        type:String
    },
    DocumentoEncuestado:{
        type:Number
    },
    NombreEncuestado:{
        type:String
    },
    Edad:{
        type:Number
    },
    Genero:{
        type:String
    },
    Empleado:{
        type:String
    }
})
module.exports=model('Encuesta',EncuestaSchema)