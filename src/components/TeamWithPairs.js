import React, { useState, useEffect, useMemo, useRef } from "react";
import Table from "./Table"
import TeamService from '../services/TeamService';
import PairTable from '../components/PairTable';

class TeamWithPairs extends React.Component {

 constructor(props) {
    super(props);
    this.team = props.team;
    this.state = {
      data: [],
      teamName: "",
      selectedPairs: "",
      lineup: []
    };
    this.d1lineRef = React.createRef();
    this.d2lineRef = React.createRef();
    this.d3lineRef = React.createRef();
    this.mdlineRef = React.createRef();
    this.wdlineRef = React.createRef();
    this.onClick = this.onClick.bind(this);
 }

 componentDidMount() {
    TeamService.getTeam(this.team)
      .then((res) => {
        this.setState((state, props) => ({
            data : res.data.players,
            teamName : res.data.name,
        }));
      })
      .catch((err) => console.log(err))
 }

 getLineString(lineRef) {
       let lineString = lineRef.current.state.player1 + "," + lineRef.current.state.player2;
       if (lineString === ",") {
        lineString = "";
       }
       return lineString;
 }

 getSelectPairs(d1, d2, d3, md, wd) {
    let pairString = "";
    if (d1 === "") {
        pairString = pairString + "D1: Any"
    } else {
        pairString = pairString + "D1: " + d1;
    }
    if (d2 === "") {
        pairString = pairString + " D2: Any"
    } else {
        pairString = pairString + " D2: " + d2;
    }
    if (d3 === "") {
        pairString = pairString + " D3: Any"
    } else {
        pairString = pairString + " D3: " + d3;
    }
    if (md === "") {
        pairString = pairString + " MD: Any"
    } else {
        pairString = pairString + " MD: " + md;
    }
    if (wd === "") {
        pairString = pairString + " WD: Any"
    } else {
        pairString = pairString + " WD: " + wd;
    }
    return pairString;
 }

 onClick() {
   let D1 = this.getLineString(this.d1lineRef);
   let D2 = this.getLineString(this.d2lineRef);
   let D3 = this.getLineString(this.d3lineRef);
   let WD = this.getLineString(this.wdlineRef);
   let MD = this.getLineString(this.mdlineRef);
   this.setState({selectedPairs: this.getSelectPairs(D1,D2,D3,MD,WD)});
   TeamService.getFixedLineup(this.team, D1, D2, D3, MD, WD)
    .then((res) => {
        this.setState((state, props) => ({
            lineup : res.data
        }));
    })
    .catch((err) => console.log(err))
 };

 render() {
    const columns = [
      {
        Header: "Team: " + this.state.teamName,
        columns: [
          {
             Header: "#",
             accessor: (_row: any, i : number) => i + 1
          },
          {
            Header: "Name",
            accessor: "name"
          },
          {
            Header: "Gender",
            accessor: "gender"
          },
          {
            Header: "UTR",
            accessor: "utr"
          },
        ]
      }
    ];

    const lineupColumns = [
      {
        Header: "Lineup: ",
        columns: [
          {
             Header: "#",
             accessor: (_row: any, i : number) => i + 1
          },
          {
            Header: "D1 <= 13",
            accessor: "D1.pair.pairInfo"
          },
          {
            Header: "D2 <= 12",
            accessor: "D2.pair.pairInfo"
          },
          {
            Header: "D3 <= 11",
            accessor: "D3.pair.pairInfo"
          },
          {
            Header: "MD <= 10.5",
            accessor: "MD.pair.pairInfo"
          },
          {
            Header: "WD <= 9.5",
            accessor: "WD.pair.pairInfo"
          },
        ]
      }
    ];

    return (
    <div>
    <div class="m-2 flex flow-row">
        <div class="w-50 min-w-fit">
        <Table columns={columns} data={this.state.data} />
        </div>
        <div class="mx-2 w-250 align-middle inline-block min-w-min shadow overflow-hidden bg-white shadow-dashboard px-2 py-2 rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-lg">
            <div class="flex flow-row">
                <PairTable name="D1" players={this.state.data} ref={this.d1lineRef}/>
                <PairTable name="D2" players={this.state.data} ref={this.d2lineRef}/>
                <PairTable name="D3" players={this.state.data} ref={this.d3lineRef}/>
                <PairTable name="MD" players={this.state.data} ref={this.mdlineRef}/>
                <PairTable name="WD" players={this.state.data} ref={this.wdlineRef}/>
            </div>
        </div>
     </div>
     <button
            class="border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
            onClick= {this.onClick}
     >
     Get Selected Items
     </button>
     {this.state.selectedPairs}
     <Table columns={lineupColumns} data={this.state.lineup} />
   </div>
    );
 }
}

export default TeamWithPairs;