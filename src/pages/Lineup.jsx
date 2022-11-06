import React from 'react';
import LineupTable from '../components/LineupTable';
import Team from '../components/Team';
import TeamList from '../components/TeamList'

function Lineup({team}) {
    return (
        <div class="flex flex-row min-h-screen w-full bg-gray-100 text-gray-700" x-data="layout">
            <div class="bg-white shadow-dashboard px-2 py-2 rounded-lg m-2">
                <TeamList />
            </div>
            <div class="m-2 flex flow-row">
                <Team team={team} />
                <div>
                    <LineupTable team={team} strategy="0"/>
                    <LineupTable team={team} strategy="1"/>
                    <LineupTable team={team} strategy="2"/>
                </div>
            </div>
        </div>
    );
}

export default Lineup;