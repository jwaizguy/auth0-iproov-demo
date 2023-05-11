import { Component } from '@angular/core';
import '@iproov/web-sdk';

@Component({
  selector: 'app-iproov',
  templateUrl: './iproov.component.html',
  styleUrls: ['./iproov.component.scss'],
})
export class IproovComponent {

  
  token = '74ed74e4b0e6d117c4132b7b4d8a2878f11c6f68b4b2b7b6a9b556db1801vu01';


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
          <button type="button">
              Scan Face
          </button>
      </div>`;

      document
        .getElementById('iproov-container')
        ?.insertAdjacentElement('beforebegin', iProovMe);
    });
  }
}
