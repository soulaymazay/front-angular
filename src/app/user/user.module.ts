import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserComponent } from './user.component';

@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule, // Assurez-vous que CommonModule est importé ici
    RouterModule.forChild([
      { path: 'users', component: UserComponent }
    ])
  ]
})
export class UserModule { }
