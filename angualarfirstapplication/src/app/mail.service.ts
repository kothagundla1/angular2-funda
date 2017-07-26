import { Injectable } from '@angular/core';

@Injectable()
export class MailService {
   messages = [
     {id :0, text:   `This is the first line `},
     {id :1, text:  `This is the second line`},
     {id :2,  text:   `This is the third line `}];
  update(id, text){
    this.messages = this.messages.map(m =>
      m.id === id
        ? {id, text}
        : m
    )
  }
  constructor() { }



}
