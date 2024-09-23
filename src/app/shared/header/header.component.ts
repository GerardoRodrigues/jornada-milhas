import { Component } from '@angular/core';
import { UserService } from '../../autenticacao/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private userService: UserService, private router: Router){}

  user$ = this.userService.retornarUser();

  logout(){
    this.userService.logout();
    this.router.navigateByUrl('/login')
  }
}
