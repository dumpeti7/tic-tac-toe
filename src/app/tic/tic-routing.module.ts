import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardComponent } from '../board/board.component';
import { GameComponent } from '../game/game.component';

const routes: Routes = [
  {path:'',component:GameComponent},
  {path:'',component:BoardComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicRoutingModule { }
