import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { TuiModule } from './ui-frameworks-modules/tui.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

@NgModule({
  exports: [
    CommonModule,
    RouterModule,
    TuiModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class SharedModule {}