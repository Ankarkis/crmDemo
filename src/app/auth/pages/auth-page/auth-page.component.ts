import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AmplifyAuthenticatorModule,AuthenticatorService,translations } from '@aws-amplify/ui-angular';
import { I18n } from 'aws-amplify/utils';
import { AuthenticatedServiceService } from '../../../shared/service/authenticated-service.service';
I18n.putVocabularies(translations);
I18n.setLanguage('es');

@Component({
  standalone: true,
  imports: [AmplifyAuthenticatorModule],
  templateUrl: './auth-page.component.html',
  styleUrl: './auth-page.component.css'
})
export default class AuthPageComponent {
  private authenticatorService=inject(AuthenticatorService);
  private router=inject(Router);
  private authenticatedService=inject(AuthenticatedServiceService);
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.authenticatorService.subscribe(authStatus=>{
      if(authStatus.authStatus==='authenticated'){
        this.redirect()
      }
    })
  }

  async redirect(){
    const isAdmin=await this.authenticatedService.isAdmin();

    if(isAdmin){
      this.router.navigate(['/admin']);
      
  }
    this.router.navigate(['/maquinaria-operador'])
  }

}
