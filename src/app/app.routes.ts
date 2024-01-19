import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'today-tasks'
    },
    {
        path: 'today-tasks',
        pathMatch: 'full',
        loadComponent: () => import('./modules/today-tasks/today-tasks.component').then(c => c.TodayTasksComponent),
    },
    {
        path: 'scheduled-tasks',
        pathMatch: 'full',
        loadComponent: () => import('./modules/scheduled-tasks/scheduled-tasks.component').then(c => c.ScheduledTasksComponent),
    },
    {
        path: 'settings',
        pathMatch: 'full',
        loadComponent: () => import('./modules/settings/settings.component').then(c => c.SettingsComponent),
    },
    { path: '**', redirectTo: 'today-tasks' }
];
