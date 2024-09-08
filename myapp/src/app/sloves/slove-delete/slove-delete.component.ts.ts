import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SlovesService } from '../../sloves.service';
@Component({
  selector: 'app-slove-delete',
  templateUrl: './slove-delete.component.html',
})
export class SloveDeleteComponent implements OnInit {
  slove: any = {};
  id!: number;

  constructor(
    private slovesService: SlovesService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      if (idParam) {
        this.id = +idParam;
        this.slovesService.getSloveById(this.id).subscribe(data => {
          this.slove = data;
        });
      }
    });
  }

  deleteSlove(): void {
    if (this.id) {
      this.slovesService.deleteSlove(this.id).subscribe(() => {
        this.router.navigate(['/sloves']);
      });
    }
  }
}
