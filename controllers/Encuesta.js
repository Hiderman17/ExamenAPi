const Encuesta = require('../models/Encuesta')


const getEncuestas = async (req,res) => {

    const Encuestas = await Encuesta.find()

    res.json({
        msg: 'Encuestas get api',   
        Encuestas
    })
}

const postEncuestas = async (req, res) => {
    const { NombreEncuesta, Fecha, DocumentoEncuestado, NombreEncuestado, Edad, Genero, Empleado } = req.body

    const Encuesta1 = new Encuesta({ NombreEncuesta, Fecha, DocumentoEncuestado, NombreEncuestado, Edad, Genero, Empleado })
    await Encuesta1.save()

    res.json({
        msg: 'Encuestas post api',
        Encuesta1
    })

}



const putEncuestas = async (req, res) => {
    const { NombreEncuesta, Fecha, DocumentoEncuestado, NombreEncuestado, Edad, Genero, Empleado } = req.body

    const Encuesta1 = await Encuesta.findOneAndUpdate({ DocumentoEncuestado: DocumentoEncuestado }, {
        NombreEncuesta: NombreEncuesta,
        Fecha: Fecha, NombreEncuestado: NombreEncuestado,Edad,Genero,Empleado
    })

    res.json({
        msg: 'Encuesta PUT API',
        Encuesta1
    })

}


const patchEncuestas= async (req,res)=>{
    const { DocumentoEncuestado, NombreEncuesta} = req.body
    const Encuesta1 = await Encuesta.findOneAndUpdate({ DocumentoEncuestado: DocumentoEncuestado }, {NombreEncuesta: NombreEncuesta})

    res.json({
        msg:'EncuestaPATCH API',
        Encuesta1
    })
}

const deleteEncuestas = async ( req,res)=>{
    const {DocumentoEncuestado}=req.query
    // Buscar y borrar
    // Antes de las llaves el atributo
    // DELETE FROM insumo WHERE Nombre = $Nombre

    const Encuesta1 = await Encuesta.findOneAndDelete({DocumentoEncuestado:DocumentoEncuestado})

    res.json({
        msg:'Encuesta DELETE API',
        Encuesta1
    })
}



module.exports = {
    getEncuestas,
    postEncuestas,
    putEncuestas,
    patchEncuestas,
    deleteEncuestas
}