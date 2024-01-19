import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'side-bar-nav-items',
  standalone: true,
  imports: [ RouterModule ],
  templateUrl: './nav-items.component.html',
  styleUrl: './nav-items.component.scss'
})
export class NavItemsComponent {

  constructor(private router: Router) {}

}
