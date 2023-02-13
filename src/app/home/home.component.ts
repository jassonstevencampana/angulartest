import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isVisible = false;
  isSubmitted = false;
  userForm = new FormGroup(
    {
      name: new FormControl(null, Validators.required),
      age: new FormControl('20')
    }
  );

  constructor() {

  }

  ngOnInit() {
    console.log(this.isSubmitted);

  }

  onFormSubmit() {

    if (this.userForm.invalid) {
      this.isVisible = true;
    }




    console.log(this.userForm);


  }
}
