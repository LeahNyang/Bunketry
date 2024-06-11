import { ApplicationConfig } from '@angular/core';
import { InMemoryScrollingFeature,
  InMemoryScrollingOptions,
  Route,
  RouterLink,
  withInMemoryScrolling,provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

const scrollConfig: InMemoryScrollingOptions = {
  scrollPositionRestoration: 'top',
  anchorScrolling: 'enabled',
};

const inMemoryScrollingFeature: InMemoryScrollingFeature =
  withInMemoryScrolling(scrollConfig);
  
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimationsAsync(),provideRouter(routes, inMemoryScrollingFeature)]
};
