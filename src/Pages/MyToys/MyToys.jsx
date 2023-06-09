import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import ToysMY from "./ToysMY";
import PageTitle from "../Shared/PageTitle/PageTitle";

const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [toys, setToys] = useState([]);

    const url = `https://toy-marketplace-server-plum.vercel.app/myToys?email=${user.email}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setToys(data)
            })
    }, [url]);

    const handleAscending = (e) => {
        const selectValue = e.target.value;
        if (selectValue == 'Descending Order') {
            fetch(`https://toy-marketplace-server-plum.vercel.app/myToysDescending/${user.email}`)
                .then(res => res.json())
                .then(data => {
                    setToys(data)
                })
        }
        else if (selectValue == 'Ascending Order') {
            fetch(`https://toy-marketplace-server-plum.vercel.app/myToysAscending/${user.email}`)
                .then(res => res.json())
                .then(data => {
                    setToys(data)
                })
        }
    }

    return (
        <div className="my-16">
            <PageTitle title="MyToys" />
            <div className="text-center mb-10">
                <h2 className="font-bold text-3xl md:text-4xl mb-7 text-center text-black">{user.displayName}'s Toys</h2>
            </div>

            <div className="text-right  w-11/12 mb-10">
                <select onChange={handleAscending} className="select select-bordered max-w-xs">
                    <option disabled selected>Sort by Price</option>
                    <option >Ascending Order</option>
                    <option>Descending Order</option>
                </select>
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
                            <th className="text-xl">Delete</th>
                            <th className="text-xl">Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            toys && toys.map((toy, i) => <ToysMY
                                key={toy._id}
                                index={i}
                                toy={toy}
                                toys={toys}
                                setToys={setToys}
                            ></ToysMY>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToys;