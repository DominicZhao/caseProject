import { NgModule, SkipSelf, Optional } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DomSanitizer } from '@angular/platform-browser';

import { MatIconRegistry } from '@angular/material';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { ServicesModule } from '../services/services.module';
import { AppEffectsModule } from '../effects';
import { AppStoreModule } from '../reducers';

import { loadSvgResources } from '../utils/svg.utils';

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    SharedModule,
    AppRoutingModule,
    ServicesModule.forRoot(),
    AppEffectsModule,
    AppStoreModule,
    BrowserAnimationsModule,
  ],
  exports: [
    AppRoutingModule
  ],
  providers: [
    {
      provide: 'BASE_CONFIG',
      useValue: {
        uri: 'http://localhost:4200'
      }
    }
  ]
})
export class CoreModule {
  constructor(
    @Optional() @SkipSelf() parent: CoreModule,
    ir: MatIconRegistry,
    ds: DomSanitizer
  ) {
    if (parent) {
      throw new Error('模块已存在，不能在加载！');
    }

    loadSvgResources(ir, ds);
  }
}
