import React from "react";
import Select from "react-select";

class PairSelectTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      player1: "",
      player2: ""
    };
  }

  handleSelect1(e) {
    this.setState({player1: e.value});
  }

  handleSelect2(e) {
    this.setState({player2: e.value});
  }

  render() {
    const players = this.props.players.map( player => ({
            label: player.name + " " + player.gender + " (" + player.utr + ")",
            value: player.name
        })
    );
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
                <tr class="even:bg-slate-50 odd:bg-slate-400">
                    <td class="w-1/4 px-3 py-2 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                    <Select
                        placeholder="None"
                        onChange={ (e) => this.handleSelect1(e)}
                        values={[]}
                        options={players}
                        autosize={false}
                        defaultValue={{ label: "Any", value: "" }}
                    />
                    </td>
                    <td class="w-1/4 px-3 py-2 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                    <Select
                        placeholder="None"
                        onChange={ (e) => this.handleSelect2(e)}
                        values={[]}
                        options={players}
                    />
                    </td>
                 </tr>
              </tbody>
            </table>
      </div>
    );
  }
}

export default PairSelectTable;