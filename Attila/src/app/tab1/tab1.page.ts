import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  groups = ["beavers", "pios"]
  activities = [];
  base_url = "https://app.pfadi-attila.ch/";
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getActivities(this.groups)
  }


  getActivities(groups) {
    this.activities = [];
    groups.forEach(group => {
      this.http.get(this.base_url + "activities/" + group).toPromise()
        .then(
          (results) => {
            console.log(results);
            this.activities = this.activities.concat(results['activities']);
            this.activities.sort(
              (a, b) => {         //sorting the activities by date
                if (a.date < b.date) { return -1; }
                if (a.date > b.date) { return 1; }
                return 0;
              }
            )
          }
        )
        .catch(
          (results) => {
            console.log(results)
          }
        )
    }
    );
  }
}
