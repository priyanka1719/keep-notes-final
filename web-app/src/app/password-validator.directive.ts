import { FormGroup, AbstractControl, ValidatorFn } from '@angular/forms';

export function MustMatch(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {

    let controlsMatch = false;

    if (formGroup.controls && formGroup.controls[controlName].value && formGroup.controls[matchingControlName].value) {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      // console.log(`pass is ${control.value} & confirmpass is ${matchingControl.value}`);

      if(control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    }
  };
} 