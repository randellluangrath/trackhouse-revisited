import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { ViewComponent } from './components/view/view.component';
import { AboutComponent } from './components/about/about.component';
import { FilterPipe } from './components/filter/filter.pipe';

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        AboutComponent,
        ViewComponent,
        HomeComponent,
        FilterPipe
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'about', component: AboutComponent },
            { path: 'view', component: ViewComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ],
    providers: [ FilterPipe ]
})
export class AppModuleShared {
}
