import { Helmet } from "react-helmet";
const PageTitle = ({title}) => {
    return (
        <Helmet>
            <title>ToySpace | {title}</title>
        </Helmet>

    );
};

export default PageTitle;