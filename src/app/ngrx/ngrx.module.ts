import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { metaReducers } from './meta-reducers';

import { environment } from '../../environments/environment';

@NgModule({
  imports: [
    CommonModule,

    StoreModule.forRoot({}, { metaReducers }),
    EffectsModule.forRoot([]),

    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  declarations: []
})
export class NgrxModule { }
