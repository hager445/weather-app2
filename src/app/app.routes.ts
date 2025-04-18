import { Routes } from '@angular/router';
import { WeathercardComponent } from './pages/weathercard/weathercard.component';

export const routes: Routes = [
    {path:'forcast/:index',component:WeathercardComponent}
];
