import React from "react";

import "./menu-item.styles.scss"
import {
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {

    let navigate = useNavigate();

    return (
        <div
            className={`${size} menu-item`}
            onClick={() => navigate(`${linkUrl}`)}
        >
            <div
                className='background-image'
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />
            <div className='content'>
                <h1 className='title'>{title.toUpperCase()}</h1>
                <span className='subtitle'>SHOP NOW</span>
            </div>
        </div>);
};

export default withRouter(MenuItem);