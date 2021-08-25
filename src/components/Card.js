import React from "react";
import routes from '../routes';
import "./Card.css";
import Chinese from "../pages/chinese";
import Indian from "../pages/indian";
import Italian from "../pages/italian";
import { Link } from "react-router-dom";

const Card = (props) => {
    const Cuisine = props.cuisine;
    const link = props.link;
    const to = props.to;
    const browseDishes = () => {

    }
    return (
        <div class="card mb-2">
            <img class="card-img-top"
                src={link} alt="Card image cap" />
            <div class="card-body">
                <h4 class="card-title">{Cuisine}</h4>
                <Link className="nav-link" to={to}>
                    <button class="btn btn-primary">Browse Dishes</button>
                </Link>
            </div>
        </div>
    );
}
export default Card;
//<button class="btn btn-primary" value={Cuisine} onClick={browseDishes}>Browse dishes</button>