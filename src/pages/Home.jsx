import React, { useContext } from "react";
import Nav from "../components/Nav";
import Categories from "../category";
import Card from "../components/Card";
import Food from "../Food";
import { RxCross2 } from "react-icons/rx";
import Card2 from "../components/Card2";
import { datacontext } from "../context/Usercontext";
import { useSelector } from "react-redux";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Home = () => {
    let { filteredFood, setFilteredFood, input, showcart, setshowcart } = useContext(datacontext)
    function filterFood(selectedCategory) {
        if (selectedCategory === "All") {
            setFilteredFood(Food);
        } else {
            const updatedCategory = Food.filter((item) => item.food_category === selectedCategory);
            setFilteredFood(updatedCategory);
        }
    }
    let items = useSelector(state => state.cart)
    let subtotal = items.reduce((total, item) =>
        total + item.qty*item.price, 0
    )
    let deliveryfee = 20;
    let taxes = subtotal * 0.5 / 100;
    let total = subtotal + deliveryfee + taxes
    return (
        <div className="bg-slate-200 w-full min-h-screen">
            <Nav />

            {/* Categories Section */}
            {!input ? <div className="flex flex-wrap justify-center items-center gap-5 w-full p-5">
                {Categories.map((item, index) => (
                    <div
                        key={index}
                        className="w-[140px] h-[150px] bg-white flex flex-col items-start gap-5 p-5 justify-start 
                                   text-[20px] text-gray-600 rounded-lg shadow-xl hover:bg-green-200 cursor-pointer 
                                   transition-all duration-200"
                        onClick={() => filterFood(item.name)}
                    >
                        {item.icon}
                        {item.name}
                    </div>
                ))}
            </div> : null}


            {/* Food Items Section */}
            <div className="w-full flex flex-wrap gap-5 justify-center items-center pt-8 px-5 pb-8">
                {filteredFood.map((item) => (
                    <Card
                        key={item.id}
                        name={item.food_name}
                        image={item.food_image}
                        price={item.price}
                        id={item.id}
                        type={item.food_type}
                    />
                ))}
            </div>
            <div className={`w-full md:w-[40vw] h-[100%] fixed top-0 right-0 bg-white shadow-xl p-6 transition-all duration-500 ${showcart ? "translate-x-0" : "translate-x-full"}`}>
                <header className="w-[100%] flex justify-between items-center ">
                    <span className="text-green-400 text-2xl">Order items</span>
                    <RxCross2 className="w-[30px] h-[20px] cursor-pointer hover:text-green-600 text-green-400 text-2xl" onClick={() => setshowcart(false)} />
                </header>
                <div className="w-full mt-2 flex flex-col gap-3 max-h-[40vh] overflow-y-auto" >

                    {items.length > 0 ? (
                        items.map((item) => (
                            <Card2 key={item.id} name={item.name} price={item.price} image={item.image} id={item.id} qty={item.qty} />
                        ))
                    ) : (
                        <p className="text-gray-500 text-center mt-5">Your cart is empty</p>
                    )}
                </div>
                <div className="w-full border-t-2 border-b-2 border-gray-400 mt-7 flex flex-col gap-4 p-8">
                    <div className="w-full flex justify-between items-center">
                        <span className="text-lg text-gray-500 font-semibold">Subtotal</span>
                        <span className="text-green-400 font-semibold">Rs  {subtotal}/-</span>
                    </div>
                    <div className="w-full flex justify-between items-center">
                        <span className="text-lg text-gray-500 font-semibold">Delivery Fee</span>
                        <span className="text-green-400 font-semibold">Rs  {deliveryfee}/-</span>
                    </div>
                    <div className="w-full flex justify-between items-center">
                        <span className="text-lg text-gray-500 font-semibold">Taxes</span>
                        <span className="text-green-400 font-semibold">Rs  {taxes}/-</span>
                    </div>

                </div>
                <div className="w-full flex justify-between items-center mt-2">
                    <span className="text-2xl text-gray-500 font-semibold">Total</span>
                    <span className="text-green-400 font-semibold">Rs  {total}/-</span>
                </div>
                <button className='w-full p-3 bg-green-300 rounded-md text-gray-500 hover:bg-green-400 transition-all mt-4' onClick={()=>{toast.success("Order Placed")}}  >
                    Place order
                </button>
            </div>
        </div>
    );
};

export default Home;
