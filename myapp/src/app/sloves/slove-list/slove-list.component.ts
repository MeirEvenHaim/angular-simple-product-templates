import { Component, OnInit } from '@angular/core';
import { SlovesService } from '../../sloves.service';

@Component({
  selector: 'app-slove-list',
  templateUrl: './slove-list.component.html',
})
export class SloveListComponent implements OnInit {
  sloves: any[] = [];

  constructor(private slovesService: SlovesService) { }

  ngOnInit(): void {
    this.slovesService.getSloves().subscribe(data => {
      this.sloves = data;
    });
  }
}
