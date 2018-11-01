import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiModule, Configuration, ConfigurationParameters } from '../api';

import { environment } from '../environments/environment';
import { IntComponent } from './int/int.component';
import { GuidComponent } from './guid/guid.component';
import { DateComponent } from './date/date.component';

export function apiConfigFactory(): Configuration {
  const params: ConfigurationParameters = {
    basePath: environment.apiBasePath,
  };
  return new Configuration(params);
}

@NgModule({
  declarations: [
    AppComponent,
    IntComponent,
    GuidComponent,
    DateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ApiModule.forRoot(apiConfigFactory),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
