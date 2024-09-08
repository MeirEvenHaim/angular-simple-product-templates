import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SlovesService } from '../../sloves.service';

@Component({
  selector: 'app-slove-edit',
  templateUrl: './slove-edit.component.html',
})
export class SloveEditComponent implements OnInit {
  slove: any = {};
  id!: number;  // Use ! if you're certain the id will be assigned.

  constructor(
    private slovesService: SlovesService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    // Safe check and proper parsing
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      if (idParam) {
        this.id = +idParam; // Convert string to number
        this.slovesService.getSloveById(this.id).subscribe(data => {
          this.slove = data;
        });
      }
    });
  }

  updateSlove(): void {
    if (this.id) {
      this.slovesService.updateSlove(this.id, this.slove).subscribe(() => {
        this.router.navigate(['/sloves']);
      });
    }
  }
}
