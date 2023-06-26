import {Router} from 'express';
import {deleteProducts, getproducts,postProducts,putProducts,getproduct} from '../controllers/controller.js'

const router=Router()

router.get("/",(req,res)=>{
    res.send("SE USO FUNCIN FLECHA PORQUE YOLO")
})


router.get("/productos", getproducts);
router.get("/productos/:id", getproduct);
router.post("/productos",postProducts);
router.put("/productos/:id",putProducts);
router.delete("/productos/:id", deleteProducts);

export default router