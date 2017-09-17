import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'awr-message-modal',
  templateUrl: './message-modal.component.html',
  styleUrls: ['./message-modal.component.scss']
})
export class MessageModal {
  @Input() title: string;
  @Input() message: string;
  @Input() color = 'basic';

  @Output() close = new EventEmitter();
}
