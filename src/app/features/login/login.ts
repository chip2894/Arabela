import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    standalone: false,
    templateUrl: './login.html',
    styles: ``,
})
export class Login implements OnInit {
    //#region Variables

    loginForm!: FormGroup;

    //#endregion

    constructor(
        private fb: FormBuilder,
        private router: Router,
    ) {}

    ngOnInit(): void {
        this.loginForm = this.fb.group({
            usuario: ['', [Validators.required]],
            password: ['', [Validators.required, Validators.maxLength(6)]],
        });
    }

    get usuarioInvalid(): boolean {
        return !!(
            this.loginForm.get('usuario') &&
            this.loginForm.get('usuario')?.touched &&
            this.loginForm.get('usuario')?.invalid
        );
    }

    get showUsuarioError(): boolean {
        return !!(
            this.loginForm.get('usuario') &&
            this.loginForm.get('usuario')?.touched &&
            this.loginForm.get('usuario')?.invalid
        );
    }

    get passwordInvalid(): boolean {
        return !!(
            this.loginForm.get('password') &&
            this.loginForm.get('password')?.touched &&
            this.loginForm.get('password')?.invalid
        );
    }

    get showPasswordError(): boolean {
        return !!(
            this.loginForm.get('password') &&
            this.loginForm.get('password')?.touched &&
            this.loginForm.get('password')?.invalid
        );
    }

    onSubmit(): void {
        if (this.loginForm.valid) {
            this.router.navigate(['/home']);
        } else {
            this.loginForm.markAllAsTouched();
        }
    }
}
