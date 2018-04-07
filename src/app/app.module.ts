import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { HttpModule } from '@angular/http';
import { FavoriteComponent } from './favorite/favorite.component';
import { DataStoregeService } from './shared-sevices/data-storage.service';
import { RouterModule } from '@angular/router';
import { FavoriteService } from './favorite/favorite.service';
import { LoadingComponent } from './loading/loading.component';


const AppRoutes: Routes = [
  { path: '', redirectTo: '/trending', pathMatch: 'full' },
  {path: 'trending', redirectTo: '/trending', pathMatch: 'full'},
  {path: 'favorites', redirectTo: '/favorites', pathMatch: 'full'},
  { path: 'trending', component: BodyComponent},
  { path: 'favorites', component: FavoriteComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FavoriteComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [DataStoregeService, FavoriteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
