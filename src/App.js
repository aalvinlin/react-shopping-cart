import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

import ProductContext from "./contexts/ProductContext";
import CartContext from "./contexts/CartContext";

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

	const removeItem = (event, id) => {
		
		event.preventDefault();
		
		setCart(cart.filter(item => item.id !== id));
	};

	return (
		<div className="App">
			<CartContext.Provider value={{cart}}>
				<Navigation />
			</CartContext.Provider>

			{/* Routes */}
			<ProductContext.Provider value={{products, addItem}}>
				<Route
					exact
					path="/"
					component={Products}
				/>
			</ProductContext.Provider>

			<ProductContext.Provider value={{products, addItem, removeItem}}>
				<CartContext.Provider value={{cart}}>
					<Route
						path="/cart"
						component={ShoppingCart}
					/>
				</CartContext.Provider>
			</ProductContext.Provider>
		</div>
	);
}

export default App;
