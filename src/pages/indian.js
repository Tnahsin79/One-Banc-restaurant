import React from "react";
import Dishes from "../components/Dishes";
import { Link } from "react-router-dom";
//import "./Card.css";

const Indian = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div class="col col-9"><h1>INDIAN CUISINE</h1></div>
                <div class="col col-3">
                    <Link className="nav-link" to={"/cart"}>
                        <button class="btn btn-primary">My Cart</button>
                    </Link>
                </div>
            </div>
            <div className="row">
                <div className="col col-4">
                    <Dishes name="Chana Masala" price="80" link="https://www.indianhealthyrecipes.com/wp-content/uploads/2019/08/chole-500x500.jpg"/>
                </div>
                <div className="col col-4">
                    <Dishes name="Saag Paneer" price="120" link="https://www.curiouscuisiniere.com/wp-content/uploads/2021/02/Saag-Paneer-4.1200-720x720.jpg"/>
                </div>
                <div className="col col-4">
                    <Dishes name="Chole Bhature" price="70" link="https://img-global.cpcdn.com/recipes/9f7bdff30c4a4932/751x532cq70/chole-bhature-jeera-rice-and-aloo-gobhi-recipe-main-photo.jpg"/>
                </div>
            </div>
            <div className="row">
                <div className="col col-4">
                    <Dishes name="Dal Tadka" price="100" link="https://www.cookwithmanali.com/wp-content/uploads/2014/08/Dal-Tadka-500x500.jpg"/>
                </div>
                <div className="col col-4">
                    <Dishes name="Shahi Paneer" price="110" link="https://www.spiceupthecurry.com/wp-content/uploads/2020/07/shahi-paneer-recipe-1-500x500.jpg"/>
                </div>
                <div className="col col-4">
                    <Dishes name="Malai Kofta" price="60" link="https://www.vegrecipesofindia.com/wp-content/uploads/2021/04/malai-kofta-2.jpg"/>
                </div>
            </div>  
        </div>
    );
}
export default Indian;