import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { HeaderComponent } from './header/header.component';
import { PopoverInfoComponent } from './popover-info/popover-info.component';



@NgModule({
  declarations: [
    HeaderComponent,
    PopoverInfoComponent
  ],
  exports: [
    HeaderComponent,
    PopoverInfoComponent, //No es necesario cargarlo cuando se 
                            // carga por medio de lazy loading, 
                            //se cargaria al menos que se requiera como ruta
  ],
  imports: [
    CommonModule,
    IonicModule,
  ]
})
export class ComponentsModule { }
