import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarCommunicationService {
  private componentFlagSource = new Subject<string>();
  componentFlag$ = this.componentFlagSource.asObservable();

  sendComponentFlag(flag: string) {
    this.componentFlagSource.next(flag);
  }
}
