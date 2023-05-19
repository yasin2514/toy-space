import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import ToysMY from "./ToysMY";

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
            <div className="text-center mb-10">
                <h2 className="font-bold text-5xl mb-7 text-center text-black">My Toys</h2>
               
            </div>
            <div className="overflow-hidden">
                <table className="table text-center  w-11/12 mx-auto">
                    <thead >
                        <tr>
                            <th className="text-xl">SN</th>
                            <th className="text-xl">Seller</th>
                            <th className="text-xl">Toy Name</th>
                            <th className="text-xl">Sub Category</th>
                            <th className="text-xl">Quantity</th>
                            <th className="text-xl">Price</th>
                            <th className="text-xl">View Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            toys && toys.map((toy,i) => <ToysMY
                                key={toy._id}
                                index={i}
                                toy={toy}
                            ></ToysMY>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToys;