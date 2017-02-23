import { Component } from '@angular/core';


@Component({
  selector:'landing-container',
  templateUrl:'./landing.component.html',
  moduleId: module.id
  // directives:[]
})

export class LandingComponent{

  onClickButton(){
    // let link = ['/detail', hero.id];
    // this.router.navigate(link);
    console.log('clicked');
  }

}
