import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
	//moduleId: module.id,
	selector: 'my-app',
	template: `
		<h1>{{title}}</h1>
		<nav>
		    <a routerLink="a">Index</a>
		</nav>
		<router-outlet></router-outlet>
	`,
	directives: [ROUTER_DIRECTIVES]
})
export class AppComponent implements OnInit {
	title = 'ng2-start';

	constructor() {}

	ngOnInit() {
		
	}
}