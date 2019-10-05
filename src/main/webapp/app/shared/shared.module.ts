import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DaydasSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [DaydasSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [DaydasSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DaydasSharedModule {
  static forRoot() {
    return {
      ngModule: DaydasSharedModule
    };
  }
}
