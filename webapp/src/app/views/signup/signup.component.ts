import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService, UserSignUpStructure } from '../../services/authentification.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  user: UserSignUpStructure= new UserSignUpStructure("","","","","",[""]);

  constructor(private loginservice:AuthentificationService, private router: Router) { }

  ngOnInit(): void {
    
  }

  createUser(): void {
    console.log("createUser")
    this.user.role = ["user"]
    this.loginservice.createAccount(this.user)
        .subscribe( data => {
          alert("User created successfully.");
          this.router.navigate(['login']);
        });
    console.log("Finish")

  }

}
