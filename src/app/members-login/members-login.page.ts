import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-members-login',
  templateUrl: './members-login.page.html',
  styleUrls: ['./members-login.page.scss'],
})
export class MembersLoginPage implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
  }

  goToMembers() {
    this.router.navigate(['members']);
  }

  goToCreateAMCCAccount() {
    this.router.navigate(['create-a-mcc-account']);
  }
}
