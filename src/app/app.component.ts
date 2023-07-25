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
  onInput(member: string) {
    this.newMemberName=member;
    console.log(this.members);
  }
  addMember() {
    this.members.push(this.newMemberName);

  }

}
