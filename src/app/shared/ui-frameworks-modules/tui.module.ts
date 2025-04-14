import { NgModule } from '@angular/core'

import {TuiTable} from '@taiga-ui/addon-table';
@NgModule({
  imports: [
    [...TuiTable]
  ],
  exports: [
    [...TuiTable],
  ],
})
export class TuiModule {}