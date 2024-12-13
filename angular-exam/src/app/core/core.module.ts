import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from '../user/profile/profile.component';

@NgModule({
  declarations: [HeaderComponent, ProfileComponent],
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponent],
})
export class CoreModule {}
