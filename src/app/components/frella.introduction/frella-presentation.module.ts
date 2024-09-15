import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FrellaIntroComponent } from './frella-presentation.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [FrellaIntroComponent],
  exports: [FrellaIntroComponent]
})
export class FrellaIntroComponentModule {}
