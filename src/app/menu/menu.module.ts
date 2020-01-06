import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OwlModule } from 'ngx-owl-carousel';

import { MenuRoutes } from './menu.routing';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { PrivacyComponent } from '../privacy/privacy.component';
import { TermsComponent } from '../terms/terms.component';
import { CategoriesComponent } from '../categories/categories.component';
import { StoresComponent } from '../stores/stores.component';
import { BlogsComponent } from '../blogs/blogs.component';
import { CategoryComponent } from '../category/category.component';
import { StoreComponent } from '../store/store.component';
import { BlogComponent } from '../blog/blog.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(MenuRoutes),
        FormsModule,
        HttpClientModule,
        NgbModule,
        OwlModule
    ],
    declarations: [
        HomeComponent,
        AboutComponent,
        PrivacyComponent,
        TermsComponent,
        CategoriesComponent,
        StoresComponent,
        BlogsComponent,
        CategoryComponent,
        StoreComponent,
        BlogComponent
    ]
})

export class MenuModule { }