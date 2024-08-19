import { NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-button',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() href!: string;
  @Input() icon!: string;
  @Input() text!: string;
  @Input() disabled: boolean = false;
  @Input() color: string = 'black'; 
  @Input() target: string = '_blank'; 
  @Input() backgroundColor: string = '$color-main'; 
}
