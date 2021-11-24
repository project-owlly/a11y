import { Component } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private oidcSecurityService: OidcSecurityService
  ) {}

  login(){
    this.oidcSecurityService.authorize();
  }

}
