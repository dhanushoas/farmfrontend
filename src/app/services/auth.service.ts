import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  // Simulating a login function that stores a JWT token
  login(token: string) {
    localStorage.setItem('authToken', token);
  }

  // Checking if user is authenticated
  isAuthenticated(): boolean {
    return !!localStorage.getItem('authToken');
  }

  // Logout function to remove token
  logout() {
    localStorage.removeItem('authToken');
  }
}
