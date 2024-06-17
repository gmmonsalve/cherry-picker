import { TestBed } from '@angular/core/testing';

import { SubscriptionInterceptorInterceptor } from './subscription-interceptor.interceptor';

describe('SubscriptionInterceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      SubscriptionInterceptorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: SubscriptionInterceptorInterceptor = TestBed.inject(SubscriptionInterceptorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
