import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';

declare let ga: Function;

@Injectable({
  providedIn: 'root'
})
export class GoogleAnalyticsService {

  constructor(public router: Router) {
    this.router.events
      .pipe(
        filter(e => e instanceof NavigationEnd),
        map(e => e as NavigationEnd)
      )
      .subscribe(e => {
        try {
          ga('set', 'page', e.urlAfterRedirects);
          ga('send', 'pageview');
        } catch (ex) {
          console.log(ex);
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
    eventValue: number = null) {
    const gaEvent = { eventCategory, eventLabel, eventAction, eventValue };
    console.log('gaEvent', gaEvent);
    if (typeof ga === 'function') {
      ga('send', 'event', gaEvent);
    }
  }
}
