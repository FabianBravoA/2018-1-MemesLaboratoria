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
  //visibleButton = false; // el estado del componente
  seconds = 0;

  constructor(private router: Router, private authService: AuthService) {
    setInterval(()=>{
      this.tick();
    }, 1000);
  }

  goToFeed() {
    this.router.navigate(['/feed']); //this instancia particular de la clase
  }

  goToNew() {
    this.router.navigate(['/new']);
  }

  tick() {
    this.seconds++;
  }
}
