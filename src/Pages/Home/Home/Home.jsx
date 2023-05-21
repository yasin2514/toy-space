import PageTitle from "../../Shared/PageTitle/PageTitle";
import Banner from "../Others/Banner/Banner";
import Category from "../Others/Category/Category";
import Discount from "../Others/Discount/Discount";
import Gallery from "../Others/Gallery/Gallery";
import Review from "../Others/Review/Review";

const Home = () => {
    return (
        <div>
            <PageTitle title="Home" />
            <Banner></Banner>
            <Gallery></Gallery>
            <Category></Category>
            <Review></Review>
            <Discount></Discount>
        </div>
    );
};

export default Home;