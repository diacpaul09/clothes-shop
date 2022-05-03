import React from "react";
import { Routes, Route } from "react-router-dom";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import ColectionPage from "../collection/collection.component";


const ShopPage = ({ collection }) => {

    

    return (
        <div className="shop-page">
            <Routes>
                <Route exact path='/' element={<CollectionsOverview />} />
                <Route path={`/:collectionId`} element={<ColectionPage />} />
            </Routes>
        </div>

    )

}


export default ShopPage