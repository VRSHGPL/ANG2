import { Component, OnInit} from '@angular/core';
import { Someclass } from './someclass';
import { Router } from '@angular/router';

import {FirstServiceService} from '../first-service.service';


const SOMECONSTANTS: Someclass[] = [
	{ id: 1 , name: 'Mr. Foo'},
	{ id: 2 , name: 'Mr. Bar'}
];

//providers array tell angular to create fresh instance of FirstServiceService when it creates an instance of TryIterationComponent
@Component({
  selector: 'app-try-iteration',
  templateUrl: './try-iteration.component.html',
  styleUrls: ['./try-iteration.component.css'],
  providers: [FirstServiceService]
})

export class TryIterationComponent implements OnInit {
	someObjects = SOMECONSTANTS;
	selectedObject : Someclass;
	//objectsFromOutside: Someclass[];
	objectsFromOutside = this.firstService.getObjects();
	//objectsFromOutsideWithPromise;
	objectsFromOutsideWithPromise = this.firstService.getObjects();
	objFromServer: Someclass;

	getObjetsAsPromise() : void {
		this.firstService.getObjectsAsPromise().then(x => this.objectsFromOutsideWithPromise = x);
	}
	

	onSelect(obj: Someclass): void {
		this.selectedObject = obj;		
	}

 	// mentioning this as a private variable in constructor along with the providers entry does the injection
	constructor(private router:Router, private firstService : FirstServiceService) {

	}

	ngOnInit(): void {
		this.getObjetsAsPromise();
		
		//this.firstService.getObjectsFromSpring(1).then(x =>  {
		//	this.objFromServer = x;	
		//});
		
	}


	viewDetails(): void {
	  this.router.navigate(['detail', this.selectedObject.id]);
	}
}



