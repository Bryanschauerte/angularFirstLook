import { Component } from '@angular/core';


@Component({
  selector:'animations-container',
  templateUrl:'./animations.component.html',
  moduleId: module.id
  // directives:[]
})

export class AnimationsComponent{

  onClickButton(){
    // let link = ['/detail', hero.id];
    // this.router.navigate(link);
    console.log('clicked');
  }

}
