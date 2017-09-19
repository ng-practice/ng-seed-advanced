import {
  ApplicationRef,
  ComponentFactoryResolver,
  Injector,
  NgModule,
  ViewContainerRef
} from '@angular/core';

import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import {
  MdCardModule,
  MdButtonModule,
  MdInputModule,
  MdIconModule
} from '@angular/material';

import { MODAL } from './message-modal/modal.service';

import { UserDialog } from './user-dialog/user-dialog.component';
import { MessageModal } from './message-modal/message-modal.component';

import { NotFound } from './not-found/not-found.component';
import {
  PasswordInputs
} from './password-inputs/password-inputs.component';

@NgModule({
  imports: [
    CommonModule,

    FormsModule,

    MdCardModule,
    MdButtonModule,
    MdInputModule,
    MdIconModule
  ],
  declarations: [
    MessageModal,
    NotFound,
    UserDialog,
    PasswordInputs
  ],
  exports: [
    NotFound,
    UserDialog,
    PasswordInputs
  ],
  entryComponents: [MessageModal],
  providers: [MODAL, NotFound]
})
export class ComponentLibraryModule {}
