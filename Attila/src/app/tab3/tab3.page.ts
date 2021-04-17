import { Component } from '@angular/core';
import { NativeAudio } from '@ionic-native/native-audio/ngx';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private nativeAudio: NativeAudio) {}
  
  ngOnInit(){
    this.loadAudios()
  }

  
  loadAudios(){
    //for (let soundName in ["soundboard_1.mp3"]){
      this.nativeAudio.preloadSimple("1", 'assets/sound/glied.mp3');//.then(onSuccess, onError);
    //}
  }

  playAudio(id: String) {
    this.nativeAudio.play("1");//.then(onSuccess, onError);
  }
  

  
}
