import axios from 'axios'

const BASE_URL = 'http://35.184.121.18:8080';
//const BASE_URL = 'http://localhost:8080';

const LINEUP_REST_API_URL = BASE_URL + '/lineup';
const TEAM_REST_API_URL = BASE_URL + '/team';
const FIXED_LINEUP_REST_API_URL = BASE_URL + '/fixedlineup';

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
                        'Access-Control-Allow-Origin': "http://localhost:3000"
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

    getFixedLineup(team, d1, d2, d3, md, wd){

        var teamName = "ZJU_BYD";

        if (team != null) {
            teamName = team;
        }

        const teamURL =  FIXED_LINEUP_REST_API_URL + "?team=" + teamName + "&d1=" + d1
            + "&d2=" + d2
            + "&d3=" + d3
            + "&md=" + md
            + "&wd=" + wd
             ;

        return axios({
                    method: 'get',
                    url: teamURL,
                    withCredentials: false,
                    mode: 'no-cors',
                    crossdomain: true,
                    headers : {
                        'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
                        'Access-Control-Allow-Origin': "http://localhost:3000"
                    }
                });

    };

}

export default new TeamService();