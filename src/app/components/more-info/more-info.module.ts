import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MoreInfoPage } from './more-info.page';
import { FrellaIntroComponentModule } from '../frella.introduction/frella-presentation.module';

import { MoreInfoRoutingModule } from './more-info-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    FrellaIntroComponentModule,
    MoreInfoRoutingModule
  ],
  declarations: [MoreInfoPage]
})
export class MoreInfoPageModule {}
