import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Laboratoria Memes';

  constructor(private router: Router, private authService: AuthService) {

  }

  goToFeed() {
    this.router.navigate(['/feed']);
  }

  goToNew() {
    this.router.navigate(['/new']);
  }
}
