import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'team-app';

  newMemberName = '';
  members: string[] = [];

  errorMessage: string = ""
  teams = "";
  onInput(member: string) {
    this.newMemberName = member;
    console.log(this.members);
  }
  addMember() {
    if (!this.newMemberName) {
      this.errorMessage= "name can't be empty";
    }
    else {
      this.members.push(this.newMemberName);
      this.newMemberName = "";
    }
  }

  getTeams(numT: string) {
    this.teams = numT;
  }
  displayTeams() {
    console.log("pressed");
  }

}
