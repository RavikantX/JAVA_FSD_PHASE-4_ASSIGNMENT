import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUser()
  {
      return {name:"Ravikant",email:"ravi@gmail.com",address:"Sonepur"};
  }
}