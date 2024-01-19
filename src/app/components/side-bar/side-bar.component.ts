import { Component } from '@angular/core';
import { UserComponent } from './components/user/user.component';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [ UserComponent ],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss'
})
export class SideBarComponent {

}
