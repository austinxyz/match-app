import React, { useState, useEffect, useMemo } from "react";
import TeamService from '../services/TeamService';
import Table from './Table'

function Lines({team}) {

 const [d1, setD1] = useState([]);
 const [d2, setD2] = useState([]);
 const [d3, setD3] = useState([]);
 const [md, setMD] = useState([]);
 const [wd, setWD] = useState([]);

 useEffect(() => {
   TeamService.getTeam(team)
     .then((res) => {
       setD1(res.data.d1.topPairs);
       setD2(res.data.d2.topPairs);
       setD3(res.data.d3.topPairs);
       setMD(res.data.md.topPairs);
       setWD(res.data.wd.topPairs);
     })
     .catch((err) => console.log(err))
 }, []);

 const columnsD1 = useMemo(
   () => [
     {
       Header: "D1 Top Pairs ",
       columns: [
         {
            Header: "#",
            accessor: (_row: any, i : number) => i + 1
         },
         {
           Header: "Pairs",
           accessor: "pairInfo"
         },
       ]
     }
   ]
 )

  const columnsD2 = useMemo(
    () => [
      {
        Header: "D2 Top Pairs ",
        columns: [
          {
             Header: "#",
             accessor: (_row: any, i : number) => i + 1
          },
          {
            Header: "Pairs",
            accessor: "pairInfo"
          },
        ]
      }
    ]
  )

   const columnsD3 = useMemo(
     () => [
       {
         Header: "D3 Top Pairs ",
         columns: [
           {
              Header: "#",
              accessor: (_row: any, i : number) => i + 1
           },
           {
             Header: "Pairs",
             accessor: "pairInfo"
           },
         ]
       }
     ]
   )

    const columnsMD = useMemo(
      () => [
        {
          Header: "Mixed Top Pairs ",
          columns: [
            {
               Header: "#",
               accessor: (_row: any, i : number) => i + 1
            },
            {
              Header: "Pairs",
              accessor: "pairInfo"
            },
          ]
        }
      ]
    )

     const columnsWD = useMemo(
       () => [
         {
           Header: "Women Top Pairs ",
           columns: [
             {
                Header: "#",
                accessor: (_row: any, i : number) => i + 1
             },
             {
               Header: "Pairs",
               accessor: "pairInfo"
             },
           ]
         }
       ]
     )

 return (
   <div>
   <div class="flex flex-row">
     <div class="w-50 min-w-fit">
        <Table columns={columnsD1} data={d1} />
     </div>
     <div class="w-50 min-w-fit">
        <Table columns={columnsD2} data={d2} />
     </div>
     <div class="w-50 min-w-fit">
        <Table columns={columnsD3} data={d3} />
     </div>
   </div>
   <div class="flex flex-row">
     <div class="w-50 min-w-fit">
        <Table columns={columnsMD} data={md} />
     </div>
     <div class="w-50 min-w-fit">
        <Table columns={columnsWD} data={wd} />
     </div>
   </div>
   </div>
 );
}

export default Lines;