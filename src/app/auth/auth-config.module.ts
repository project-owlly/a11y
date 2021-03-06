import { NgModule } from '@angular/core';
import { AuthModule, LogLevel } from 'angular-auth-oidc-client';


@NgModule({
    imports: [AuthModule.forRoot({
        config: {
              authority: '/proxy/.well-known/openid-configuration',
              redirectUrl: window.location.origin,
              postLogoutRedirectUri: window.location.origin,
              clientId: 'owllyApp',
              scope: 'openid email profile address',
              responseType: 'code',
              silentRenew: true,
              useRefreshToken: true,
              renewTimeBeforeTokenExpiresInSeconds: 30,
              logLevel: LogLevel.Debug,
          }
      })],
    exports: [AuthModule],
})
export class AuthConfigModule {}
