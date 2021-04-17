import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  frontimage = "";
  bilder = {"bieber": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.y-jFGr4P0vbUEKqC35tXnQAAAA%26pid%3DApi&f=1",
            "faader":"https://attila-teufen.weebly.com/uploads/2/6/6/5/26659704/6529744_orig.jpg",
            "wolfe": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.PtOv_9-DFFpYhdJ2DwyUzAHaEK%26pid%3DApi&f=1",
            "lumpe":"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.f20aXx9YDGAp7TSjTOo5zwAAAA%26pid%3DApi&f=1"
      }

  constructor() {}

  changeImage(stufe){
    this.frontimage = stufe;
  }
}
