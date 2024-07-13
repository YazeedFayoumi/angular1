import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent implements OnInit {
  @Input() text!: string;
  @Input() color!: string;
  constructor(){}
  ngOnInit(): void {
      
  }
  onClick(){
    console.log("Add")
  }
}
