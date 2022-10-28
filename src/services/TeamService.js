import axios from 'axios'

const LINEUP_REST_API_URL = 'http://35.184.121.18:8080/lineup';
const TEAM_REST_API_URL = 'http://35.184.121.18:8080/team';

class TeamService {

    getTeam(team){

        var teamName = "ZJU_BYD";

        if (team != null) {
            teamName = team;
        }

        const teamURL =  TEAM_REST_API_URL + "?team=" + teamName;

        return axios({
                    method: 'get',
                    url: teamURL,
                    withCredentials: false,
                    mode: 'no-cors',
                    crossdomain: true,
                    headers : {
                        'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
                        'Access-Control-Allow-Origin': '*'
                    }
                });

    };

    getLineups(team, strategy){

        var teamName = "ZJU_BYD";

        if (team != null) {
            teamName = team;
        }

        const lineupUrl =  LINEUP_REST_API_URL + "?team=" + teamName + "&strategy=" + strategy;

        return axios({
                    method: 'get',
                    url: lineupUrl,
                    withCredentials: false,
                    mode: 'no-cors',
                    crossdomain: true,
                    headers : {
                        'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
                        'Access-Control-Allow-Origin': 'http://localhost:3000'
                    }
                });

    };

}

export default new TeamService();