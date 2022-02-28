import React from "react";

function Project(props) {
    return (
        <div>
            <div>
                <h3 className="subtitle">{props.title}</h3>
            </div>
            <div className="project">
                <div className="projText">
                    <p>{props.text}</p>
                </div>
                <div className="projImg">
                    <img className="imgBody2" src={props.img}></img>
                </div>
            </div>
        </div>
    );
}

export default Project;