import { HttpInterceptorFn } from '@angular/common/http';

export const loggerInterceptor: HttpInterceptorFn = (req, next) => {
  // console.log(`request is on it's way to ${req.url}`)
  console.log('request body',req.body);
  const authReq = req.clone({
    headers: req.headers.set('Authorization', 'Bearer'),
  })
  return next(authReq);
};
