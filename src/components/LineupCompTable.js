import React from "react";
import WinImage from './WinImage'

class LineupCompTable extends React.Component {
  constructor(props) {
    super(props);
  }

  setupLineup(lineup1) {
    if (lineup1.D1 == null) {
        let team1=
        {
            d1: {
               pair: "",
               totalUTR: 0,
               pairImage: "",
            },
            d2: {
               pair: "",
               totalUTR: 0,
               pairImage: "",
            },
            d3: {
               pair: "",
               totalUTR: 0,
               pairImage: "",
            },
            md: {
               pair: "",
               totalUTR: 0,
               pairImage: "",
            },
            wd: {
               pair: "",
               totalUTR: 0,
               pairImage: "",
            }
        };
        return team1;
    }

    let team1 =
        {
            d1: {
                pair: lineup1.D1.pair.pairInfo,
                totalUTR: lineup1.D1.pair.totalUTR
            },
            d2: {
                pair: lineup1.D2.pair.pairInfo,
                totalUTR: lineup1.D2.pair.totalUTR
            },
            d3: {
                pair: lineup1.D3.pair.pairInfo,
                totalUTR: lineup1.D3.pair.totalUTR
            },
            md: {
                pair: lineup1.MD.pair.pairInfo,
                totalUTR: lineup1.MD.pair.totalUTR
            },
            wd: {
                pair: lineup1.WD.pair.pairInfo,
                totalUTR: lineup1.WD.pair.totalUTR
            }
        }

    return team1;
  }

  render() {

    let team1 = this.setupLineup(this.props.lineup1);
    let team2 = this.setupLineup(this.props.lineup2);

    return (
     <div class="flex flex-col md:flex-row md:transform md:scale-75 lg:scale-100 justify-center">
         <div class="border-transparent rounded-lg text-center p-5 mx-auto md:mx-0 my-2 bg-gray-100 font-medium z-10 shadow-lg">
           <div class="font-bold text-3xl"> Team {this.props.team1} </div>
           <hr></hr>
           <div class="text-sm my-3 flex flex-row"> <WinImage utr1={team1.d1.totalUTR} utr2={team2.d1.totalUTR}/> D1 : {team1.d1.pair}</div>
           <hr></hr>
           <div class="text-sm my-3 flex flex-row"> <WinImage utr1={team1.d2.totalUTR} utr2={team2.d2.totalUTR}/> D2 : {team1.d2.pair}</div>
           <hr></hr>
           <div class="text-sm my-3 flex flex-row"> <WinImage utr1={team1.d3.totalUTR} utr2={team2.d3.totalUTR}/> D3 : {team1.d3.pair}</div>
           <hr></hr>
           <div class="text-sm my-3 flex flex-row"> <WinImage utr1={team1.md.totalUTR} utr2={team2.md.totalUTR}/> MD : {team1.md.pair}</div>
           <hr></hr>
           <div class="text-sm my-3 flex flex-row"> <WinImage utr1={team1.wd.totalUTR} utr2={team2.wd.totalUTR}/> WD : {team1.wd.pair}</div>
           <hr></hr>
         </div>

         <div class="border-transparent rounded-lg text-center p-5 mx-auto md:mx-0 my-2 bg-gradient text-white font-medium z-10 shadow-lg">
           <div class="font-bold text-3xl"> Team {this.props.team2} </div>
           <hr></hr>
           <div class="text-sm my-3 flex flex-row"> <WinImage utr1={team2.d1.totalUTR} utr2={team1.d1.totalUTR}/> D1 : {team2.d1.pair}</div>
           <hr></hr>
           <div class="text-sm my-3 flex flex-row"> <WinImage utr1={team2.d2.totalUTR} utr2={team1.d2.totalUTR}/> D2 : {team2.d2.pair}</div>
           <hr></hr>
           <div class="text-sm my-3 flex flex-row"> <WinImage utr1={team2.d3.totalUTR} utr2={team1.d3.totalUTR}/> D3 : {team2.d3.pair}</div>
           <hr></hr>
           <div class="text-sm my-3 flex flex-row"> <WinImage utr1={team2.md.totalUTR} utr2={team1.md.totalUTR}/> MD : {team2.md.pair}</div>
           <hr></hr>
           <div class="text-sm my-3 flex flex-row"> <WinImage utr1={team2.wd.totalUTR} utr2={team1.wd.totalUTR}/> WD : {team2.wd.pair}</div>
           <hr></hr>
         </div>
     </div>
    );
  }
}

export default LineupCompTable;