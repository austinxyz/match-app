import React from "react";
import TeamWithSelectPairs from '../components/TeamWithSelectPairs';
import LineupCompTable from '../components/LineupCompTable';

class TeamComparation extends React.Component {

 constructor(props) {
    super(props);
    this.state = {
        team1: "",
        team2: "",
        lineup1: {},
        lineup2: {}
    };
    this.team1Ref = React.createRef();
    this.team2Ref = React.createRef();
 }

  updateTeam1Lineup(evt) {
    let index = 0;
    if (evt.target.value != null && evt.target.value !="") {
        index = parseInt(evt.target.value) -1;
    }
    let state = this.team1Ref.current.state;
    let teamLineup1 = state.lineup;
    let teamName1 = state.teamName;

    if (teamLineup1 == null) {
        return;
    }

    this.setState({
      lineup1 : teamLineup1[index],
      team1: teamName1
    });
  }

  updateTeam2Lineup(evt) {
    let index = 0;
    if (evt.target.value != null && evt.target.value !="") {
        index = parseInt(evt.target.value) -1;
    }
    let state = this.team2Ref.current.state;
    let teamLineup2 = state.lineup;
    let teamName2 = state.teamName;

    if (teamLineup2 == null) {
        return;
    }

    this.setState({
      lineup2 : teamLineup2[index],
      team2: teamName2
    });
  }

 render() {

    return (
    <div class="w-1/2 align-middle inline-block min-w-fit shadow bg-white shadow-dashboard px-2 py-2 rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-lg">
            <div class="flex flex-row min-h-screen w-full bg-gray-100 text-gray-700" x-data="layout">
                <div class="m-2 w-1/2 flow-row">
                    <TeamWithSelectPairs ref={this.team1Ref}/>
                </div>
                <div>
                    <LineupCompTable team1={this.state.team1} team2={this.state.team2} lineup1={this.state.lineup1} lineup2={this.state.lineup2} />
                    <div class="flex flex-col md:flex-row md:transform md:scale-75 lg:scale-100 justify-center">
                        <div class="md:w-1/2 px-3">
                        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" >
                            Team 1 Lineup No.
                        </label>
                        <input class="appearance-none block bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-1 px-1" onChange={evt => this.updateTeam1Lineup(evt)}></input>
                        </div>
                        <div class="md:w-1/2 px-3">
                        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" >
                            Team 2 Lineup No.
                        </label>
                        <input class="appearance-none block bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-1 px-1" onChange={evt => this.updateTeam2Lineup(evt)}></input>
                        </div>
                    </div>
                </div>
                <div class="m-2 w-1/2 flow-row">
                    <TeamWithSelectPairs ref={this.team2Ref}/>
                </div>
            </div>

   </div>
    );
 }
}

export default TeamComparation;