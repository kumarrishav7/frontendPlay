import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { finalize } from 'rxjs';
import { LoadingService } from './loading.service';

export const yInterceptor: HttpInterceptorFn = (req, next) => {
  const loadingService = inject(LoadingService);
  loadingService.show();
  const modifiedReq = req.clone({
    setHeaders: {
      Authorization: `Bearer YOUR_TOKEN_HERE`,
      'Custom-Header': 'CustomHeaderValue',
    },
  });
  return next(modifiedReq).pipe(
    finalize(() => {
      loadingService.hide();
    })
  );
};
