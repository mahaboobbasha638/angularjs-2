import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { LoginService } from '../../services/login/login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  constructor(private loginService:LoginService, private route: Router) { }

  ngOnInit() {
    var thisView = this;
    this.loginService.isLoggedIn()
      .subscribe(
          result => {
              if (result["status"]) {
                thisView.route.navigate(['/home']);
                return true;
              } else 
                return false;
          },
          err => {}
      );
  }

}
