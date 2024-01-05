// RightColumnItem.js
import React from 'react';
import "../css/column.css"
import Project from './project.js'

const projects = [
    {
        title: "Lyric Slide Generator",
        banner: "https://github.com/danielsodium/danielsodium.github.io/blob/main/public/lyrics.png?raw=true",
        description: "A desktop app to automatically scrape song lyrics and create a powerpoint presentation from them.",
        position: "80% 70%",
        link: "https://github.com/danielsodium/worshipslides"
    },
    {
        title: "Taikodachi",
        banner: "https://github.com/danielsodium/taikodachi/blob/main/screenshot.png?raw=true",
        description: "An Unity game based off the popular games \"OSU\" and \"Taiko no Tatsujin\".",
        position: "40% 30%",
        link:"https://github.com/danielsodium/taikodachi"
    },
    {
        title: "Vinland Run",
        banner: "https://img.itch.zone/aW1hZ2UvODg2ODI5LzUwMTEzODkuanBn/original/NvKwN8.jpg",
        description: "An iOS and desktop game made with Gamemaker Studio.",
        position: "50% 75%",
        link: "https://danielsodium.itch.io/vinland-run"
    }
];

const RightColumn = () => {
    return (
        <div className="right-column-item">
            {projects.map((object, i) => {
                return <Project data={object}/>
            })}
        </div>
    );
};

export default RightColumn;
