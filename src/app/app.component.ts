import { Component, Inject, Optional, effect, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LanguageService, SERVER_LANG_TOKEN } from './service/language.service';
import { SsrCookieService } from 'ngx-cookie-service-ssr';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'i18n-app';

  cookie = inject(SsrCookieService);
  languageService = inject(LanguageService);

  constructor(
    @Inject(SERVER_LANG_TOKEN)
    @Optional()
    langServer: string
  ){
    // const language = langServer ?? ''
    // const language = langServer ?? (this.cookie.check('lang') ? this.cookie.get('lang') : 'en')

    console.log(this.cookie.get('lang'));
  
    const language = this.cookie.check('lang') ? this.cookie.get('lang') : 'en';
    this.languageService.changeLanguage(language);
    // this.languageService.changeLanguage(lang);
  }

}
