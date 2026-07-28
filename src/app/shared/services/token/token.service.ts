import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

interface JwtPayload {
  sub: string;
  role: string;
  exp: number;
}

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private readonly TOKEN_KEY = 'token';

  setToken(token: string): void {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  removeToken(): void {
    localStorage.removeItem(this.TOKEN_KEY);
  }

  isLogged(): boolean {
    const token = this.getToken();

    if (!token) {
      return false;
    }

    try {
      const payload = jwtDecode<JwtPayload>(token);

      return payload.exp * 1000 > Date.now();
    } catch {
      return false;
    }
  }

  getUserId(): number | null {
    const token = this.getToken();

    if (!token) {
      return null;
    }

    return Number(jwtDecode<JwtPayload>(token).sub);
  }

  getRole(): string | null {
    const token = this.getToken();

    if (!token) {
      return null;
    }

    return jwtDecode<JwtPayload>(token).role;
  }
}
