import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomepageComponent } from './components/homepage/homepage.component';



@NgModule({
  declarations: [
    SidebarComponent,
    HomepageComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SidebarComponent,
    HomepageComponent
  ]
})
export class SharedModule { }
