import React from "react";
import './index.scss';

export default function Hero({ title, name }) {
    return (
        <main className="Hero">
            <span className="hero__name">{name}</span>
            <div className="hero__grid">
                <div className="hero__col"></div>
                <div className="hero__col">
                </div>
            </div>
            <h1 id="hero-title">{title}</h1>
        </main>
    )
}