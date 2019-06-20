import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateNewWalletPage } from './create-new-wallet';

@NgModule({
  declarations: [
    CreateNewWalletPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateNewWalletPage),
  ],
})
export class CreateNewWalletPageModule {}
