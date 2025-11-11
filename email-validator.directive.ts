import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

@Directive({
  selector: '[appEmailValidator]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: EmailValidatorDirective, multi: true }
  ]
})
export class EmailValidatorDirective implements Validator {
  validate(control: AbstractControl): { [key: string]: any } | null {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-z]+\.[a-z]{2,4}$/;
    if (!control.value) return null;
    return emailPattern.test(control.value) ? null : { invalidEmail: true };
  }
}
