import React from "react";
import Table from "./Table"
import TeamService from '../services/TeamService';
import LineTable from '../components/LineTable';

class TeamWithLines extends React.Component {

 constructor(props) {
    super(props);
    this.team = props.team;
    this.state = {
      data: [],
      selectedPairs: "",
      d1pairs: [],
      d2pairs: [],
      d3pairs: [],
      mdpairs: [],
      wdpairs: [],
      teamName: "",
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
            d1pairs: res.data.d1.topPairs,
            d2pairs: res.data.d2.topPairs,
            d3pairs: res.data.d3.topPairs,
            mdpairs: res.data.md.topPairs,
            wdpairs: res.data.wd.topPairs,
        }));
      })
      .catch((err) => console.log(err))
 }

 getLineString(lineRef) {
       let lineString = "";
       lineRef.current.state.SelectedList.forEach(ele => {
         lineString = lineString + "_" + ele.pairName;
       })
       if (lineString.length>0) {
        lineString = lineString.substring(1);
       }
       return lineString;
 }

 onClick() {
   let D1 = this.getLineString(this.d1lineRef);
   let D2 = this.getLineString(this.d2lineRef);
   let D3 = this.getLineString(this.d3lineRef);
   let WD = this.getLineString(this.wdlineRef);
   let MD = this.getLineString(this.mdlineRef);
   this.setState({selectedPairs: "D1:"+D1+" D2:"+D2+" D3:"+D3+" MD:"+MD+" WD:"+WD});
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
        {
          Header: "Latest UTR",
          accessor: "dUTR"
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
                <LineTable name="D1" pair={this.state.d1pairs} ref={this.d1lineRef}/>
                <LineTable name="D2" pair={this.state.d2pairs} ref={this.d2lineRef}/>
                <LineTable name="D3" pair={this.state.d3pairs} ref={this.d3lineRef}/>
                <LineTable name="MD" pair={this.state.mdpairs} ref={this.mdlineRef}/>
                <LineTable name="WD" pair={this.state.wdpairs} ref={this.wdlineRef}/>
            </div>
        </div>
     </div>
     <button
            class="border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
            onClick= {this.onClick}
     >
     Run Lineups
     </button>
     <span class="text-sm font-mono bg-green-300 rounded-md px-4 py-2 m-2">
     {this.state.selectedPairs}
     </span>
     <Table columns={lineupColumns} data={this.state.lineup} />
   </div>
    );
 }
}

export default TeamWithLines;