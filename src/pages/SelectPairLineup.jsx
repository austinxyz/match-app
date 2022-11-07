import React from 'react';
import TeamList from '../components/TeamList';
import TeamWithSelectPairs from '../components/TeamWithSelectPairs';

function SelectPairLineup({team}) {
    return (
        <div class="flex flex-row min-h-screen w-full bg-gray-100 text-gray-700" x-data="layout">
            <div class="m-2 w-1/2 flow-row">
                <TeamWithSelectPairs team={team}/>
            </div>
            <div class="m-2 w-1/2 flow-row">
                <TeamWithSelectPairs team={team}/>
            </div>
        </div>
    );
}

export default SelectPairLineup;