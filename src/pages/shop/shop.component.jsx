import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import ColectionPage from "../collection/collection.component";


const ShopPage = () => {

    

    return (
        <div className="shop-page">
            <Routes>
                {console.log(useLocation().pathname)}
                <Route path={`/`} element={<CollectionsOverview />} />
                <Route path={`/:collectionId`} element={<ColectionPage />} />
            </Routes>
        </div>

    )

}


export default ShopPage