import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-searchinput',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './searchinput.component.html',
  styleUrl: './searchinput.component.css'
})
export class SearchinputComponent {
inputValue:string='';
typeInputValue(){
console.log(this.inputValue);

}

}
