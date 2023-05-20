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

    return (
        <div className="my-16">
             <PageTitle title="MyToys" />
            <div className="text-center mb-10">
                <h2 className="font-bold text-4xl mb-7 text-center text-black">{user.displayName}'s Toys</h2>

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