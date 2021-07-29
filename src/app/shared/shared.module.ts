import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './components/shared/shared.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedRoutingModule
  ],
  declarations: [SharedComponent],
  exports: [SharedComponent]
})
export class SharedModule { }
