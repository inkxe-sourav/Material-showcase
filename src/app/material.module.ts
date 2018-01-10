import{NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule,MatInputModule,MatMenuModule, MatProgressSpinnerModule, MatCardModule} from '@angular/material';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';



@NgModule({
  imports: [MatFormFieldModule,MatExpansionModule,MatButtonModule,MatToolbarModule,MatSidenavModule,MatInputModule, MatProgressSpinnerModule, MatCardModule,MatMenuModule,MatIconModule],
  exports: [MatFormFieldModule,MatExpansionModule,MatButtonModule,MatToolbarModule,MatSidenavModule,MatInputModule, MatProgressSpinnerModule, MatCardModule,MatMenuModule,MatIconModule],
})
export class MaterialModule { }