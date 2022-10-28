import React, { useState, useEffect, useMemo } from "react";
import Table from "./components/TeamTable"
import TeamService from './services/TeamService';

function getStrategy(strategy) {
    if (strategy === '0') {
        return "Base Strategy";
    }
    if (strategy === '1') {
        return "More Variable";
    }
    if (strategy === '2') {
        return "Limit Lines";
    }
    return "Base Strategy";
}

function App({team, strategy}) {
 const [data, setData] = useState([]);

 const [strategyName, setStrategy] = useState(0);

 useEffect(() => {
   TeamService.getLineups(team, strategy)
     .then((res) => {
       setData(res.data);
       setStrategy(getStrategy(strategy));
     })
     .catch((err) => console.log(err))
 }, []);

 const columns = useMemo(
   () => [
     {
       Header: "Lineup: " + strategyName,
       columns: [
         {
            Header: "#",
            accessor: (_row: any, i : number) => i + 1
         },
         {
           Header: "D1 <= 13",
           accessor: "D1.pairInfo"
         },
         {
           Header: "D2 <= 12",
           accessor: "D2.pairInfo"
         },
         {
           Header: "D3 <= 11",
           accessor: "D3.pairInfo"
         },
         {
           Header: "MD <= 10.5",
           accessor: "MD.pairInfo"
         },
         {
           Header: "WD <= 9.5",
           accessor: "WD.pairInfo"
         },
       ]
     }
   ]
 )

 return (
   <div>
     <Table columns={columns} data={data} />
   </div>
 );
}

export default App;