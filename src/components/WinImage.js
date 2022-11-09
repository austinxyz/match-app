import React from "react";
import win from '../win_1262465.png';

export default function WinImage({ utr1, utr2 }) {


    const imageHTML = utr1 > utr2 ? <img src={win} width={30} height={30} /> : "";

    return (
        <div>
        {imageHTML}
        </div>
    );
}

