import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class IproovService {
  constructor(private httpClient: HttpClient) {}

  body = {
    "api_key": "24e048b8558cdc78c6f7bd6dadd278348459e3da",
    "secret": "a0a156c3d33e0f60b528b3227f9ed3644150229d",
    "resource": "onboarding",
    "assurance_type": "genuine_presence",
    "user_id": ""
  };

  service(){
    return this.httpClient.post('http://localhost:3000', this.body);
  }
}
