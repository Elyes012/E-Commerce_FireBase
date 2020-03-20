import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private as: AuthService, private route: Router) { }

  ngOnInit() {
  }

  login(form) {
    let data = form.value
    console.log('myform',data)
    this.as.login(data.email, data.password).then(res => console.log(res)).catch(err => {console.log(err)})
    this.route.navigate(['/']);
  }
}
