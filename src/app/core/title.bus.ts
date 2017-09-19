import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TitleBus {
  private title$ = new BehaviorSubject<string>('Login | Aware');

  title(): Observable<string> {
    return this.title$.asObservable();
  }

  set(title: string): void {
    // this.emitter.emit(title);
    this.title$.next(title);
  }
}
