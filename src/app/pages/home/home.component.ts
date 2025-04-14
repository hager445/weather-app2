import { Component } from '@angular/core';
import { SearchinputComponent } from "../searchinput/searchinput.component";
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SearchinputComponent,NavbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
