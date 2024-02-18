import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const passwordMatch: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const password: AbstractControl<any, any> | null = control.get('password');
    const confirmPassword: AbstractControl<any, any> | null = control.get('confirmPassword');

    if (password?.value === confirmPassword?.value) {
        return null;
    }

    return {
        passwordMatchError: true
    }

}