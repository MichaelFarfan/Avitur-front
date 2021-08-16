import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HotelsModule } from 'src/app/modules/hotels/hotels.module';
import { FiltersModule } from 'src/app/modules/filters/filters.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HotelsModule,
    FiltersModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
