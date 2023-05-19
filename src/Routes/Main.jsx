import { createBrowserRouter, } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Error from "../Pages/Error/Error";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Login/Registration";
import Terms from "../Pages/Login/Terms";
import Blogs from "../Pages/Blogs/Blogs";
import AllToys from "../Pages/AllToys/AllToys";
import AddAToy from "../Pages/AddAToy/AddAToy";
import MyToys from "../Pages/MyToys/MyToys";
import PrivateRoutes from "../Private/PrivateRoutes";
import Update from "../Pages/MyToys/Update";
import ViewDetails from "../Pages/AllToys/ViewDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/registration',
                element: <Registration></Registration>
            },
            {
                path: '/terms',
                element: <Terms></Terms>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/allToys',
                element: <AllToys></AllToys>,
                loader: () => fetch('https://toy-marketplace-server-plum.vercel.app/toys')
            },
            {
                path: '/addAToy',
                element: <PrivateRoutes><AddAToy></AddAToy></PrivateRoutes>
            },
            {
                path: '/myToys',
                element: <PrivateRoutes><MyToys></MyToys></PrivateRoutes>
            },
            {
                path: '/toy/:id',
                element: <PrivateRoutes><ViewDetails></ViewDetails></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://toy-marketplace-server-plum.vercel.app/toys/${params.id}`)
            },
            {
                path: '/update/:id',
                element: <Update></Update>,
                loader: ({ params }) => fetch(`https://toy-marketplace-server-plum.vercel.app/toys/${params.id}`)
            },
        ],
    },
]);

export default router;