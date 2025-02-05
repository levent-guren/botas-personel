import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { LoginService } from '../../service/login.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  form: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private loginService: LoginService,
    private toastr: ToastrService,
  ) {
    this.form = this.fb.group({
      username: [''],
      password: ['']
    });
  }
  login() {
    const username = this.form.get('username')?.value;
    const password = this.form.get('password')?.value;
    this.loginService.login(username, password).subscribe({
      next: (data) => {
        this.loginService.token = data.token;
        this.toastr.success('Giriş başarılı.');
        this.router.navigate(['/anaSayfa']);
      },
      error: (error) => {
        this.toastr.error('Hata oluştu. Giriş yapılamadı.');
      }
    });
  }
}
