import Toys from "./Toys";
import PageTitle from "../Shared/PageTitle/PageTitle";
import { useEffect, useState } from "react";

const AllToys = () => {
    const [toys, setToys] = useState([])
    const [search, setSearch] = useState(null)

    useEffect(() => {
        fetch('https://toy-marketplace-server-plum.vercel.app/toys')
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])

    const handleSearch = () => {
        fetch(`https://toy-marketplace-server-plum.vercel.app/toySearch/${search}`)
            .then(res => res.json())
            .then(data => {
                setToys(data)
            })
    }
    return (
        <div className="my-16">
            <PageTitle title="AllToys" />
            <div className="text-center mb-10">
                <div className="flex items-center justify-center w-full">
                    <input onChange={(e) => setSearch(e.target.value)} type="search" placeholder="Enter toy name" className="input input-bordered w-full max-w-sm rounded-e-none" />
                    <button onClick={handleSearch} className="btn rounded-s-none">Search</button>
                </div>

            </div>
            <div className="overflow-x-auto">
                <table className="table text-center  w-11/12 mx-auto">
                    <thead >
                        <tr>
                            <th className="text-xl">SN</th>
                            <th className="text-xl">Seller</th>
                            <th className="text-xl">Toy Name</th>
                            <th className="text-xl">Sub Category</th>
                            <th className="text-xl border p-0">Available Quantity</th>
                            <th className="text-xl">Price</th>
                            <th className="text-xl">View Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            toys && toys.map((toy, i) => <Toys
                                key={toy._id}
                                index={i}
                                toy={toy}
                            ></Toys>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllToys;