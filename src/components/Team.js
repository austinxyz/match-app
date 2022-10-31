import React, { useState, useEffect, useMemo } from "react";
import Table from "./Table"
import TeamService from '../services/TeamService';

function Team({team}) {
 const [data, setData] = useState([]);

 const [teamName, setTeamName] = useState(0);

 useEffect(() => {
   TeamService.getTeam(team)
     .then((res) => {
       setData(res.data.players);
       setTeamName(res.data.name);
     })
     .catch((err) => console.log(err))
 }, []);

 const columns = useMemo(
   () => [
     {
       Header: "Team: " + teamName,
       columns: [
         {
            Header: "#",
            accessor: (_row: any, i : number) => i + 1
         },
         {
           Header: "Name",
           accessor: "name"
         },
         {
           Header: "Gender",
           accessor: "gender"
         },
         {
           Header: "UTR",
           accessor: "utr"
         },
       ]
     }
   ]
 )

 return (
   <div class="w-50 min-w-fit">
     <Table columns={columns} data={data} />
   </div>
 );
}

export default Team;