# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# reference

https://www.freecodecamp.org/news/how-to-build-a-shopping-cart-with-react-and-typescript/

## Reactjs components

# Header

1. The Header is the top side of the app. It holds the logo on the left and the Cardwidget components on the right.


# Cardwidget
2. The Cardwidget component is a button on the right of the Header.
    => image : shopping cart
    => value : number value of current products added to cart

# Product
3. Product component render the main content of the page. 
    Each product has : 
    => image
    => price (formatted with CurrencyFormatter component)
    => Add to cart button

# CurrencyFormatter
4. CurrencyFormatter component format the value to HKD 


# Cart  
5. Cart component 
    => one product per row
    => quantifier component 
    => bottom show total price 

# Quantifier
6.  =>plus/minus button , with a value in between
    when value is 0 , remove from cart

# Loader 
7. loading animation 


