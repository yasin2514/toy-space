import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2';

const Update = () => {
    const { user } = useContext(AuthContext);
    const toy = useLoaderData();

    const handleAddToy = event => {

        event.preventDefault();
        const form = event.target;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const description = form.description.value;

        const UpdateToy = {
            price,
            quantity,
            description
        }

        fetch(`https://toy-marketplace-server-plum.vercel.app/toys/${toy._id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(UpdateToy)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Success',
                        text: 'Toy Updated Successfully',
                    })
                    form.reset();
                }
            })
    }

    return (
        <div className="add-toys-bg py-10">
            <form onSubmit={handleAddToy} className="px-10 mb-10 h-full rounded-xl pt-10 pb-16 bg-gray-800 gap-20 p-10 bg-opacity-95 shadow shadow-gray-200 w-full mx-auto lg:w-10/12">
                <h2 className="font-bold text-5xl mb-7 text-center text-white">Update Your Toys {user?.displayName}</h2>

                <div className=" grid lg:grid-cols-2  gap-x-10 gap-y-5">

                    <div className="form-control">
                        <label className="label">
                            <span className="text-white">Toy Name</span>
                        </label>
                        <input type="text" placeholder="Toy name" className="input input-bordered" name="toyName" disabled defaultValue={toy?.toyName} />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="text-white">Sub Category</span>
                        </label>
                        <select className="select select-bordered" disabled name="category" defaultValue={toy?.category}>
                            <option>Mini Sports Car</option>
                            <option>Mini Truck</option>
                            <option>Regular Car</option>
                            <option>Mini Fire Truck</option>
                            <option>Mini Police Car</option>
                            <option>Mini Ambulance</option>
                        </select>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="text-white">Price</span>
                        </label>
                        <input type="number" step={'any'} placeholder="$ Toy price" className="input input-bordered" name="price" required defaultValue={toy?.price} />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="text-white">Available Quantity</span>
                        </label>
                        <input type="number" placeholder="Available quantity" className="input input-bordered" name="quantity" required defaultValue={toy?.quantity} />
                    </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="text-white">Toy Detail Description</span>
                    </label>
                    <textarea className="textarea textarea-bordered w-full" placeholder="Detail description" name="description" defaultValue={toy?.description}></textarea>
                </div>
                <div className="text-center mt-10">
                    <input type="submit" className="btn btn-primary  w-full" value="Update TOY" />
                </div>
            </form>
        </div>
        // </div>

    );
};

export default Update;