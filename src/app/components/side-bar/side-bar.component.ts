import { Component } from '@angular/core';
import { UserComponent } from './components/user/user.component';
import { NavItemsComponent } from './components/nav-items/nav-items.component';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [ UserComponent, NavItemsComponent ],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss'
})
export class SideBarComponent {

}
