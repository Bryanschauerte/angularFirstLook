import { Component } from '@angular/core';


@Component({
  moduleId: module.id,
  selector:'other-container',
  templateUrl:'./other.component.html'
  // directives:[]
})

export class OtherComponent{

  onClickButton(){
    // let link = ['/detail', hero.id];
    // this.router.navigate(link);
    console.log('clicked');
  }

}
