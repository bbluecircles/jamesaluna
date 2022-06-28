import React from "react";
import "./index.scss";

export default function Info(props) {
    const experience = props.experience;
    const current_company = props.current_company;
    const location = props.location;
    const primary_technology = props.primary_technology;
    const description = props.description;

    return (
        <section className="Info">
            <div className="info__blocks">
                <div className="info__block">
                    <span>experience</span>
                    <span>{experience}</span>
                </div>
                <div className="info__block">
                    <span>Current Company</span>
                    <span>{current_company}</span>
                </div>
                <div className="info__block">
                    <span>location</span>
                    <span>{location}</span>
                </div>
                <div className="info__block">
                    <span>Primary Technology</span>
                    <span>{primary_technology}</span>
                </div>
            </div>
            <div className="info__description">
                <p>{description}</p>
            </div>
        </section>
    )
}