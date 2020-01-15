// import React from "react"
// import ShoppingCartItem from "./shoppingCartItem.js"


// class CartList extends React.Component {

//     constructor(props) {
//         super(props)
//         this.state = {
//             cartItems: [
//                 {
//                     id: 1,
//                     title: "Zambuk"
//                 },
//                 {
//                     id: 2,
//                     title: "Chakalaka"
//                 },
//                 {
//                     id: 3,
//                     title: "Epapa"
//                 },
//                 {
//                     id: 4,
//                     title: "Grevy"
//                 },
//             ]
//         }
//         console.log(this.state.cartItems);
//     }

//     render() {
//         const shoppingCartItems = this.state.cartItems.map(item => <ShoppingCartItem title={item.title} key={item.id} />)
//         console.log(shoppingCartItems)
//         return (
//             <div>
//                 <h1>Shopping Cart</h1>
//                 <ul className="cart-list">
//                     {shoppingCartItems}
//                 </ul>
//                 <br />

//             </div>

//         )

//     }
// }

// export default CartList