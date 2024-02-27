import { HttpInterceptorFn } from '@angular/common/http';

export const loggerInterceptor: HttpInterceptorFn = (req, next) => {
  if (req.method === 'POST' && authorizationNotRequired(req.url)) {
    // Allow the request to go through without a token
    return next(req);
  } else {
    const token = localStorage.getItem('authorization');
    if (token) {
      const authReq = req.clone({
        setHeaders: {
          Authorization: `${token}`,
        },
      });
      console.log('from the middleware',authReq);
      return next(authReq);
    }
  }
  return next(req);
};

function authorizationNotRequired(url: string): boolean {
  return url.includes('/login');
}
