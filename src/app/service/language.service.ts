import { Injectable, InjectionToken, inject, signal } from '@angular/core';
import { SsrCookieService } from 'ngx-cookie-service-ssr';
import { TranslateService } from '@ngx-translate/core';

export const SERVER_LANG_TOKEN =  new InjectionToken<string>('SERVER_LANG_TOKEN');

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  cookie = inject(SsrCookieService);
  translate = inject(TranslateService);

  langServer = inject(SERVER_LANG_TOKEN, {
    optional: true
  });

  currentLanguage = signal(this.langServer ?? 'en');

  changeLanguage(language: string){
    this.cookie.set('lang', language);
    
    this.translate.setDefaultLang(language);  
    this.translate.use(language);

    this.currentLanguage.set(language);
  }
  

}
