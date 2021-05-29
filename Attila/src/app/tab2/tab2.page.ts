import { Component } from '@angular/core';
import { SettingsService } from '../settings-service/settings.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private settingsService: SettingsService) {}

  ngOnInit(){
  }

  showGroups(){
    console.log(this.settingsService.getShowList())
  }
}
