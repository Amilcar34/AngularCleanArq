import { Component, OnInit } from '@angular/core';
import { Requerimiento } from 'src/app/domain/models/requerimiento';
import { RequerimientoUseCase } from 'src/app/domain/usecase/requerimiento-use-case';

@Component({
  selector: 'app-requerimiento',
  templateUrl: './requerimiento.component.html',
  styleUrls: ['./requerimiento.component.css']
})
export class RequerimientoComponent implements OnInit {

  requerimiento! : Requerimiento; 

  constructor(private requerimientoCasesUse : RequerimientoUseCase) { }

  ngOnInit(): void {
    this.requerimientoCasesUse.getByID(1).subscribe( data => this.requerimiento = data );
  }
  
}
