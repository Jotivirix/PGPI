import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  signupForm: FormGroup;
  valueToken: any;
  loading: boolean = false;
  error: boolean = false;
  errorRes: string = '';
  constructor(
    private userService: UserService,
    private _builder: FormBuilder,
    private router: Router
  ) {
    this.signupForm = this._builder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  enviar(values: any) {
    this.loading = true;
    this.userService.login(values).subscribe(
      (res) => {
        if (res.status == 'success') {
          this.valueToken =
            JSON.stringify(values).substring(
              0,
              JSON.stringify(values).length - 1
            ) +
            ', "token": "' +
            res['token'] +
            '"}';
          localStorage.setItem('token', this.valueToken);
          this.userService.getUsuario(JSON.parse(this.valueToken)).subscribe(
            (res) => {
              this.userService.editUser(res);
              if (this.userService.userCreate.value.role == 'customer') {
                this.router.navigate(['products']);
              } else {
                this.router.navigate(['pickingOrders']);
              }
            },
            (err) => {
              console.log(err);
            }
          );
        } else {
          console.log(res);
          this.errorRes = res.message;
          this.error = true;
          this.loading = false;
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
