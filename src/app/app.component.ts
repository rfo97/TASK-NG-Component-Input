import { Component } from '@angular/core';
import { pets } from '../data/pets';
import { PetComponent } from './pet/pet.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ PetComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TASK-NG-Passing-Data';
  pets = pets;
}
