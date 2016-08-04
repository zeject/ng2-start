import { provideRouter, RouterConfig } from '@angular/router';

import { AComponent } from '../index/a.component';

const routes: RouterConfig = [
	{
	  path: '',
	  redirectTo: '/a',
	  pathMatch: 'full'
	},{
	  path: 'a',
	  component: AComponent
	}
]

export const APP_ROUTER_PROVIDERS = [
	provideRouter(routes)
]