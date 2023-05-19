import img1 from '../../assets/b-4.jpg'

const AddAToy = () => {
    return (
        <div className="relative w-full h-screen">
            <img src={img1} className='w-full h-full object-cover' alt="" />
            <div className='absolute  h-full flex items-center w-full top-0  bg-gradient-to-r from-[#000000] '>

                <form className="px-10 mx-auto w-10/12">
                    <h2 className="font-bold text-5xl mb-7 text-center text-white">Add Your Toys</h2>
                    <div className=" grid lg:grid-cols-2 gap-x-10 gap-y-5">

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
                            <input type="number" placeholder="Toy price" className="input input-bordered" name="price" required />
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
                            <input type="number" placeholder="Rating" className="input input-bordered" name="rating" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="text-white">Sub Category</span>
                            </label>
                            <select className="select select-bordered">
                                <option disabled selected >Choose toy category?</option>
                                <option>Han Solo</option>
                                <option>Greedo</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="text-white">Toy Detail Description</span>
                        </label>
                        <textarea className="textarea textarea-bordered w-full" placeholder="Detail description" name="description"></textarea>
                    </div>
                    <div className="text-center mt-10 mb-20">
                        <input type="submit" className="btn btn-primary  w-full" value="ADD TOY" />
                    </div>
                </form>
            </div>
        </div>

    );
};

export default AddAToy;