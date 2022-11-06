import React from 'react';
import TeamWithLines from '../components/TeamWithLines';
import TeamList from '../components/TeamList';

function FixedLineup({team}) {
    return (
        <div class="flex flex-row min-h-screen w-full bg-gray-100 text-gray-700" x-data="layout">
            <div class="bg-white shadow-dashboard px-2 py-2 rounded-lg m-2">
                <TeamList />
            </div>
            <div class="m-2 flex flow-row">
                <TeamWithLines team={team}/>
            </div>
        </div>
    );
}

export default FixedLineup;