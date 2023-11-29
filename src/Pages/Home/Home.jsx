import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import BistroBoss from "./BistroBoss";
import Call from "./Call";
import Category from "./Category";
import Featured from "./Featured";
import PopularMenu from "./PopularMenu";
import Recommends from "./Recommends";
import Testimonials from "./Testimonials";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <Banner />
            <Category />
            <BistroBoss />
            <PopularMenu />
            <Call />
            <Recommends />
            <Featured />
            <Testimonials />
        </div>
    );
};

export default Home;