import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-organization-sign-up',
  templateUrl: './organization-sign-up.component.html',
  styleUrls: ['./organization-sign-up.component.css']
})
export class OrganizationSignUpComponent implements OnInit {

  constructor() { }

  username;
  password;
  password2;
  step1isCollapsed = false;
  step2isCollapsed = false;
  step3isCollapsed = false;
  organizationName;
  organizationAddress;
  organizationService;



  ngOnInit() {
  }

}
