import React from "react";
import Dishes from "../components/Dishes";
import { Link } from "react-router-dom";

const Chinese = () => {
    return (
        <div className="container">
            <div className="row">
                <div class="col col-9"><h1>CHINESE CUISINE</h1></div>
                <div class="col col-3">
                    <Link className="nav-link" to={"/cart"}>
                        <button class="btn btn-primary">My Cart</button>
                    </Link>
                </div>
            </div>
            <div className="row">
                <div className="col col-4">
                    <Dishes name="Veg Manchurian" price="80" link="https://www.vegrecipesofindia.com/wp-content/uploads/2012/05/veg-manchurian-gravy-recipe-1b-500x500.jpg" />
                </div>
                <div className="col col-4">
                    <Dishes name="Hakka Noodles" price="120" link="https://www.sanjanafeasts.co.uk/wp-content/uploads/2020/02/Delicious-Vegetarian-Hakka-Noodles-Quick-Easy-Recipe-500x500.jpg" />
                </div>
                <div className="col col-4">
                    <Dishes name="Spring Roll" price="70" link="https://5.imimg.com/data5/YM/UQ/GLADMIN-27973816/veg-spring-rolls-500x500.jpg" />
                </div>
            </div>
            <div className="row">
                <div className="col col-4">
                    <Dishes name="Chicken Manchurian" price="100" link="https://www.vegrecipesofindia.com/wp-content/uploads/2012/05/veg-manchurian-gravy-recipe-1b-500x500.jpg" />
                </div>
                <div className="col col-4">
                    <Dishes name="Chicken Chowmein" price="110" link="https://www.sanjanafeasts.co.uk/wp-content/uploads/2020/02/Delicious-Vegetarian-Hakka-Noodles-Quick-Easy-Recipe-500x500.jpg" />
                </div>
                <div className="col col-4">
                    <Dishes name="Chicken momos" price="60" link="http://www.theterracekitchen.in/wp-content/uploads/2019/07/048.-Chicken-Momos_545X545.png" />
                </div>
            </div>
        </div>
    );
}
export default Chinese;