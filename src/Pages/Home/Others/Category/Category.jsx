import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Subcategory from './SubCategory';
import AOS from 'aos';


const Category = () => {
    const [subCategory, setSubCategory] = useState('Mini Sports Car');
    const [toys, setToys] = useState([]);
    useEffect(() => {
        AOS.init();
    }, [])
    // get sub-category name
    const handleClick = event => {
        setSubCategory(event.target.innerText);
    }
    const URL = `https://toy-marketplace-server-plum.vercel.app/category?category=${subCategory}`
    useEffect(() => {
        fetch(URL)
            .then(res => res.json())
            .then(data => {
                setToys(data)
            })
    }, [URL])

    return (
        <div data-aos="fade-left"
            data-aos-duration="3000">
            <div className="px-2 grid-cols-1 md:grid-cols-2 lg:lg:px-20 my-24">
                <div className="mb-10 text-center">
                    <h2 className="text-5xl font-bold text-black ">Toys Category</h2>
                </div>
                <div>
                    <Tabs className={" bg-opacity-90 bg-gray-200 rounded-xl"}>
                        <TabList className={'tabs-boxed flex flex-wrap py-7 rounded-b-none bg-black bg-opacity-95 gap-2 lg:gap-10 justify-center'} onClick={handleClick}>
                            <Tab className={'tab tab-lifted shadow shadow-white text-gray-600 md:text-xl font-bold'}> Mini Sports Car</Tab>
                            <Tab className={'tab tab-lifted shadow shadow-white text-gray-600 md:text-xl font-bold'}> Mini Police Car</Tab>
                            <Tab className={'tab tab-lifted shadow shadow-white text-gray-600 md:text-xl font-bold'}> Mini Truck</Tab>
                        </TabList>

                        <TabPanel>
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 px-6 lg:px-20 py-16'>
                                {
                                    toys && toys.slice(0, 3).map(toy => (
                                        <Subcategory
                                            key={toy._id}
                                            toy={toy}
                                        ></Subcategory>
                                    ))
                                }
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 px-6 lg:px-20 py-16'>
                                {
                                    toys && toys.slice(0, 3).map(toy => (
                                        <Subcategory
                                            key={toy._id}
                                            toy={toy}
                                        ></Subcategory>
                                    ))
                                }
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 px-6 lg:px-20 py-16'>
                                {
                                    toys && toys.slice(0, 3).map(toy => (
                                        <Subcategory
                                            key={toy._id}
                                            toy={toy}
                                        ></Subcategory>
                                    ))
                                }
                            </div>
                        </TabPanel>
                    </Tabs>

                </div>

            </div>
        </div>
    );
};

export default Category;