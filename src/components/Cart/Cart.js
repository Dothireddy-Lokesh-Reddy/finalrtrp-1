import { Component } from "react";
import EmptyCartView from "../Empty/EmpytCart";
import { myContext } from "../../App";
import Nav from "../Navbar/Nav";
import "./Cart.css";
import { useState } from "react";
import Footer from "../Footer/Footer";
function Count(props) {
    const { price } = props;
    const [count, setCount] = useState(1);
    return (
        <>
            <div>
                <p className="price">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        class="bi bi-currency-exchange"
                        viewBox="0 0 16 16"
                    >
                        <path d="M0 5a5 5 0 0 0 4.027 4.905 6.5 6.5 0 0 1 .544-2.073C3.695 7.536 3.132 6.864 3 5.91h-.5v-.426h.466V5.05q-.001-.07.004-.135H2.5v-.427h.511C3.236 3.24 4.213 2.5 5.681 2.5c.316 0 .59.031.819.085v.733a3.5 3.5 0 0 0-.815-.082c-.919 0-1.538.466-1.734 1.252h1.917v.427h-1.98q-.004.07-.003.147v.422h1.983v.427H3.93c.118.602.468 1.03 1.005 1.229a6.5 6.5 0 0 1 4.97-3.113A5.002 5.002 0 0 0 0 5m16 5.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0m-7.75 1.322c.069.835.746 1.485 1.964 1.562V14h.54v-.62c1.259-.086 1.996-.74 1.996-1.69 0-.865-.563-1.31-1.57-1.54l-.426-.1V8.374c.54.06.884.347.966.745h.948c-.07-.804-.779-1.433-1.914-1.502V7h-.54v.629c-1.076.103-1.808.732-1.808 1.622 0 .787.544 1.288 1.45 1.493l.358.085v1.78c-.554-.08-.92-.376-1.003-.787zm1.96-1.895c-.532-.12-.82-.364-.82-.732 0-.41.311-.719.824-.809v1.54h-.005zm.622 1.044c.645.145.943.38.943.796 0 .474-.37.8-1.02.86v-1.674z" />
                    </svg>
                    {price}
                </p>
            </div>
            <div className="quantity_increment">
                <div className="increment-btns">
                    <button onClick={() => setCount(count > 1 ? count - 1 : 1)}>
                        {" "}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            class="bi bi-dash-square"
                            viewBox="0 0 16 16"
                            className="inc-dec-count"
                        >
                            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                            <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8" />
                        </svg>{" "}
                    </button>
                    <p className="count">{count}</p>
                    <button
                        onClick={() => setCount(count >= 1 ? count + 1 : 1)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            class="bi bi-plus-square"
                            viewBox="0 0 16 16"
                            className="inc-dec-count"
                        >
                            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                        </svg>{" "}
                    </button>
                </div>
            </div>
            <div>
                <p className="price">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-currency-rupee"
                        viewBox="0 0 16 16"
                    >
                        <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z" />
                    </svg>
                    {price * count}
                </p>
            </div>
        </>
    );
}
class Cart extends Component {
    render() {
        return (
            <myContext.Consumer>
                {(values) => {
                    const { addCartItem, cartItemArray,onRemoveItem } = values;
                    if (cartItemArray.length == 0) {
                        return <EmptyCartView />;
                    } else {
                        return (
                            <>
                                <Nav />

                                <div className="cart-item-list container">
                                    <div className="header-cart">
                                        <h1>Cart Section</h1>
                                        <h2>
                                            Total Items : {cartItemArray.length}
                                        </h2>
                                    </div>
                                    <div className="menu-list container">
                                        <h3 style={{ width: "250px" }}>
                                            Image
                                        </h3>
                                        <div
                                            className=""
                                            style={{
                                                display: "flex",
                                                justifyContent: "space-between",
                                                width: "75%",
                                            }}
                                        >
                                            <p>Details</p>
                                            <p>Price</p>
                                            <p>Inc/Dec</p>
                                            <p>Evaluted Price</p>
                                            <p>Remove</p>
                                        </div>
                                    </div>
                                    {cartItemArray.map((obj) => {
                                        const {
                                            id,
                                            ImageUrl,
                                            name,
                                            price,
                                            discription,
                                            category,
                                            rating,
                                        } = obj;
                                        return (
                                            <div className="cart-img-container1">
                                                <div>
                                                    <img
                                                        src={ImageUrl}
                                                        className="cart-img"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="cart-main-content">
                                                    <div className="cart-content-container">
                                                        <h3>{name}</h3>
                                                        <p>{category}</p>
                                                        <button
                                                            className="logout-btn"
                                                            style={{
                                                                display: "flex",
                                                                justifyContent:
                                                                    "space-between",
                                                                alignItems:
                                                                    "center",
                                                                gap: "5px",
                                                            }}
                                                        >
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width="16"
                                                                height="16"
                                                                fill="currentColor"
                                                                className="bi bi-star-fill"
                                                                viewBox="0 0 16 16"
                                                            >
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                            </svg>
                                                            {rating}
                                                        </button>
                                                    </div>
                                                    <Count price={price} />

                                                    <div onClick={()=>onRemoveItem(id)}>
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            fill="currentColor"
                                                            class="bi bi-cart-dash-fill"
                                                            viewBox="0 0 16 16"
                                                            className="remove-cart"
                                                        >
                                                            <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0M6.5 7h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                                <Footer />
                            </>
                        );
                    }
                }}
            </myContext.Consumer>
        );
    }
}

export default Cart;
