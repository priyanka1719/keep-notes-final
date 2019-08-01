import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import {Validators,FormControl,FormGroup,FormBuilder} from '@angular/forms';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None //Overrides the styles of the theme with the given styles.css of the component
})
export class LoginComponent implements OnInit {

  loginform: FormGroup;
  constructor(private formBuilder: FormBuilder, private messageService: MessageService) { }

  ngOnInit() {

    this.loginform = this.formBuilder.group({
      'username' : new FormControl('', Validators.required),
      'password' : new FormControl('', Validators.required)
    })
  }

}
