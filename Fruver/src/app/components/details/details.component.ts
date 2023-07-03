import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdsService } from 'src/app/services/prods.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {

  imgs=[
    'assets/Manzana.png',
    'assets/pera.png',
    'assets/lechuga.png',
    'assets/espinaca.png',
  ]

  id=''

  prod:any

  constructor(private prodServ:ProdsService,public R:ActivatedRoute){
    this.id=R.snapshot.params['id']
    this.prodServ.obtenerProducto(this.id).subscribe(res=>{
      this.prod=res
    })
  }

  parseint(){
    return parseInt(this.id)
  }
}