import { useContext } from "react";
import Loading from "../Shared/Loading/Loading";
import { AuthContext } from "../../Providers/AuthProviders";


const Blog = () => {

    const { loading } = useContext(AuthContext);

    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div className="max-w-7xl mx-auto my-20">
            <div className='flex flex-wrap items-center  justify-center gap-5 mb-10'>
                <h2 className='text-3xl md:text-5xl font-bold text-center text-black'>Some Question and Answer</h2>
            </div>
            <div className='flex flex-col gap-8 '>

                {/* question-1 */}

                <div tabIndex={0} className="collapse  collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium text-sky-600">
                        What is an access token and refresh token? How do they work and where should we store them on the client-side?
                    </div>
                    <div className="collapse-content">
                        <p>In React, controlled and uncontrolled components refer to how a component manages its state and responds to user input. The main difference between controlled and uncontrolled components in React is that controlled components have their state fully managed by the parent component, while uncontrolled components manage their own state internally.</p>
                    </div>
                </div>

                {/* question-2 */}

                <div tabIndex={1} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium text-sky-600">
                        Compare SQL and NoSQL databases?
                    </div>
                    <div className="collapse-content">
                        <p>PropTypes is a built-in library in React that allows developers to validate the props passed to a component. It is used by defining the expected type and shape of the props.To use PropTypes, import it into your component, then define the expected types and shapes of the props using PropTypes validators. This provides a warning in the console if the props passed to the component do not match the expected types or shapes.</p>
                    </div>
                </div>

                {/* question-3 */}

                <div tabIndex={2} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium text-sky-600">
                        What is express js? What is Nest JS?
                    </div>
                    <div className="collapse-content">
                        <p>Here the difference between firstly, Node.js is a JavaScript runtime environment that allows developers to execute JavaScript code on the server-side. Express.js is a web application framework built on top of Node.js that provides a set of features for building web applications such as routing, middleware, and handling HTTP requests and responses.</p>
                    </div>
                </div>

                {/* question-4 */}

                <div tabIndex={3} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium text-sky-600">
                        What is MongoDB aggregate and how does it work ?
                    </div>
                    <div className="collapse-content">
                        <p>In React, a custom hook is a JavaScript function that starts with the prefix use and allows developers to reuse stateful logic between components. Custom hooks are created to abstract away complex logic and make it reusable across multiple components.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;