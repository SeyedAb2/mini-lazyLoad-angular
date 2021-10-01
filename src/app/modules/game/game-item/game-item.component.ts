import { Component, OnInit } from '@angular/core';
import { GameItemService } from 'src/app/service/index.service';
import { gameItem } from 'src/app/shared/interface/index.interface';

@Component({
  selector: 'app-game-item',
  templateUrl: './game-item.component.html',
  styleUrls: ['./game-item.component.css']
})
export class GameItemComponent implements OnInit {
  gameItem!: gameItem;
  constructor(private gameItemService: GameItemService) { }

  ngOnInit(): void {
    this.gameItem = this.gameItemService.getItem()
  }

}
