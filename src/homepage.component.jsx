import React from "react";
import './homepage.styles.scss'

const HomePage = () => (
    <div className="homepage">
        <div className="directoryMenu">
            <div className="menuItem">
                <div className="content">
                    <h1 className="title">Hats</h1>
                    <span className="subtitle">Shop now</span>
                </div>
            </div>
            <div className="menuItem">
                <div className="content">
                    <h1 className="title">Jackets</h1>
                    <span className="subtitle">Shop now</span>
                </div>
            </div>
            <div className="menuItem">
                <div className="content">
                    <h1 className="title">Shoes</h1>
                    <span className="subtitle">Shop now</span>
                </div>
            </div>
            <div className="menuItem">
                <div className="content">
                    <h1 className="title">Mens</h1>
                    <span className="subtitle">Shop now</span>
                </div>
            </div>
            <div className="menuItem">
                <div className="content">
                    <h1 className="title">Womens</h1>
                    <span className="subtitle">Shop now</span>
                </div>
            </div>
        </div>
    </div>

)

export default HomePage;