import React from "react";
import Banner from "./Banner/Banner";
import Cards from "./Cards/Cards";
import Introduction from "./Intorduction/Introduction";
import Offer from "./Offer/Offer";
import Video from "./Video/Video";
import Blog from "./Blog/Blog";


const Home = () => {
    return(
        <div>
            <Banner />
            <Introduction />
            <Cards />
            <Offer />
            {/* <Video />
            <Blog /> */}
        </div>
    )
}

export default Home;