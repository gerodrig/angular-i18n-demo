import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { LanguageService } from '@app/service/language.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-language-selector',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule
  ],
  templateUrl: './language-selector.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LanguageSelectorComponent { 
  languageService = inject(LanguageService);
  currentLanguage = this.languageService.currentLanguage;


  languages = signal([
    {code: 'en', flag: '🇺🇸', label: 'English'},
    {code: 'fr', flag: '🇫🇷', label: 'Français'},
    {code: 'es', flag: '🇲🇽', label: 'Español'},
    {code: 'it', flag: '🇮🇹', label: 'Italiano'}
  ]);

  changeLanguage(event: Event){
    const target = event.target as HTMLSelectElement;
    const language = target.value;

    this.languageService.changeLanguage(language);
  }
}
