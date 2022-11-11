import React from 'react';
import TeamComparation from '../components/TeamComparation';

function SelectPairLineup({team}) {
    return (
        <div class="flex flex-row min-h-screen w-full bg-gray-100 text-gray-700" x-data="layout">
           <TeamComparation />
        </div>
    );
}

export default SelectPairLineup;