import { Component } from '@angular/core';
import { GoogleAnalyticsService } from './services/google-analytics.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'ng6-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'ng6-demo';

  constructor(private gaService: GoogleAnalyticsService) {
    this.appendGaTrackingCode();
  }

  count() {
    this.gaService.emitEvent('submission', 'submit', 'count', 10);
  }

  close() {
    this.gaService.emitEvent('submission', 'button', 'close', 10);
  }

  private appendGaTrackingCode() {
    try {
      const script = document.createElement('script');
      script.innerHTML = `
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
        ga('create', '${environment.googleAnalyticsKey}', 'auto');
      `;
      document.head.appendChild(script);
    } catch (ex) {
      console.error('Error appending google analytics');
      console.error(ex);
    }
  }
}
