import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Welcome = 'Quiero que se muestre en el html';
  tasks = [
    'instalar el angular CLI',
    'Crear proyecto',
    'Crear componentes'
  ]
}
