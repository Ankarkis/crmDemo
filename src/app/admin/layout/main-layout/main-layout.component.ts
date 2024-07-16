import { CommonModule } from '@angular/common';
import { Component, Renderer2, ViewChild, inject } from '@angular/core';
import {  NavigationEnd, Router, RouterModule } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';
import { Subscription, filter } from 'rxjs';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { TopBarComponent } from '../top-bar/top-bar.component';
import { MenuService } from '../../services/app.menu.service';
import { LayoutService } from '../../services/app.layout.service';
import { TabCloseEvent } from '../../interfaces/tab-close-event';
import { AuthenticatedServiceService } from '../../../shared/service/authenticated-service.service';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [CommonModule, RouterModule, MenubarModule, TopBarComponent, SidebarComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent {


  overlayMenuOpenSubscription: Subscription;

  tabOpenSubscription: Subscription;

  tabCloseSubscription: Subscription;

  menuOutsideClickListener: any;

  @ViewChild(SidebarComponent) appSidebar!: SidebarComponent;

  @ViewChild(TopBarComponent) appTopbar!: TopBarComponent;

  constructor(private menuService: MenuService, public layoutService: LayoutService, public renderer: Renderer2, public router: Router) {
      this.overlayMenuOpenSubscription = this.layoutService.overlayOpen$.subscribe(() => {
          if (!this.menuOutsideClickListener) {
              this.menuOutsideClickListener = this.renderer.listen('document', 'click', event => {
                  const isOutsideClicked = !(this.appSidebar.el.nativeElement.isSameNode(event.target) || this.appSidebar.el.nativeElement.contains(event.target)
                  || this.appTopbar.menuButton.nativeElement.isSameNode(event.target) || this.appTopbar.menuButton.nativeElement.contains(event.target));
                  if (isOutsideClicked) {
                      this.hideMenu();
                  }
              });
          }

          if (this.layoutService.state.staticMenuMobileActive) {
              this.blockBodyScroll();
          }
      });

      this.router.events.pipe(filter(event => event instanceof NavigationEnd))
          .subscribe(() => {
              this.hideMenu();
          });

      this.tabOpenSubscription = this.layoutService.tabOpen$.subscribe(tab => {
          this.router.navigate(tab.routerLink);
          this.layoutService.openTab(tab);
      });

      this.tabCloseSubscription = this.layoutService.tabClose$.subscribe((event: TabCloseEvent) => {
          if (this.router.isActive(event.tab.routerLink[0], { paths: 'subset', queryParams: 'subset', fragment: 'ignored', matrixParams: 'ignored'})) {
              const tabs = this.layoutService.tabs;

              if (tabs.length > 1) { 
                  if (event.index === (tabs.length - 1))
                      this.router.navigate(tabs[tabs.length - 2].routerLink);
                  else
                      this.router.navigate(tabs[event.index + 1].routerLink);
              }
              else {
                  this.router.navigate(['/']);
              }
          }

          this.layoutService.closeTab(event.index);
      });
  }

  blockBodyScroll(): void {
      if (document.body.classList) {
          document.body.classList.add('blocked-scroll');
      }
      else {
          document.body.className += ' blocked-scroll';
      }
  }

  unblockBodyScroll(): void {
      if (document.body.classList) {
          document.body.classList.remove('blocked-scroll');
      }
      else {
          document.body.className = document.body.className.replace(new RegExp('(^|\\b)' +
              'blocked-scroll'.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
      }
  }

  hideMenu() {
      this.layoutService.state.overlayMenuActive = false;
      this.layoutService.state.staticMenuMobileActive = false;
      this.layoutService.state.menuHoverActive = false;
      this.menuService.reset();
      if(this.menuOutsideClickListener) {
          this.menuOutsideClickListener();
          this.menuOutsideClickListener = null;
      }
      this.unblockBodyScroll();
  }

  get containerClass() {
      return {
          'layout-slim': this.layoutService.config.menuMode === 'slim',
          'layout-static': this.layoutService.config.menuMode === 'static',
          'layout-mobile-active': this.layoutService.state.staticMenuMobileActive,
          'layout-static-inactive': this.layoutService.state.staticMenuDesktopInactive && this.layoutService.config.menuMode === 'static',
          'p-input-filled': this.layoutService.config.inputStyle === 'filled',
          'p-ripple-disabled': !this.layoutService.config.ripple,
          'layout-light': this.layoutService.config.layoutTheme === 'colorScheme' && this.layoutService.config.colorScheme === 'light',
          'layout-dark': this.layoutService.config.layoutTheme === 'colorScheme' && this.layoutService.config.colorScheme === 'dark',
          'layout-primary': this.layoutService.config.colorScheme !== 'dark' && this.layoutService.config.layoutTheme === 'primaryColor'
      }
  }

  ngOnDestroy() {
      if (this.overlayMenuOpenSubscription) {
          this.overlayMenuOpenSubscription.unsubscribe();
      }

      if (this.menuOutsideClickListener) {
          this.menuOutsideClickListener();
      }

      if (this.tabOpenSubscription) {
          this.tabOpenSubscription.unsubscribe();
      }

      if (this.tabCloseSubscription) {
          this.tabCloseSubscription.unsubscribe();
      }
  }

}
