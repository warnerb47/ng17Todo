import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'side-bar-nav-items',
  standalone: true,
  imports: [ RouterModule, MatIconModule ],
  templateUrl: './nav-items.component.html',
  styleUrl: './nav-items.component.scss'
})
export class NavItemsComponent {

  constructor(private router: Router) {}

}
