import { Component } from '@angular/core';
import { AmplifyAuthenticatorModule,translations } from '@aws-amplify/ui-angular';
import { I18n } from 'aws-amplify/utils';
I18n.putVocabularies(translations);
I18n.setLanguage('es');
@Component({
  standalone: true,
  imports: [AmplifyAuthenticatorModule],
  templateUrl: './auth-page.component.html',
  styleUrl: './auth-page.component.css'
})
export default class AuthPageComponent {

}
