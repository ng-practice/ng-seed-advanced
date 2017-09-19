import { TitleBus } from './core/title.bus';
import { Component, ViewContainerRef } from '@angular/core';

import { ViewContainerProvider } from './component-library/contracts';

import { NavigationLink } from './navigation/models';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'awr-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppRoot implements ViewContainerProvider {
  links: NavigationLink[] = [
    { text: 'Notes', url: '/notes' },
    { text: 'Feedback', url: '/feedback/questionnaire' }
   ];

  constructor(
    public root: ViewContainerRef,
    public title: Title,
    public titleBus: TitleBus
  ) {
    this.titleBus
      .title()
      .subscribe(newTitle => this.title.setTitle(newTitle));
  }
 }
