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
  teams = 0;
  teamNum:number = 0;
  newArray:string[][] = [];

  // randomTeams:any[] = [];

  onInput(member: string) {
    this.newMemberName = member;
    console.log(this.members);
  }
  addMember() {
    if (!this.newMemberName) {
      this.errorMessage= "name can't be empty";
    }
    else {
      this.errorMessage="";
      this.members.push(this.newMemberName);
      this.newMemberName = "";
    }
  }

  getTeams(numT:any) {
    this.teams = numT;
  }
  generateTeams() {
    // logic of the teams generation
    if(this.members.length%this.teams == 0){
      this.teamNum  = this.members.length/this.teams;
      const allMembers = [...this.members]
      this.newArray = this.assignTeams(allMembers,this.teams);
      this.errorMessage="";
      console.log(this.newArray);
    }
    else{
      this.errorMessage="members%teams != 0 so we can't generate teams";
    }
  }

  // chat GPT code
  assignTeams(names: string[], numTeams: number): string[][] {
    // Shuffle the array of names randomly
    const shuffledNames = names.sort(() => Math.random() - 0.5);

    // Calculate the number of players per team
    const playersPerTeam = Math.floor(names.length / numTeams);

    // Create an array of empty arrays for each team
    const teams: string[][] = Array.from({ length: numTeams }, () => []);

    // Assign players to teams
    shuffledNames.forEach((name, index) => {
      const teamIndex = Math.floor(index / playersPerTeam);
      teams[teamIndex].push(name);
    });
    return teams;
  }
}
