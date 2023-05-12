import { Component, ElementRef } from '@angular/core';
import '@iproov/web-sdk';

@Component({
  selector: 'app-iproov',
  templateUrl: './iproov.component.html',
  styleUrls: ['./iproov.component.scss'],
})
export class IproovComponent {
  token = 'f6b51860e3151c8c32bcea40d8448ae54155a22520ece0ce36165ad81801vu01';


  ngOnInit() {
    window.addEventListener('WebComponentsReady', () => {
      const iProovMe = document.createElement('iproov-me');

      iProovMe.addEventListener('unsupported', () => {
        console.warn('unsupported event was fired!');
      });

      iProovMe.setAttribute('token', this.token);
      iProovMe.setAttribute('base_url', 'https://us.rp.secure.iproov.me/');

      iProovMe.innerHTML = `
      <div slot="button">
          <button style="background-color:#40c67c; border: none; padding: 1rem; border-radius: .5rem; cursor: pointer; color: white; font-weight: 600" type="button">
              Reconhecimento facial
          </button>
      </div>`;

      document
        .getElementById('iproov-container')
        ?.insertAdjacentElement('beforebegin', iProovMe);

    });
  }
}
