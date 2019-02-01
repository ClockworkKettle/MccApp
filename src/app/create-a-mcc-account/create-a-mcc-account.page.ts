import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-a-mcc-account',
  templateUrl: './create-a-mcc-account.page.html',
  styleUrls: ['./create-a-mcc-account.page.scss'],
})
export class CreateAMCCAccountPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToMembers() {
    this.router.navigate(['members']);
  }
}
