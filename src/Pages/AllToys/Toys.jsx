import { Link } from "react-router-dom";


const Toys = ({ toy, index }) => {
    const { _id, sellerName, toyName, price, category, quantity } = toy;
    return (
        <>
            <tr>
                <th>{index + 1}</th>
                <td>{sellerName}</td>
                <td>{toyName}</td>
                <td>{category}</td>
                <td>{quantity}</td>
                <td>${price}</td>
                <td><Link to={`/toy/${_id}`} className="btn btn-outline btn-sm">View Details</Link></td>
            </tr>
        </>
    );
};

export default Toys;