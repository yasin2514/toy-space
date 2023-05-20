import { Rating } from "@smastrom/react-rating";
import Swal from "sweetalert2";
import { AuthContext } from "../../../../Providers/AuthProviders";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Subcategory = ({ toy }) => {
    const { user } = useContext(AuthContext);
    const { _id, rating, toyPhoto, toyName, price, } = toy;
    const handleViewDetails = () => {
        if (!user) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'You Need TO Login To See View Details'
            })
        }
    }

    return (
        <div className="w-full rounded-lg  bg-gray-900 bg-opacity-90 shadow-xl shadow-gray-500">
            <div className="w-full h-48 px-5">
                <img src={toyPhoto} alt="Album" className="rounded-lg h-full  w-full object-contain" />
            </div>
            <div className="space-y-1 px-8 mt-2 text-white">
                <h2 className="text-3xl font-semibold">{toyName}</h2>
                <p className=""> <span className="font-medium">Price: </span>{price}</p>
                <span className=" flex items-center gap-2">Ratings:
                    <Rating className="" style={{ maxWidth: 110 }}
                        value={rating} readOnly />
                </span>
            </div>
            <div className="p-8 text-right">
                <Link onClick={handleViewDetails} to={`/toy/${_id}`} className="btn btn-primary btn-sm ">View Details</Link>
            </div>
        </div>
    );
};

export default Subcategory;