import { Injectable } from '@angular/core';

@Injectable()
export class MailService {
   messages = [`This is the first line`,
   `This is the second line`,
   `This is the third line `];
  constructor() { }

}
