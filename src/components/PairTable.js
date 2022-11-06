import React from "react";

class PairTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      player1: "",
      player2: ""
    };
  }

  onChangeValue(e, player) {
    this.setState({player1: player.name})
  }

  onChangeValue2(e, player) {
    this.setState({player2: player.name})
  }

  onSelectNone(e) {
    this.setState({player1: "", player2: ""})
  }

  render() {
    return (
     <div>
        <table class="border-collapse border-spacing-2 px-2 mx-1 border border-slate-400">
              <thead>
                <tr class="px-3 py-2 bg-slate-700 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                  <th colspan="2">{this.props.name} Pair</th>
                </tr>
                <tr class="px-3 py-2 bg-slate-700 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                  <th>Player 1</th>
                  <th>Player 2</th>
                </tr>
              </thead>
              <tbody>
                {this.props.players.map((player) => (
                  <tr class="even:bg-slate-50 odd:bg-slate-400">
                    <td class="px-3 py-2 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                      <input
                        type="radio"
                        value={player.name}
                        checked={this.state.player1 === player.name}
                        onChange={(e) => this.onChangeValue(e, player)}
                      />
                      <span class="px-1">
                      {player.name}({player.utr})
                      </span>
                    </td>
                    <td class="px-3 py-2 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                      <input
                        type="radio"
                        value={player.name}
                        checked={this.state.player2 === player.name}
                        onChange={(e) => this.onChangeValue2(e, player)}
                      />
                      <span class="px-1">
                      {player.name}({player.utr})
                      </span>
                    </td>
                  </tr>
                ))}
                <tr class="even:bg-slate-50 odd:bg-slate-400">
                    <td colspan="2" class="px-3 py-2 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                      <input
                        type="radio"
                        value="None"
                        checked={this.state.player1 === ""}
                        onChange={(e) => this.onSelectNone(e)}
                      />
                      <span class="px-1">
                          Any
                      </span>
                    </td>
                 </tr>
              </tbody>
            </table>
      </div>
    );
  }
}

export default PairTable;