import { Component, EventEmitter, Input , Output} from '@angular/core';
import { MatCard } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-name',
  standalone: true,
  imports: [MatCard,MatButtonModule,CommonModule],
  templateUrl: './name.component.html',
  styleUrl: './name.component.css'
})
export class NameComponent {
  name_show!:string;
  submitted: boolean = false;
  @Input() turn_name = "";
  @Output() gamerName = new EventEmitter<string>();

  showName(name:string){
    this.name_show = name;
    this.gamerName.emit(name);
    this.submitted = true;
  }

}
