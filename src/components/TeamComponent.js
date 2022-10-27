import React from 'react';
import TeamService from '../services/TeamService';

class TeamComponent extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            lineups:[],
            loading: true
        }
    }

    componentDidMount(){
        TeamService.getLineups().then((response) => {
            this.setState({ loading: false, lineups: response.data})
        });
    }

    render (){
        return (
            <div>
                <h1 className = "text-center"> Possible Lineup List</h1>
                <table className = "table table-striped">
                    <thead>
                        <tr>
                            <td> Lineup No</td>
                            <td> D1</td>
                            <td> D2</td>
                            <td> D3</td>
                            <td> MD</td>
                            <td> WD</td>
                        </tr>

                    </thead>
                    <tbody>
                        {
                            this.state.lineups.map(
                                lineup =>
                                <tr key= {lineup.d1} >
                                     <td> </td>
                                     <td> {lineup.d1})</td>
                                     <td> {lineup.d2})</td>
                                     <td> {lineup.d3})</td>
                                     <td> {lineup.md})</td>
                                     <td> {lineup.wd})</td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>

            </div>

        )
    }
}

export default TeamComponent