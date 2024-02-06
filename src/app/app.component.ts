import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NameComponent } from './name/name.component';
import { BoardComponent } from './board/board.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NameComponent,BoardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'tic_tac_toe_angular';
  name_X: string = "X";
  name_O: string = "O";
  nameX: string = "";
  nameO: string = "";

  winnerNamesX(name: string){
    this.nameX = name;
  }
  winnerNamesO(name: string){
    this.nameO = name;
  }

  showWinner(winner: string){
    if(winner == "X" && this.nameX){
      alert('Congratulations '+this.nameX+' you have won');
    }
    else if(winner == "O" && this.nameO){
      alert('Congratulations '+this.nameO+' you have won');
    }
    else if(winner == "Tie"){
      alert('Its a tie !!');
    }
    else{
      alert('Congratulations '+winner+' you have won');
    }
  }
}
