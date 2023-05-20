import { useContext } from "react";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import { AuthContext } from "../../Providers/AuthProviders";


const Toys = ({ toy, index }) => {
    const { user } = useContext(AuthContext);
    const { _id, sellerName, toyName, price, category, quantity } = toy;
    const handleViewDetails = () => {
        if (!user) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'You Need TO Login To See View Details',
            })
        }
    }
    return (
        <>
            <tr>
                <th>{index + 1}</th>
                <td>{sellerName}</td>
                <td>{toyName}</td>
                <td>{category}</td>
                <td>{quantity}</td>
                <td>${price}</td>
                <td><Link onClick={handleViewDetails} to={`/toy/${_id}`} className="btn btn-outline btn-sm">View Details</Link></td>
            </tr>
        </>
    );
};

export default Toys;