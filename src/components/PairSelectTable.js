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

  componentDidMount() {
    this.setState({
      player1: "",
      player2: ""
    })
  }

  handleSelect1(e) {
    this.setState({player1: e.value});
  }

  handleSelect2(e) {
    this.setState({player2: e.value});
  }

  clear() {
    this.setState({
      player1: "",
      player2: ""
    })
  }

  render() {
    let players = this.props.players.map( player => ({
            label: player.name + " " + player.gender + " (" + player.utr + ")",
            value: player.name
        })
    );
    players.push({label: "Any", value: ""});
    return (
      <div class="-mx-3 md:flex mb-6">
        <div class="md:w-1/2 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
            {this.props.name} Player 1
          </label>
          <Select
              onChange={ (e) => this.handleSelect1(e)}
              options={players}
              defaultValue={{ label: "Any", value: "" }}
          />
        </div>
        <div class="md:w-1/2 px-3">
          <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
            {this.props.name} Player 2
          </label>
          <Select
              onChange={ (e) => this.handleSelect2(e)}
              options={players}
              defaultValue={{ label: "Any", value: "" }}
          />
        </div>
      </div>
    );
  }
}

export default PairSelectTable;