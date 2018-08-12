import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const CORE_MODULES = [CommonModule];

@NgModule({
  imports: [...CORE_MODULES],
  exports: [...CORE_MODULES]
})
export class CoreModule {
}
