import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  signupForm: FormGroup;
  loading: boolean = false;
  error: boolean = false;
  constructor(
    private _authService: AuthService,
    private _builder: FormBuilder,
    private router: Router
  ) {
    this.signupForm = this._builder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  login(values: any) {
    this.loading = true;
    this._authService.login(values).subscribe(
      (res) => {
        if (res.status == 'success') {
          if(this._authService.cUserSubject?.value.role === "customer"){
            this.router.navigate(['products'])
          }
          else{
            this.router.navigate(['worker'])
          }
        }
        else {
          this.error = true;
          this.loading = false;
        }
      },
      (err) => {
        this.error = true;
        this.loading = false;
      }
    );
  }
}
