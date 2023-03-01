import { NgModule } from '@angular/core';
import { NgxFilepondIvyComponent } from './ngx-filepond-ivy.component';

export { registerPlugin } from 'filepond';


@NgModule({
  declarations: [
    NgxFilepondIvyComponent
  ],
  imports: [
  ],
  exports: [
    NgxFilepondIvyComponent
  ]
})
export class NgxFilepondIvyModule { }
