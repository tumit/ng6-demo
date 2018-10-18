import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { WindowReference } from './services/window.reference';

@Component({
  selector: 'ng6-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'ng6-demo';

  constructor(private winRef: WindowReference) {
    this.appendGaScript();
  }

  private appendGaScript() {
    try {
      const script = this.winRef.document.createElement('script');
      script.innerHTML = `
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
        ga('create', '${environment.googleAnalyticsTrackingId}', 'auto');
      `;
      this.winRef.document.head.appendChild(script);
    } catch (ex) {
      console.warn('found exception in appending google analytics script', ex);
    }
  }
}
