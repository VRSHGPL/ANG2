import { Component, Input } from '@angular/core';

import { Someclass } from '../try-iteration/someclass';

@Component({
  selector: 'app-select-an-object',
  templateUrl: './select-an-object.component.html',
  styleUrls: ['./select-an-object.component.css']
})
export class SelectAnObjectComponent  {
	@Input() someotherobject:Someclass; 

}
