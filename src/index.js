import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Team from './Team';
import reportWebVitals from './reportWebVitals';
import ComplexList from './TeamList'

const root = ReactDOM.createRoot(document.getElementById('root'));

const queryParameters = new URLSearchParams(window.location.search)
const team = queryParameters.get("team")
const teamName = queryParameters.get("teamName")

root.render(
  <React.StrictMode>
    <div class="flex flex-row min-h-screen w-full bg-gray-100 text-gray-700" x-data="layout">
        <ComplexList />
        <Team team={team} teamName={teamName}/>
        <div>
            <App team={team} strategy="0"/>
            <App team={team} strategy="1"/>
            <App team={team} strategy="2"/>
        </div>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
