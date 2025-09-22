import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideEnvironmentNgxMask } from 'ngx-mask';
import { ToastrModule } from 'ngx-toastr';
import { importProvidersFrom } from '@angular/core';

bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [
    importProvidersFrom(
      ToastrModule.forRoot({
        positionClass: 'toast-top-right', // позиция уведомлений
        timeOut: 3000,
        preventDuplicates: true,
      })
    ),
    appConfig.providers || [],
    provideAnimations(),
    provideEnvironmentNgxMask(),
    provideAnimationsAsync(),
  ],
}).catch((err) => console.error(err));
