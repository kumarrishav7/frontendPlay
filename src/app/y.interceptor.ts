import { HttpInterceptorFn } from '@angular/common/http';

export const yInterceptor: HttpInterceptorFn = (req, next) => {
  const modifiedReq = req.clone({
    setHeaders: {
      Authorization: `Bearer YOUR_TOKEN_HERE`,
      'Custom-Header': 'CustomHeaderValue',
    },
  });
  return next(modifiedReq);
};
