import { Component, EventEmitter, NgZone, Output } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [MatTableModule,MatCardModule,CommonModule,MatButtonModule],
  templateUrl: './board.component.html',
  styleUrl: './board.component.css'
})
export class BoardComponent {

  @Output() winnerEvent = new EventEmitter<string>();
  emptyCellCount:number = 9;
  winner :string = '';
  gameOver:boolean = false;
  currentPlayer: 'X' | 'O' = 'O';
  board: string[][] = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];
  
  makeMove(row:number,col:number) {
    if(!this.board[row][col]){
      this.board[row][col] = this.currentPlayer;
      this.emptyCellCount--;
      if(this.emptyCellCount == 0){
        this.winnerEvent.emit("Tie");
        return ;
      }
      if(this.checkWinner(row,col)){
        this.winner = this.currentPlayer;
        // alert("winner of the game is " + this.currentPlayer);
          this.winnerEvent.emit(this.currentPlayer);
        console.log(this.currentPlayer);
        this.gameOver = true;
        this.resetGame();
        return ;
      }
      this.currentPlayer = this.currentPlayer === 'X'?'O':'X';
    }
  }

  checkWinner(row:number,col:number) : boolean {
    // Check row
    if (this.board[row][0] === this.currentPlayer && this.board[row][1] === this.currentPlayer && this.board[row][2] === this.currentPlayer) {
      return true;
    }

    // Check column
    if (this.board[0][col] === this.currentPlayer && this.board[1][col] === this.currentPlayer && this.board[2][col] === this.currentPlayer) {
      return true;
    }

    // Check diagonals
    if ((row === col && this.board[0][0] === this.currentPlayer && this.board[1][1] === this.currentPlayer && this.board[2][2] === this.currentPlayer) ||
        (row + col === 2 && this.board[0][2] === this.currentPlayer && this.board[1][1] === this.currentPlayer && this.board[2][0] === this.currentPlayer)) {
          return true;
    }

    return false;
  }

  resetGame(): void {
    this.currentPlayer = this.currentPlayer === 'X'?'O':'X';
    this.emptyCellCount = 9;
    this.gameOver = false;
    this.board = [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ];
  }
}
