import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule,MatToolbarModule,MatSidenavModule} from '@angular/material';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
@NgModule({
  imports: [MatFormFieldModule,MatButtonModule,
    MatToolbarModule,MatSidenavModule,MatMenuModule,
    MatIconModule,MatTableModule,MatDialogModule],
  
    exports: [MatFormFieldModule,MatButtonModule,
    MatToolbarModule,MatSidenavModule,
    MatMenuModule,MatIconModule,MatTableModule,MatDialogModule],
})
export class MaterialModule { }