import { HttpInterceptorFn } from '@angular/common/http';
import { HttpRequest, HttpHandlerFn, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { inject } from '@angular/core';
import { AuthService } from './auth.service';
export const authInterceptor: HttpInterceptorFn = (
  req: HttpRequest<any>,
    next: HttpHandlerFn
): Observable<HttpEvent<any>> => {
  const authService = inject(AuthService);
  const user = authService.getUser(); 
  let token;
  if (user) {
    token = user.authToken;
  }
  if (token) {
    const cloned = req.clone({
      setHeaders: {
        authorization: "Bearer "+token,
      },
    });
    return next(cloned);
  } else {
    return next(req);
  }
  
  
};
