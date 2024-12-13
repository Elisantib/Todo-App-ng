import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  Welcome = 'Quiero que se muestre en el html';
  tasks = [
    'instalar el angular CLI',
    'Crear proyecto',
    'Crear componentes'
  ]
  name = 'Elisa';
  age = '30';


}
