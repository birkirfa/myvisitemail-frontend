import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';

import { AuthGuard } from './guards/auth-guard.service';
import { AuthInterceptor } from './interceptors/auth-interceptor.service';
import { GlobalErrorHandler } from './handlers/global-error-handler';
import { ApiRequestsInterceptor } from './interceptors/api-requests-interceptor.service';
import { LoginGuard } from './guards/login-guard.service';
import { LockGuard } from './guards/lock-guard.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [],
    imports: [
        SharedModule,
        CommonModule,
        HttpClientModule
    ],
    providers: [
        LockGuard,
        AuthGuard,
        LoginGuard,
        {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
        {provide: HTTP_INTERCEPTORS, useClass: ApiRequestsInterceptor, multi: true},
        {provide: ErrorHandler, useClass: GlobalErrorHandler}
    ]
})
export class CoreModule { }
