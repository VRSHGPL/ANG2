import { Component, Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Someclass } from '../try-iteration/someclass';
import {FirstServiceService} from '../first-service.service';

@Component({
  selector: 'app-objectdetails',
  templateUrl: './objectdetails.component.html',
  styleUrls: ['./objectdetails.component.css'],
   providers: [FirstServiceService]
})

export class ObjectdetailsComponent {
	detailobject:Someclass; 
	detailobjectFromServer:Someclass; 
	id: number;


	ngOnInit(): void {

		this.route.params.subscribe(
		  (params) => {
		    console.log(params);
		    this.detailobject = this.firstService.getObjectForId(+params['id']);

			this.firstService.getObjectsFromSpring(+params['id']).then(x =>  {
				this.detailobjectFromServer = x;	
			});

		  }
		);

		//ParamMap supported only on latest version of router
		//this.route.paramMap
		//.switchMap( (params:ParamMap) => this.firstService.getObjectForId(+params.get('id')))
		//.subscribe( obj => this.detailobject = obj  );   	
  }

	constructor(private route: ActivatedRoute, private firstService : FirstServiceService) {
	}

}
