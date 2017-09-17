import { Component, Input } from '@angular/core';

import { NavigationLink } from '../models';

@Component({
  selector: 'awr-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNav {
  @Input() links: NavigationLink[];
}
