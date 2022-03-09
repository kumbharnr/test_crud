import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private upersons: User[] = [
    {
      id: 24,
      Name: 'Navnath',
      lastName: 'Kumbhar'
    },
    {
      id: 26,
      Name: 'Rajat',
      lastName: '.'
    }
  ];

  constructor() { }

  getUsersFromData(): User[] {
    return this.upersons;
  }

  addUser(user: User) {
    user.id = this.upersons.length + 1;
    this.upersons.push(user);

  }
  updateUser(user: User) {
    const index = this.upersons.findIndex(u => user.id === u.id);
    this.upersons[index] = user;
  }
  deleteUser(user: User) {
    this.upersons.splice(this.upersons.indexOf(user), 1);
  }
}
