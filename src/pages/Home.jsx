import React, { useState } from "react";
import Nav from "../components/Nav";
import Categories from "../category";
import Card from "../components/Card";
import Food from "../Food";

const Home = () => {
    const [filteredFood, setFilteredFood] = useState(Food);

    function filterFood(selectedCategory) {
        if (selectedCategory === "All") {
            setFilteredFood(Food);
        } else {
            const updatedCategory = Food.filter((item) => item.food_category === selectedCategory);
            setFilteredFood(updatedCategory);
        }
    }

    return (
        <div className="bg-slate-200 w-full min-h-screen">
            <Nav />

            {/* Categories Section */}
            <div className="flex flex-wrap justify-center items-center gap-5 w-full p-5">
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
            </div>

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
        </div>
    );
};

export default Home;
