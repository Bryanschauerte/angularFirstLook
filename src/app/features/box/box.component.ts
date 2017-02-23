import { Component,
  Input,
  trigger,
  state,
  style,
  transition,
  animate} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'box-component',
  // templateUrl: './box.component.html',
  template: `<div [@visibility]='visibility' >
  <button (click) = 'buttonClick($event)' >Currenlty: {{visibility}}</button>
      <div *ngIf="visibility" >
        <ng-content></ng-content>
        Can you see me?
      </div>
    </div>
  `,
  styleUrls: [ './box.component.css'],
  styles:[],
  animations: [
    //trigger 'visiablity is the [@triggerName]'s value
    trigger('visibility', [

      state('true', style({
        backgroundColor: '#eee',
        transform: 'translateY(0%)'
      })),
      state('false',   style({
        backgroundColor: '#cfd8dc',
        transform: 'translateY(50%)'
      })),
      transition('true => false', animate('100ms ease-in')),
     transition('false => true', animate('100ms ease-out'))
    ])]
})

export class BoxComponent {
  visibility: string = 'true';
  // @Input() heroes: Heroes;
  buttonClick($event){
console.log($event, "events that are tangible")
    this.visibility = this.visibility ==='true'? 'false':'true';
  }
}
