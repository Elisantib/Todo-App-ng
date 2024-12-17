import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { compileNgModule } from '@angular/compiler';


@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './labs.component.html',
  styleUrls: ['./labs.component.css']
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
  disabled = true;
  img ='https://www.webconsultas.com/sites/default/files/styles/wc_adaptive_image__medium/public/media/2024/08/06/munchkin_gato.jpg.webp'

  person = {
    name: 'Elisa',
    age: 18,
    office: 'Desarrolladora web'

  }

  //metodo de la clase
  clickHandler() {
    alert('hola')
  }

  changeHandler(event: Event) {
    console.log(event)
  }

  keydownHandler(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    console.log(input.value)
  }

}
