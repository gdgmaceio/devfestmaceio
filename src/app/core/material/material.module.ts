import { NgModule } from '@angular/core';
import { MatMenuModule, MatButtonModule } from '@angular/material';

const MATERIAL_MODULES = [
  MatMenuModule,
  MatButtonModule
];

@NgModule({
  imports: [...MATERIAL_MODULES],
  exports: [...MATERIAL_MODULES]
})
export class MaterialModule {}
