import { Component, OnInit } from '@angular/core';
import { GoogleAnalyticsService } from 'src/app/services/google-analytics.service';

@Component({
  selector: 'ng6-faq-page',
  templateUrl: './faq-page.component.html',
  styleUrls: ['./faq-page.component.scss']
})
export class FaqPageComponent implements OnInit {

  constructor(private gaService: GoogleAnalyticsService) { }

  ngOnInit() {
  }

  count() {
    this.gaService.emitEvent('submission', 'submit', 'count', 10);
  }

  close() {
    this.gaService.emitEvent('submission', 'button', 'close', 10);
  }

}
