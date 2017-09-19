import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CommonModule } from '@angular/common';

import { environment } from '../../environments/environment';

@NgModule({
  imports: [
    CommonModule,

    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),

    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  declarations: []
})
export class NgrxModule { }
