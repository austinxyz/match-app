import React from "react";

class LineTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      List: [],
      SelectedList: []
    };
  }

  // Update List Item's state and Master Checkbox State
  onItemCheck(e, item) {
    let tempList = this.state.List;
    if (tempList.length == 0 ) {
        tempList = this.props.pair;
    }

    tempList.map((user) => {
      if (user.pairInfo === item.pairInfo) {
        user.pairName = item.pairName;
        user.selected = e.target.checked;
      }
      return user;
    });

    // Update State
    this.setState({
      List: tempList,
      SelectedList: tempList.filter((e) => e.selected),
    });
  }

  // Event to get selected rows(Optional)
  getSelectedRows() {
    this.setState({
      SelectedList: this.state.List.filter((e) => e.selected),
    });
  }

  render() {
    return (
     <div>
        <table class="border-collapse border-spacing-2 px-2 mx-1 border border-slate-400">
              <thead>
                <tr class="px-3 py-2 bg-slate-700 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                  <th></th>
                  <th>{this.props.name} Pairs</th>
                </tr>
              </thead>
              <tbody>
                {this.props.pair.map((user) => (
                  <tr key={user.pairInfo} className={user.selected ? "selected" : ""}>
                    <td class="even:bg-slate-50 odd:bg-slate-400">
                      <input
                        type="checkbox"
                        checked={user.selected}
                        className="form-check-input"
                        id="rowcheck{user.pairInfo}"
                        onChange={(e) => this.onItemCheck(e, user)}
                      />
                    </td>
                    <td class="px-3 py-2 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">{user.pairInfo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
      </div>
    );
  }
}

export default LineTable;