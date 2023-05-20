import { useLoaderData } from "react-router-dom";
import { Rating } from '@smastrom/react-rating';
import PageTitle from "../Shared/PageTitle/PageTitle";
const ViewDetails = () => {
    const toy = useLoaderData();
    const { sellerName, email, rating, toyPhoto, description, toyName, price, category, quantity } = toy;

    return (
        <div className="add-toys-bg py-16 flex items-center">
             <PageTitle title="Toys | View-Details" />
            <div className="flex items-center  justify-evenly w-3/5 rounded-2xl mx-auto bg-gray-800 gap-20 p-10 bg-opacity-95 shadow shadow-gray-200">
                <div className="w-full lg:w-1/2">
                    <img src={toyPhoto} alt="Album" className="rounded-lg h-full w-full object-cover" />
                </div>
                <div className="text-[1.2rem] flex-shrink-0 text-white space-y-2 w-full lg:w-1/2">
                    <h2 className="text-4xl font-semibold">{toyName}</h2>
                    <p className="text-gray-200"> <span className="font-medium text-white">Details: </span>{description.length > 100 ? `${description.slice(0, 100)}...` : `${description}`}</p>
                    <p className="text-gray-200"> <span className="font-medium text-white">Seller Name: </span>{sellerName}</p>
                    <p className="text-gray-200"> <span className="font-medium text-white">Seller Email: </span>{email?email:"No Email Address"}</p>
                    <p className="text-gray-200"> <span className="font-medium text-white">Price: </span>{price}</p>
                    <p className="text-gray-200"> <span className="font-medium text-white">Sub Category: </span>{category}</p>
                    <p className="text-gray-200"> <span className="font-medium text-white">Available Quantity: </span>{quantity}</p>
                    <span className="text-gray-200 flex items-center gap-2">Ratings:
                        <Rating className="" style={{ maxWidth: 110 }}
                            value={rating} readOnly />
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;