import React, { useEffect } from "react";
import "./Carousal.css";
import Card from "./Card";

const Carousal = () => {
    useEffect(() => {
        if (!localStorage.getItem('Order')) {
            let order = {
                "dishes": [],
                "total": 0
            };
            localStorage.setItem('Order', JSON.stringify(order));
        }
    });

    return (
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="container carousel-item active">
                    <Card cuisine="CHINESE" link="https://images.herzindagi.info/image/2019/Jan/best-chinese-restaurants-delhi-main.jpg" to="/chinese" />
                </div>
                <div className="container carousel-item">
                    <Card cuisine="ITALIAN" link="https://d1ralsognjng37.cloudfront.net/2b8ecef8-01c1-44e2-9047-4d255c2a90d3.jpeg" to="/italian" />
                </div>
                <div className="container carousel-item">
                    <Card cuisine="INDIAN" link="https://post.healthline.com/wp-content/uploads/2020/07/thali-indian-732x549-thumbnail-732x549.jpg" to="/indian" />
                </div>
            </div>

            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    );
}
export default Carousal;

/*
<div className="container my-4">
            <div id="multi-item-example" class="carousel slide carousel-multi-item" data-ride="carousel"></div>
            <div class="controls-top">
                <a class="btn-floating" href="#multi-item-example" data-slide="prev"><i class="fas fa-chevron-left"></i></a>
                <a class="btn-floating" href="#multi-item-example" data-slide="next"><i
                    class="fas fa-chevron-right"></i></a>
            </div>
            <ol class="carousel-indicators">
                <li data-target="#multi-item-example" data-slide-to="0" class="active"></li>
                <li data-target="#multi-item-example" data-slide-to="1"></li>
            </ol>

            <div class="carousel-inner" role="listbox">
                <div class="carousel-item active">
                    <div class="col-3 card-style"><Card /></div>
                </div>
                <div class="carousel-item">
                    <div class="col-3 card-style"><Card /></div>
                </div>
            </div>
        </div>
*/