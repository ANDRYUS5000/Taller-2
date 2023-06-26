import { Product } from '../models/producto.js'

const getproducts= async (req,res)=>{
    try {
        const productos= await Product.findAll()
        res.status(200).json(productos)
    } catch (error) {
        res.status(400).json({message:error})
    }
}

const getproduct= async (req,res)=>{
    const id=req.params.id
    try {
        const product= await Product.findByPk(id)
        res.status(200).json(product)
    } catch (error) {
        res.status(400).json({message:error})
    }
}

const postProducts = async (req, res) => {
    const {nombre,detalle}=req.body
    try {
        const newp=await Product.create({
            nombre,
            detalle
        })
        res.status(200).json(newp)
    } catch (error) {
        res.status(400).json({message:error})
    }
};

const putProducts = async (req, res) => {
    const {id} =req.params
    const {nombre,detalle}=req.body
    try {
        const prev=await Product.findByPk(id)
        prev.nombre=nombre
        prev.detalle=detalle
        const newp=await prev.save()
        res.status(200).json(newp)
    } catch (error) {
        res.status(400).json({message:error})
    }
};

const deleteProducts = async (req, res) => {
    const {id} =req.params
    try {
        const resp=await Product.destroy({
            where:{
                id
            }
        })
        res.status(200).json({message:'registro eliminado'})
    } catch (error) {
        res.status(200).json({message: `registro ${id} no eliminado `+error})
    }
};

export {
    getproducts,
    getproduct,
    deleteProducts,
    putProducts,
    postProducts
}