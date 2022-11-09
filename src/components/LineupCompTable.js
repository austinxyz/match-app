import React from "react";

class LineupCompTable extends React.Component {
  constructor(props) {
    super(props);
  }

  getPairInfo(linePair) {
    if (linePair != null) {
        return linePair.pair.pairInfo;
    }

    return "";
  }

  render() {

    let d1pairInfo1 = this.getPairInfo(this.props.lineup1.D1);
    let d1pairInfo2 = this.getPairInfo(this.props.lineup2.D1);
    let d2pairInfo1 = this.getPairInfo(this.props.lineup1.D2);
    let d2pairInfo2 = this.getPairInfo(this.props.lineup2.D2);
    let d3pairInfo1 = this.getPairInfo(this.props.lineup1.D3);
    let d3pairInfo2 = this.getPairInfo(this.props.lineup2.D3);
    let mdpairInfo1 = this.getPairInfo(this.props.lineup1.MD);
    let mdpairInfo2 = this.getPairInfo(this.props.lineup2.MD);
    let wdpairInfo1 = this.getPairInfo(this.props.lineup1.WD);
    let wdpairInfo2 = this.getPairInfo(this.props.lineup2.WD);

    return (
     <div class="flex flex-col md:flex-row md:transform md:scale-75 lg:scale-100 justify-center">
         <div class="border-transparent rounded-lg text-center p-5 mx-auto md:mx-0 my-2 bg-gray-100 font-medium z-10 shadow-lg">
           <div class="font-bold text-3xl"> Team {this.props.team1} </div>
           <hr></hr>
           <div class="text-sm my-3">D1 : {d1pairInfo1}</div>
           <hr></hr>
           <div class="text-sm my-3">D2 : {d2pairInfo1}</div>
           <hr></hr>
           <div class="text-sm my-3">D3 : {d3pairInfo1}</div>
           <hr></hr>
           <div class="text-sm my-3">MD : {mdpairInfo1}</div>
           <hr></hr>
           <div class="text-sm my-3">WD : {wdpairInfo1}</div>
           <hr></hr>

         </div>

         <div class="border-transparent rounded-lg text-center p-5 mx-auto md:mx-0 my-2 bg-gradient text-white font-medium z-10 shadow-lg">
           <div class="font-bold text-3xl"> Team {this.props.team2} </div>
           <hr></hr>
           <div class="text-sm my-3">D1 : {d1pairInfo2}</div>
           <hr></hr>
           <div class="text-sm my-3">D2 : {d2pairInfo2}</div>
           <hr></hr>
           <div class="text-sm my-3">D3 : {d3pairInfo2}</div>
           <hr></hr>
           <div class="text-sm my-3">MD : {mdpairInfo2}</div>
           <hr></hr>
           <div class="text-sm my-3">WD : {wdpairInfo2}</div>
           <hr></hr>
         </div>
     </div>
    );
  }
}

export default LineupCompTable;