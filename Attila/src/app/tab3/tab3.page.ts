import { Component } from '@angular/core';
import { NativeAudio } from '@ionic-native/native-audio/ngx';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  
  soundboard_list = [
    "glied", 
    "agi",
    "iiiä",
    "bitter"
  ];

  constructor(private nativeAudio: NativeAudio) {}
  
  ngOnInit(){
    this.loadAudios()
  }

  
  loadAudios(){
  
    for (let sound_name of this.soundboard_list){
      this.nativeAudio.preloadSimple(sound_name, 'assets/sound/' + sound_name + ".mp3").then(() => {this.log("hat funktioniert")}, (error) => {this.log(error)});
    }
  }

  playAudio(id: string) {
    this.log(id)
    this.nativeAudio.play(id);//.then(onSuccess, onError);
  }
  
  log(message: string){
    document.getElementById("A").innerHTML = message;
  }
  
}
