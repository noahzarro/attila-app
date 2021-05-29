import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  showStates = {
    "beavers" : true,
    "wolfes" : true,
    "scouts" : true,
    "pios" : true
  }

  constructor() { }

  getShow(groupName) {
    return this.showStates[groupName]
  }

  getShowList(){
    let groupsToShow = []
    Object.keys(this.showStates).forEach((group)=>{
      if(this.showStates[group]==true){
        groupsToShow.push(group)
      }
    })

    return groupsToShow
  }

  setShow(groupName, newState) {
     this.showStates[groupName] = newState
  }
}
