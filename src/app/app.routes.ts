import { Routes } from '@angular/router';
import { SettingsComponent } from './settings/settings.component';
import { DisplayComponent } from './display/display.component';

export const routes: Routes = [
    { path: '', component: SettingsComponent },
    { path: 'display', component: DisplayComponent },
];
