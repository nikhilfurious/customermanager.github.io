import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  constructor() { }
  skill = [];

  ngOnInit() {
    this.getSkillsDetails(this.about_me.Skills);
  }

  getSkillsDetails(skills : string):void {
      this.skill = skills.split(',');
  }

  public about_me = {
    "name": "Nikhil Chandak",
    "first-name": "Nikhil",
    "last-name": "Chandak",
    "phone1": "+91-9442723502",
    "phone2": "+91-9442223502",
    "mail": "nikhilchandak1999@gmail.com",
    "address": "Chennai",
    "dob" : "10-02-1993",
    "edu" : "BE(CSE)-2020",
    "college": "Sathyabama Institute of Science and Technology,Chennai",
    "designation": "Software Developer",
    "location": "Chennai",
    "linked_id": "https://www.linkedin.com/in/nikhil-chandak-a48022169/",
    "Company1": {
      "name":"HighBrow Technologies",
      "location": "North Carolina",
      "role": "Intern",
      "duration": "May 2018 - June 2018"
    },
    "Company2": {
      "name": "GUVI",
      "location": "Chennai",
      "role": "Intern",
      "duration": "July 2019 - July2019"
    },
    "Summar": "",
    "Project1": "",
    "Project2": "",
    "Skills": " Beginner: Angular(2 & 4), AngularJS, Javascript, TypeScript"
  }

}
