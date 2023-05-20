import { useContext } from "react";
import Loading from "../Shared/Loading/Loading";
import { AuthContext } from "../../Providers/AuthProviders";
import PageTitle from "../Shared/PageTitle/PageTitle";


const Blog = () => {

    const { loading } = useContext(AuthContext);

    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div className="max-w-7xl mx-auto my-16">
            <PageTitle title="Blogs" />
            <div className='flex flex-wrap items-center  justify-center gap-5 mb-10'>
                <h2 className='text-3xl md:text-4xl font-bold text-center text-black'>Some Question and Answer</h2>
            </div>
            <div className='flex flex-col gap-8 '>

                {/* question-1 */}

                <div tabIndex={0} className="collapse  collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium text-sky-600">
                        What is an access token and refresh token? How do they work and where should we store them on the client-side?
                    </div>
                    <div className="collapse-content">
                        <p>An access token is a credential that grants access to protected resources, representing the authorization of a user. It is typically short-lived and used for authentication in API requests. A refresh token is a long-lived token used to obtain a new access token when it expires.
                            <br />
                            Access tokens are usually stored in memory or secure storage on the client-side, such as cookies or local storage, to include them in API requests. Refresh tokens, on the other hand, should be securely stored, preferably in an HTTP-only cookie or secure storage with limited accessibility, as they have longer lifetimes and are more sensitive.
                            <br />
                            It's important to follow security best practices and protect tokens from unauthorized access..</p>
                    </div>
                </div>

                {/* question-2 */}

                <div tabIndex={1} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium text-sky-600">
                        Compare SQL and NoSQL databases?
                    </div>
                    <div className="collapse-content">
                        <p>SQL databases are relational, structured, and use a fixed schema. They ensure data consistency and support complex queries. NoSQL databases are non-relational, schema-less, and provide flexible data models. They excel at scalability, high performance, and handling unstructured data. SQL databases offer strong ACID transactions, while NoSQL databases prioritize high availability and eventual consistency. The choice depends on specific use cases and requirements.</p>
                    </div>
                </div>

                {/* question-3 */}

                <div tabIndex={2} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium text-sky-600">
                        What is express js? What is Nest JS?
                    </div>
                    <div className="collapse-content">
                        <p>
                            Express.js is a minimalist web application framework for Node.js, providing a simple and flexible approach to build web applications and APIs. It offers middleware and routing capabilities, making it easy to handle HTTP requests and responses.
                            <br />
                            NestJS, on the other hand, is a full-featured, scalable framework for building server-side applications. It is built on top of Express.js and uses TypeScript as its primary language. NestJS follows a modular architecture and incorporates concepts from Angular to provide a structured and organized approach to application development.</p>
                    </div>
                </div>

                {/* question-4 */}

                <div tabIndex={3} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium text-sky-600">
                        What is MongoDB aggregate and how does it work ?
                    </div>
                    <div className="collapse-content">
                        <p>
                            MongoDB's aggregate is a powerful method for performing advanced data processing and analysis. It allows users to run complex queries and perform transformations on the data stored in MongoDB collections. Aggregation pipelines are constructed using stages like $match, $group, $sort, etc. Each stage processes and transforms the data, enabling operations like filtering, grouping, sorting, and calculating aggregate values.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;