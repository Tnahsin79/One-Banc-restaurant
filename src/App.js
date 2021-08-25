//import logo from './logo.svg';
import './App.css';
import Carousal from "./components/Carousal";
import { Switch, Route, useHistory } from 'react-router-dom';
import routes from './routes';
import Chinese from "./pages/chinese";
import Italian from './pages/italian';
import Indian from './pages/indian';
import Cart from './pages/cart';
import Summary from "./pages/Summary";
import Dishes from "./components/Dishes";
import { Link } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route path={routes.chinese}>
        <Chinese />
      </Route>
      <Route path={routes.italian}>
        <Italian />
      </Route>
      <Route path={routes.indian}>
        <Indian />
      </Route>
      <Route path={routes.cart}>
        <Cart />
      </Route>
      <Route path={routes.orderSummary}>
        <Summary />
      </Route>
      <Route path={routes.home}>
        <div className="container App">
          <div className="row">
            <div class="col col-10"><h1 className="name">OneBanc Restaurant</h1></div>
            <div class="col col-2">
              <Link className="nav-link" to={"/cart"}>
                <button class="btn btn-primary">My Cart</button>
              </Link>
            </div>
          </div>
          <hr></hr>
          <span>
            <label className="name">ENGLISH</label>
            <label class="switch">
              <input type="checkbox" />
              <span class="slider round"></span>
            </label>
            <label className="name">HINDI</label>
          </span>
          <hr></hr>
          <Carousal />
          <hr></hr>
          <h3 className="name">TOP 3 DISHES</h3><br></br>
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
        </div>
      </Route>
    </Switch>
  );
}

export default App;
/*
{
            localStorage.getItem('capstone') ?
              history.push(routes.dashboard.replace(":id", localStorage.getItem('capstone')))
              :
              <div className="container">
                <header className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />
                  <h1>WELCOME TO HOME PAGE</h1>
                </header>
              </div>
          }
          */