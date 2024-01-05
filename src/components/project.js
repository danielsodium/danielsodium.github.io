import React from 'react';
import "../css/column.css"


const banner = (url, position) => {
    return {
        "background": `url("${url}")`,
        "backgroundSize": "100%",
        "backgroundPosition": position,
        "borderRadius": "10px",
        "width": "80%",
        "height": "200px"
    }
}

const Project = ({ data }) => {
    return (
        <div className="project">
            <div style={banner(data.banner, data.position)} className="banner"></div>
            <h3>{data.title}</h3>
            <p>{data.description}</p>
	    <br/>
            <a class="bolded" href={data.link}>Github Repo</a>
        </div>
    );
}

export default Project;
