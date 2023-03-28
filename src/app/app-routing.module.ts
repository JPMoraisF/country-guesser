import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { GameMenuComponent } from "./components/game-menu/game-menu.component";
import { GameWindowComponent } from "./components/game-window/game-window.component";

const appRoutes: Routes = [
    {path: '', redirectTo: '/menu', pathMatch: 'full'},
    {path: 'menu', component: GameMenuComponent},
    {path: 'game', component: GameWindowComponent}
]


@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}