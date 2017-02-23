
import {
  Component,
  Input,
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/core';
import {ViewEncapsulation} from '@angular/core';

  @Component({
    moduleId: module.id,
    templateUrl:'./buttonDrop.component.html',
    styleUrls: [ './buttonDrop.component.css'],
    encapsulation: ViewEncapsulation.Emulated,
    selector: 'button-drop',
    animations: [ trigger('isOpen', [ state('inactive', style({backgroundColor: '#eee', transform: 'scale(.5)'}) ),
                    state('active', style({ backgroundColor: '#fff',transform: 'scale(1)'}) ),
                    transition('inactive => active', animate('100ms ease-in') ),
                    transition('active => inactive', animate('100ms ease-out') )
                  ]
                )
      ]

  })
  export class ButtonDrop {
    @Input() isOpen: string='inactive';
    toggleMouse($event){
      console.log($event, "$event")
      this.isOpen = this.isOpen === 'inactive'? 'active': 'inactive';
    }

  }
