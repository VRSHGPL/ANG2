import { Injectable } from '@angular/core';

import { OBJECTS } from './constantObjects';
import { NUMBEROBJECTS } from './constantObjects';
import { Someclass } from './try-iteration/someclass';

//@Injectable() decorator tells TypeScript to emit metadata about the service. The metadata specifies that Angular may need to inject other dependencies into this service.
@Injectable()
export class FirstServiceService {
	getObjects(): Someclass[] {
		return OBJECTS;
	}

	getObjectsAsPromise(): Promise<Someclass[]> {
		return Promise.resolve(NUMBEROBJECTS);
	}

}
