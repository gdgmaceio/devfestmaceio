import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';

const CORE_MODULES = [
  CommonModule,
  MaterialModule,
];

@NgModule({
  imports: [...CORE_MODULES],
  exports: [...CORE_MODULES]
})
export class CoreModule {}
