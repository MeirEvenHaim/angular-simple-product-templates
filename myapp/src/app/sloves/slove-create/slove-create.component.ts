import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SlovesService } from '../../sloves.service';

@Component({
  selector: 'app-slove-create',
  templateUrl: './slove-create.component.html',
})
export class SloveCreateComponent {
  slove: any = {};

  constructor(private slovesService: SlovesService, private router: Router) { }

  createSlove(): void {
    this.slovesService.createSlove(this.slove).subscribe(() => {
      this.router.navigate(['/sloves']);
    });
  }
}
