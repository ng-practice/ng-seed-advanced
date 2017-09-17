import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'awr-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.scss']
})
export class UserDialog {
  @Input() title: string;
}
