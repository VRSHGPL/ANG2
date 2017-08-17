import { Injectable } from '@angular/core';

import { OBJECTS } from './constantObjects';
import { NUMBEROBJECTS } from './constantObjects';
import { Someclass } from './try-iteration/someclass';

import { Headers, Http } from "@angular/http";
import 'rxjs/add/operator/toPromise';

//@Injectable() decorator tells TypeScript to emit metadata about the service. The metadata specifies that Angular may need to inject other dependencies into this service.
@Injectable()
export class FirstServiceService {
	private objectsUrl = 'user/detail?id=';
 	private headers = new Headers({'Content-Type': 'application/json'});

 	constructor(private http: Http) {}

	getObjects(): Someclass[] {
		return OBJECTS;
	}

	getAllObjects(): Someclass[] {
		return OBJECTS.concat(NUMBEROBJECTS);
	}

	getObjectsAsPromise(): Promise<Someclass[]> {
		return Promise.resolve(NUMBEROBJECTS);
	}

	getObjectForId(id : number) : Someclass {
		//return this.getObjectsAsPromise().then(xyz =>  xyz.find( obj =>obj.id === id  )  );
		 
		  for (var i = 0; i < this.getAllObjects().length; i++) { 
		  		if((this.getAllObjects()[i]).id === id ) {
		  			return this.getAllObjects()[i];
		  		}
			}
	}

	getObjectsFromSpring(id: number) : Promise<Someclass> {
	 	console.log('getting'+ id);
   	    const url = this.objectsUrl + id;
		console.log(url);
		return this.http.get(url)
		.toPromise()
		.then(response => response.json() as Someclass)
		.catch(this.handleError);

	}

	private handleError(error: any): Promise<any> {
		console.error('An error occurred: ', error); // for demo only
   		return Promise.reject(error.message || error);
  }


}

