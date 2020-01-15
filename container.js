import React from "react"
import GroceryItem from "./components/GroceryListItem.js"
import ShoppingCartItem from "./components/shoppingCartItem.js"




class GroceryList extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            groceryItems: [
                {
                    id: 1,
                    title: "Apples"
                },
                {
                    id: 2,
                    title: "Bread"
                },
                {
                    id: 3,
                    title: "Snoopies"
                },
                {
                    id: 4,
                    title: "Sweeties"
                },
                {
                    id: 5,
                    title: "Bierries"
                },
            ],

            shoppingCart: [
                {
                    id: 1,
                    title: "Zambuk"
                },
                {
                    id: 2,
                    title: "Chakalaka"
                },
                {
                    id: 3,
                    title: "Epapa"
                },
                {
                    id: 4,
                    title: "Grevy"
                },
            ]
        }
        this.handleClickGroveryItem = this.handleClickGroceryItem.bind(this)
    }

    handleClickGroceryItem(){
        console.log("CLICK CLICK BOOM")   
}

    render() {
        const shoppingItems = this.state.groceryItems.map(item => <GroceryItem title={item.title} key={item.id} onClick={this.handleClickGroceryItem}/>)
        const shoppingCartContents = this.state.shoppingCart.map(item => <ShoppingCartItem  title={item.title} key={item.id} />)
        console.log("Sanity check 1 for items that need to be in the checkout cart", shoppingCartContents)
        console.log("sanity check 2 for items in the grocery list", shoppingItems)
        return (
            <div>
                <h1>Shopping List</h1>
                <ul className="grocery-list"
                    // onClick={this.handleClickGroceryItem}
                    >
                    {shoppingItems}
                </ul>
                <br />
                <div>
                    <h1>Checkout Cart</h1>
                    <ul className="cart-list">
                        {shoppingCartContents}
                        
                    </ul>
                    <br />

                </div>
            </div>

        )

    }
}

export default GroceryList