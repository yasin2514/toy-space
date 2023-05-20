import { Link } from 'react-router-dom';
import { FaTrash } from "react-icons/fa";
import Swal from 'sweetalert2';

const ToysMY = ({ toy, index, toys, setToys }) => {
    const { _id, sellerName, toyName, price, category, quantity } = toy;

    const handleDelete = _id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://toy-marketplace-server-plum.vercel.app/toys/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remaining = toys.filter(ty => ty._id !== _id);
                            setToys(remaining);
                        }
                    })

            }
        })

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