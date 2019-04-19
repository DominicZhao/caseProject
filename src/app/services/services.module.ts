import { NgModule, ModuleWithProviders } from '@angular/core';

@NgModule()
export class ServicesModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ServicesModule,
      providers: [

      ]
    };
  }
}
