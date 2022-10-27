import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { useTable, useSortBy } from "react-table";
import Table from "./components/TeamTable"
import TeamService from './services/TeamService';


function Team({team, teamName}) {
 const [data, setData] = useState([]);

 useEffect(() => {
   TeamService.getTeam(team)
     .then((res) => {
       setData(res.data.players);
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