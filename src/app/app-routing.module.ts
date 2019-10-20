import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AllComponent } from './all/all.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { DetailsComponent } from './details/details.component';

// configuring the routes
const appRoutes: Routes = [
    {path: '', redirectTo: '/movies', pathMatch: 'full' },
    {path: 'movies/:id', component: DetailsComponent },
    {path: 'movies', component: AllComponent},
    {path: 'favorite', component: FavouriteComponent} 
  ]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})

export class AppRoutingModule{

}