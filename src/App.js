import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

import ProductContext from "./contexts/ProductContext";

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
import Product from './components/Product';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = (event, item) => {
		
		event.preventDefault();
		setCart([...cart, item]);
	};

	return (
		<div className="App">
			<Navigation cart={cart} />

			{/* Routes */}
			<ProductContext.Provider value={{products, addItem}}>
			<Route
				exact
				path="/"
				component={Products}
			/>
			</ProductContext.Provider>

			<ProductContext.Provider value={{products, addItem}}>
			<Route
				path="/cart"
				render={() => <ShoppingCart cart={cart} />}
			/>
			</ProductContext.Provider>
		</div>
	);
}

export default App;
