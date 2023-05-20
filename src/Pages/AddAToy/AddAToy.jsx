import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { updateEmail } from "firebase/auth";
import Swal from 'sweetalert2';


const AddAToy = () => {
    const { user } = useContext(AuthContext);
    const handleAddToy = event => {
        event.preventDefault();
        const form = event.target;
        const toyName = form.toyName.value;
        const toyPhoto = form.toyPhoto.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const rating = form.rating.value;
        const category = form.category.value;
        const description = form.description.value;
        const sellerEmail = form?.email?.value;


        updateEmail(user, user.email ? user.email : sellerEmail)
            .then(() => { })
            .catch(() => { })



        const toy = {
            sellerName: user?.displayName,
            email: user.email ? user.email : sellerEmail,
            toyName,
            toyPhoto,
            price,
            quantity,
            rating,
            category,
            description
        }
        fetch('https://toy-marketplace-server-plum.vercel.app/toys', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(toy)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Success',
                        text: 'Toy Added Successfully',
                    })
                    form.reset();
                }
            })
    }

    return (
        <div className="add-toys-bg py-10">
            <form onSubmit={handleAddToy} className="px-10 mb-10 h-full rounded-xl pt-10 pb-16 bg-gray-800 gap-20 p-10 bg-opacity-95 shadow shadow-gray-200 w-full mx-auto lg:w-10/12">
                <h2 className="font-bold text-5xl mb-7 text-center text-white">Add Your Toys</h2>

                <div className=" grid lg:grid-cols-2  gap-x-10 gap-y-5">

                    <div className="form-control">
                        <label className="label">
                            <span className="text-white">Toy Name</span>
                        </label>
                        <input type="text" placeholder="Toy name" className="input input-bordered" name="toyName" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="text-white">Toy Photo URL</span>
                        </label>
                        <input type="url" placeholder="Toy photo URL" className="input input-bordered" name="toyPhoto" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="text-white">Price</span>
                        </label>
                        <input type="number" step={'any'} placeholder="$ Toy price" className="input input-bordered" name="price" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="text-white">Available Quantity</span>
                        </label>
                        <input type="number" placeholder="Available quantity" className="input input-bordered" name="quantity" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="text-white">Rating</span>
                        </label>
                        <input type="number" step={'any'} placeholder="Rating" className="input input-bordered" name="rating" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="text-white">Sub Category</span>
                        </label>
                        <select className="select select-bordered" name="category">
                            <option>Mini Sports Car</option>
                            <option>Mini Truck</option>
                            <option>Regular Car</option>
                            <option>Mini Fire Truck</option>
                            <option>Mini Police Car</option>
                            <option>Mini Ambulance</option>
                        </select>
                    </div>
                </div>
                {
                    user.email ? "" :
                        <div className="form-control mt-5">
                            <label className="label">
                                <span className="text-white">Seller Email</span>
                            </label>
                            <input type="email" placeholder="Enter Your Email" className="input input-bordered" name="email" required />
                        </div>
                }
                <div className="form-control mt-5">
                    <label className="label">
                        <span className="text-white">Toy Detail Description</span>
                    </label>
                    <textarea className="textarea textarea-bordered w-full" placeholder="Detail description" name="description"></textarea>
                </div>
                <div className="text-center mt-10">
                    <input type="submit" className="btn btn-primary  w-full" value="ADD TOY" />
                </div>
            </form>
        </div>

    );
};

export default AddAToy;