import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PersonalWalletPage } from './personal-wallet';

@NgModule({
  declarations: [
    PersonalWalletPage,
  ],
  imports: [
    IonicPageModule.forChild(PersonalWalletPage),
  ],
})
export class PersonalWalletPageModule {}
