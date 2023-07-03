import { Component } from '@angular/core';
import { ProdsService } from 'src/app/services/prods.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  producto={
    id:0,
    nombre:'',
    detalle:''
  }
  
  prods:any[]=[this.producto]
  
  imgs=[
    'assets/Manzana.png',
    'assets/pera.png',
    'assets/lechuga.png',
    'assets/espinaca.png',
  ]

  constructor(private prodServ:ProdsService){
    this.prodServ.obtenerProductos().subscribe(res=>{
      this.prods=res
    })
  }

  ObtainValue(){
    return Math.floor( Math.random() * (10 - 1) + 1);
  }
}
