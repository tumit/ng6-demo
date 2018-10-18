import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { GlobalReference } from './services/global.reference';

@Component({
  selector: 'ng6-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'ng6-demo';

  constructor(private global: GlobalReference) {
    this.appendGaScript();
  }

  private appendGaScript() {
    try {
      const script = this.global.document.createElement('script');
      script.innerHTML = `
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
        ga('create', '${environment.googleAnalyticsTrackingId}', 'auto');
      `;
      this.global.document.head.appendChild(script);
    } catch (ex) {
      console.warn('found exception in appending google analytics script', ex);
    }
  }
}
