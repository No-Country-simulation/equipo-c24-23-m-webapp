import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { OAuthService, AuthConfig } from 'angular-oauth2-oidc';

@Injectable({
  providedIn: 'root',
})
export class AuthGoogleService {
  private authConfig!: AuthConfig;
  private isBrowser: boolean;

  constructor(
    private oAuthService: OAuthService,
    @Inject(PLATFORM_ID) private platformId: any
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);

    // ✅ Solo ora calcoliamo il redirectUri
    const redirectUri = this.isBrowser ? `${window.location.origin}/main` : 'https://example.com/callback';

    this.authConfig = {
      issuer: 'https://accounts.google.com',
      redirectUri: redirectUri,
      clientId: '319903143033-a7pcqf5730m8rq2dr6549c0l7lb9s7tq.apps.googleusercontent.com',
      scope: 'openid profile email',
      strictDiscoveryDocumentValidation: false,
    };

    if (this.isBrowser) {
      this.initLogin();
    } else {
      console.warn('OAuth 2.0 non viene inizializzato in SSR');
    }
  }

  private async initLogin() {
    this.oAuthService.configure(this.authConfig);
    this.oAuthService.setupAutomaticSilentRefresh();

    // ✅ `tryLogin()` solo nel browser per evitare l'errore `window is not defined`
    if (this.isBrowser) {
      await this.oAuthService.loadDiscoveryDocumentAndTryLogin();
    }
  }

  login() {
    if (this.isBrowser) {
      this.oAuthService.initLoginFlow();
    }
  }

  logout() {
    if (this.isBrowser) {
      this.oAuthService.logOut();
    }
  }

  getProfile() {
    return this.isBrowser ? this.oAuthService.getIdentityClaims() : null;
  }
}


