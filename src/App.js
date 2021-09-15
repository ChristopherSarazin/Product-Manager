import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import AllProducts from "./components/AllProducts"
import AddProduct from './components/AddProduct';
import OneProduct from './components/OneProduct';
import EditProduct from './components/EditProduct';



function App() {
  return (
    <BrowserRouter>
      <div className="App container">
          <Switch>
            <Route exact path = "/api/products">
              <AddProduct></AddProduct>
              <AllProducts  />
            </Route>
            <Route exact path = "/api/products/:id">
              <OneProduct></OneProduct>
            </Route>
            <Route exact path = "/api/products/update/:id">
              <EditProduct  />
            </Route>
          </Switch>
      </div>
    </BrowserRouter>
  );
}



export default App;
