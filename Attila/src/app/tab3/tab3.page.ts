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
    let soundboard_list = [
      "glied.mp3", 
      "arsch.mp3"
    ];
    for (let sound_name in soundboard_list){
      this.nativeAudio.preloadSimple(sound_name, 'assets/sound/' + sound_name);//.then(onSuccess, onError);
    }
  }

  playAudio(id: string) {
    let last_ID = id;
    this.nativeAudio.play(id);//.then(onSuccess, onError);
  }
  

  
}
