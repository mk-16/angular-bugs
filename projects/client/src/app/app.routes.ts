import { Routes } from '@angular/router';
import { CustomOneComponent } from './components/custom-one/custom-one.component';
import { CustomTwoComponent } from './components/custom-two/custom-two.component';

export const routes: Routes = [
    {
        path: 'custom-one',
        component: CustomOneComponent,
        outlet: 'primary',
        title: 'Travels Guide',
    },
    {
        path: 'custom-two',
        component: CustomTwoComponent,
        outlet: 'secondary',
    },
];
