import React from "react";
import Dishes from "../components/Dishes";
import { Link } from "react-router-dom";
//import "./Card.css";

const Italian = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div class="col col-9"><h1>ITALIAN CUISINE</h1></div>
                <div class="col col-3">
                    <Link className="nav-link" to={"/cart"}>
                        <button class="btn btn-primary">My Cart</button>
                    </Link>
                </div>
            </div>
            <div className="row">
                <div className="col col-4">
                    <Dishes name="Veg pizza" price="160" link="https://media-cdn.tripadvisor.com/media/photo-s/1a/45/60/8b/mix-veggie-pizza.jpg"/>
                </div>
                <div className="col col-4">
                    <Dishes name="White sauce pasta" price="80" link="https://www.indianhealthyrecipes.com/wp-content/uploads/2021/02/white-sauce-pasta-500x500.jpg"/>
                </div>
                <div className="col col-4">
                    <Dishes name="Caprese Salad" price="120" link="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2003/9/22/0/tm1a35_caprese_salad.jpg.rend.hgtvcom.616.462.suffix/1530799984231.jpeg"/>
                </div>
            </div>
            <div className="row">
                <div className="col col-4">
                    <Dishes name="Bruschetta" price="100" link="https://www.vegrecipesofindia.com/wp-content/uploads/2016/07/bruschetta-recipe-1.jpg"/>
                </div>
                <div className="col col-4">
                    <Dishes name="Focaccia Bread" price="110" link="https://keviniscooking.com/wp-content/uploads/2017/07/Zesty-Homemade-Focaccia-Bread-square.jpg"/>
                </div>
                <div className="col col-4">
                    <Dishes name="Mushroom Risotto" price="140" link="https://cupfulofkale.com/wp-content/uploads/2020/05/Creamy-Vegan-Wild-Mushroom-Risotto-720x720.jpg"/>
                </div>
            </div>
        </div>
    );
}
export default Italian;