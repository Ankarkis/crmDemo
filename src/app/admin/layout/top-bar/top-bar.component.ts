import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from '../../services/app.layout.service';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { StyleClassModule } from 'primeng/styleclass';
import { AuthenticatedServiceService } from '../../../shared/service/authenticated-service.service';


@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [CommonModule,RouterModule,StyleClassModule],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.css'
})
export class TopBarComponent {
    private authenticatedService=inject(AuthenticatedServiceService);
    private router=inject(Router);
    name:string=''

  menu: MenuItem[] = [];

  @ViewChild('searchinput') searchInput!: ElementRef;

  @ViewChild('menubutton') menuButton!: ElementRef;

  searchActive: boolean = false;

  constructor(public layoutService: LayoutService) {}

  async ngOnInit(): Promise<void> {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.name=''
  }

  onMenuButtonClick() {
      this.layoutService.onMenuToggle();
  }

  activateSearch() {
      this.searchActive = true;
      setTimeout(() => {
          this.searchInput.nativeElement.focus();
      }, 100);
  }

  deactivateSearch() {
      this.searchActive = false;
  }

  removeTab(event: MouseEvent, item: MenuItem, index: number) {
      this.layoutService.onTabClose(item, index);
      event.preventDefault();
  }

  get layoutTheme(): string {
      return this.layoutService.config.layoutTheme;
  }

  get colorScheme(): string {
      return this.layoutService.config.colorScheme;
  }

  get logo(): string {
      const path = 'assets/layout/images/logo-';
      const logo = this.layoutTheme === 'primaryColor' ? 'light.png' : (this.colorScheme === 'light' ? 'dark.png' : 'light.png');
      return path + logo;
  }

  get tabs(): MenuItem[] {
      return this.layoutService.tabs;
  }

  logout(){
    this.authenticatedService.logOut();
    this.router.navigate([''])
  }
}
