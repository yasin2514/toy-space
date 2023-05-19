import { Link } from 'react-router-dom';
import { FaTrash } from "react-icons/fa";

const ToysMY = ({ toy, index, toys, setToys }) => {
    const { _id, sellerName, toyName, price, category, quantity } = toy;

    const handleDelete = _id => {
        fetch(`https://toy-marketplace-server-plum.vercel.app/toys/${_id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
        const remaining = toys.filter(ty => ty._id !== _id);
        setToys(remaining);
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{sellerName}</td>
            <td>{toyName}</td>
            <td>{category}</td>
            <td>{quantity}</td>
            <td>${price}</td>
            <td><Link onClick={() => handleDelete(_id)}>
                <FaTrash className='text-[1.4rem] inline-block text-red-800 hover:text-red-600'></FaTrash>
            </Link></td>
            <td><Link to={`/update/${_id}`} className="btn btn-outline btn-sm">Update</Link></td>


        </tr>
    );
};

export default ToysMY;