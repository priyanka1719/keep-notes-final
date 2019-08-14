import { FormGroup, AbstractControl, ValidatorFn } from '@angular/forms';

// custom validator to check that two fields match
// export function MustMatch(controlName: string, matchingControlName: string) {
//   return (formGroup: FormGroup) => {
//       const control = formGroup.controls[controlName];
//       const matchingControl = formGroup.controls[matchingControlName];

//       if (matchingControl.errors && !matchingControl.errors.mustMatch) {
//           // return if another validator has already found an error on the matchingControl
//           return;
//       }

//       // set error on matchingControl if validation fails
//       if (control.value !== matchingControl.value) {
//           matchingControl.setErrors({ mustMatch: true });
//       } else {
//           matchingControl.setErrors(null);
//       }
//   }
// }

export function MustMatch(controlName: string, matchingControlName: string): ValidatorFn {
  return (formGroup: FormGroup): { [key: string]: boolean } => {

    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];

    let controlsMatch = control.value !== matchingControl.value;
    console.log('controlsMatch : ' , controlsMatch);

    return { 'isMatch': controlsMatch };
  };
}

// export function MustMatch1(controlName: string, matchingControlName: string) {
//   return (formGroup: FormGroup) => {
//     const control = formGroup.controls[controlName];
//     const matchingControl = formGroup.controls[matchingControlName];

//     if (matchingControl.errors && !matchingControl.errors.mustMatch) {
//       // return if another validator has already found an error on the matchingControl
//       return;
//     }

//     // set error on matchingControl if validation fails

//     let controlsMatch = control.value !== matchingControl.value;

//     return { 'isMatch': controlsMatch };
//   }
// }