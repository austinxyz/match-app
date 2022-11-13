import React from "react";
import Table from "./Table";
import TeamService from '../services/TeamService';
import PairSelectTable from '../components/PairSelectTable';
import Select from "react-select";

class TeamWithSelectPairs extends React.Component {

 constructor(props) {
    super(props);
    this.state = {
      data: [],
      teamName: "",
      team: "",
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

 handleSelect(e) {
    let team=e.value;
    this.setState({team:e.value,
        selectedPairs: "",
        lineup: []});
    TeamService.getTeam(team)
          .then((res) => {
            this.setState((state, props) => ({
                data : res.data.players,
                teamName : res.data.name,
            }));
          })
          .catch((err) => console.log(err))
 }

 getLineString(lineRef) {
       let players = [];
       let player1 = lineRef.current.state.player1;
       let player2 = lineRef.current.state.player2;
       if (player1 !=null && player1 != "") {
        players.push(player1);
       }
       if (player2 !=null && player2 != "") {
        players.push(player2);
       }
       return players.join(",");
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
   TeamService.getFixedLineup(this.state.team, D1, D2, D3, MD, WD)
    .then((res) => {
        this.setState((state, props) => ({
            lineup : res.data
        }));
    })
    .catch((err) => console.log(err))
 };

 render() {

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

    const teamlist = [
      {
        value: 'BD',
        label: '北大',
      },
      {
        value: 'BFB',
        label: '北复伯',
      },
      {
        value: 'DHF',
        label: '大华附',
      },
      {
        value: 'DQH',
        label: '两岸清华',
      },
      {
        label: '华山',
        value: 'HS',
      },
      {
        label: '航燕伯',
        value: 'HYB',
      },
      {
        label: '交大',
        value: 'JD',
      },
      {
        label: '交吉队',
        value: 'JJ',
      },
      {
        label: '科大南加伯克利',
        value: 'KDB',
      },
      {
        label: '科大侨大Rutgers',
        value: 'KDQ',
      },
      {
        label: '清华MIT',
        value: 'QHM',
      },
      {
        label: '圣吉伯爱之星',
        value: 'SJB',
      },
      {
        label: '天南南',
        value: 'TNN',
      },
      {
        label: '台湾阿交伯',
        value: 'TW',
      },
      {
        label: '中大UCBD',
        value: 'ZDBD',
      },
      {
        label: '浙大北高',
        value: 'ZJU_BYD',
      },
    ];

    return (
    <div class="w-1/2 align-middle inline-block min-w-fit shadow bg-white shadow-dashboard px-2 py-2 rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-lg">
    <div class="m-2 w-full flow-row">
        <div>
                <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
                <div class="py-2">
                <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
                Team
                </label>
                <Select
                    onChange={ (e) => this.handleSelect(e)}
                    values={[]}
                    options={teamlist}
                    autosize={false}
                />
                </div>
                    <PairSelectTable name="D1" players={this.state.data} ref={this.d1lineRef}/>
                    <PairSelectTable name="D2" players={this.state.data} ref={this.d2lineRef}/>
                    <PairSelectTable name="D3" players={this.state.data} ref={this.d3lineRef}/>
                    <PairSelectTable name="MD" players={this.state.data} ref={this.mdlineRef}/>
                    <PairSelectTable name="WD" players={this.state.data} ref={this.wdlineRef}/>
                </div>
        </div>
     </div>
     <button
            class="border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
            onClick= {this.onClick}
     >
     Run Lineups
     </button>
     <span class="border-transparent rounded-lg text-center px-4 py-2 mx-auto md:mx-0 my-2 bg-gray-100 font-medium z-10 shadow-lg">
     {this.state.selectedPairs}
     </span>
     <Table columns={lineupColumns} data={this.state.lineup} />
   </div>
    );
 }
}

export default TeamWithSelectPairs;