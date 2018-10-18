import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter, map, tap } from 'rxjs/operators';
import { WindowReference } from './window.reference';
@Injectable({
  providedIn: 'root'
})
export class GoogleAnalyticsService {

  constructor(
    private winRef: WindowReference,
    private router: Router
  ) {
    this.router.events
      .pipe(
        filter(e => e instanceof NavigationEnd),
        map(e => (e as NavigationEnd).urlAfterRedirects)
      )
      .subscribe(url => {
        try {
          this.winRef.ga('set', 'page', url);
          this.winRef.ga('send', 'pageview');
        } catch (ex) {
          console.warn(`found exception: urlAfterRedirects=${url}`, ex);
        }
      });
  }

  /**
   * Emit google analytics event
   * Fire event example:
   * this.emitEvent("testCategory", "testAction", "testLabel", 10);
   * @param {string} eventCategory
   * @param {string} eventAction
   * @param {string} eventLabel
   * @param {number} eventValue
   */
  public emitEvent(
    eventCategory: string,
    eventAction: string,
    eventLabel: string = null,
    eventValue: number = null)
  {
    this.winRef.ga('send', 'event', { eventCategory, eventLabel, eventAction, eventValue });
  }
}
