import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

function Navbar() {
  return (
    <nav class="w-full backdrop-blur-sm relative shadow bg-black">
        <div class="relative z-1 h-12 mx-auto px-5 max-w-7xl flex items-center justify-between text-white">
            <ul class="flex items-center gap-5">
                <li>
                    <Link class="hover:text-cyan-400 transition-colors hover:font-bold" to="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link class="hover:text-cyan-400 transition-colors hover:font-bold " to="/line">
                        Lines
                    </Link>
                </li>
                <li>
                    <Link class="hover:text-cyan-400 transition-colors hover:font-bold " to="/lineup">
                        Lineups
                    </Link>
                </li>
            </ul>
        </div>
    </nav>
  );
}

export default Navbar;