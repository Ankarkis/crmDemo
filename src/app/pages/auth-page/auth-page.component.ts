import { Component } from '@angular/core';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';
@Component({
  standalone: true,
  imports: [AmplifyAuthenticatorModule],
  templateUrl: './auth-page.component.html',
  styleUrl: './auth-page.component.css'
})
export default class AuthPageComponent {

}
