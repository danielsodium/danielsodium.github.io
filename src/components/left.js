// RightColumnItem.js
import React from 'react';
import "../css/column.css"

const LeftColumn = () => {
    return (
        <div className="left">
            <div>
                <div class="pfp"></div>
                <h1>Daniel Na</h1>
                <p>Undergraduate Computer Science Student</p>
                <p>at Rensselaer Polytechnic Institute</p>
                <br />
                <div className="listed">
                    <a href="mailto:nah@rpi.edu"><i style={{ "font-size": "20px" }} class="fa fa-envelope"></i> Contact</a>
                    <a href="https://cdn.discordapp.com/attachments/860634794589028384/1192706458614247484/resume.pdf?ex=65aa0d73&is=65979873&hm=cf5a7a9c8f80d8b08cf3d61b51809e8c081cdf32787d2886e348b822c3ce7245&"><i style={{ "font-size": "20px" }} class="fa fa-file"></i> Resume</a>
                    <a href="https://github.com/danielsodium"><i class="fa fa-github"></i> Github</a>
                </div>
            </div>
        </div>
    );
};

export default LeftColumn;
