import React, { Component } from "react";
import { v4 } from "uuid";
import Nav from "../Navbar/Nav";
import "./Products.css";
import Footer from "../Footer/Footer";
import { myContext } from "../../App";
let items = [
    {
        id: v4(),
        ImageUrl: "rtrppics/butterchiken.jpg",
        name: "Butter Chicken",
        price: 220,
        discription:
            "Butter chicken, or Murgh Makhani, is a popular North Indian dish featuring tender chicken pieces in a rich, creamy tomato-based sauce. ",
        category: "Non-veg",
        rating: 4.5,
    },
    {
        id: v4(),
        ImageUrl: "rtrppics/chickentikkamasala.jpg",
        name: "Chicken Tikka Masala",
        price: 250,
        discription:
            "Chicken Tikka Masala is a popular Indian dish consisting of marinated, grilled chicken pieces (tikka) cooked in a spiced, creamy tomato sauce. The sauce includes ingredients like tomatoes, cream, onions, garlic, ginger, and a blend of spices such as garam masala and turmeric.",
        category: "Non-veg",
        rating: 3.5,
    },
    {
        id: v4(),
        ImageUrl: "rtrppics/dosa.jpg",
        name: "Dosa",
        price: 60,
        discription:
            "Dosa is a popular South Indian dish made from a fermented batter of rice and urad dal (black gram). It is a thin, crispy crepe served with accompaniments like sambar (a spicy lentil soup) and coconut chutney. Dosa can be plain or filled with spiced potato mixture, known as masala dosa.",
        category: "veg",
        rating: 2.2,
    },
    {
        id: v4(),
        ImageUrl: "rtrppics/potatocurry.jpg",
        name: "Potato",
        price: 60,
        discription:
            "The potato is a starchy tuber from the plant Solanum tuberosum. It is a versatile vegetable used in various cuisines worldwide. Potatoes can be boiled, baked, fried, mashed, or roasted and are commonly used in dishes like fries, mashed potatoes, and stews.",
        category: "veg",
        rating: 1.3,
    },
    {
        id: v4(),
        ImageUrl: "rtrppics/brinjal.webp",
        name: "Brinjal",
        price: 70,
        discription:
            "Brinjal, also known as eggplant or aubergine, is a glossy, purple vegetable from the nightshade family. It has a spongy texture and mild flavor, making it versatile in cooking. ",
        category: "veg",
        rating: 2.6,
    },
    {
        id: v4(),
        ImageUrl: "rtrppics/chapathi.jpg",
        name: "Chepathi",
        price: 50,
        discription:
            "Chapati is a type of unleavened flatbread from India, made from whole wheat flour (atta), water, and salt. The dough is rolled into thin discs and cooked on a hot griddle (tava) until it puffs up and develops brown spots. Chapatis are soft and pliable, often served with curries, vegetables, or dals.",
        category: "veg",
        rating: 3.6,
    },
    {
        id: v4(),
        ImageUrl: "rtrppics/grilledthandoorichicken.jpg",
        name: "Grilled Thandoori Chicken",
        price: 350,
        discription:
            "Tandoori Chicken begins with marinating chicken pieces (usually drumsticks, thighs, or breast) in a mixture of yogurt and spices. The marinade typically includes ingredients like ginger-garlic paste, cumin, coriander, turmeric, cayenne pepper, and garam masala.",
        category: "Non-veg",
        rating: 2.4,
    },
    {
        id: v4(),
        ImageUrl: "rtrppics/fishbiryani.webp",
        name: "FishBiryani",
        price: 350,
        discription:
            "Fish Biryani starts with marinating pieces of firm fish (such as cod, tilapia, or salmon) in a blend of yogurt, spices like turmeric, chili powder, and garam masala, along with ginger-garlic paste. ",
        category: "Non-veg",
        rating: 3.5,
    },
    {
        id: v4(),
        ImageUrl: "rtrppics/eggbiryani.jpg",
        name: "EggBiryani",
        price: 320,
        discription:
            "gg Biryani is a flavorful rice dish from South Asian cuisine where hard-boiled eggs are cooked with fragrant basmati rice and a blend of spices. The dish typically includes onions, tomatoes, garlic, ginger, and spices like cumin, coriander, turmeric, and garam masala. ",
        category: "Non-veg",
        rating: 2.5,
    },
    {
        id: v4(),
        ImageUrl: "rtrppics/icecream.webp",
        name: "Icecream",
        price: 100,
        discription:
            "Ice cream is a frozen dessert made from cream, milk, sugar, and typically flavored with various ingredients such as vanilla, chocolate, fruits, nuts, or cookies.",
        category: "veg",
        rating: 2.2,
    },
    {
        id: v4(),
        ImageUrl: "rtrppics/momos.jpg",
        name: "Momos",
        price: 250,
        discription:
            "Momos are a type of steamed or fried dumpling originating from Tibet and commonly found in Nepali, Tibetan, and other Himalayan cuisines. They are typically filled with a mixture of minced meat (such as pork, chicken, or lamb) or vegetables, along with garlic, ginger, and spices. ",
        category: "veg",
        rating: 3.3,
    },
    {
        id: v4(),
        ImageUrl: "rtrppics/muttonpulav.jpg",
        name: "Muttonpulao",
        price: 450,
        discription:
            "Mutton Pulao, also known as Mutton Pulav or Mutton Pilaf, is a flavorful rice dish from South Asian cuisine. It features tender pieces of mutton (goat meat) cooked with fragrant basmati rice and a blend of aromatic spices.",
        category: "Non-veg",
        rating: 1.8,
    },
    {
        id: v4(),
        ImageUrl: "rtrppics/palakpaneer.jpg",
        name: "Palakpaneer",
        price: 220,
        discription:
            "Palak Paneer is a popular North Indian dish made with paneer (Indian cottage cheese) cooked in a creamy spinach (palak) gravy. The spinach is blanched, pureed, and cooked with onions, tomatoes, garlic, ginger, and a blend of spices such as cumin, coriander, turmeric, and garam masala.",
        category: "veg",
        rating: 3.1,
    },

    {
        id: v4(),
        ImageUrl: "rtrppics/paneermakhani.jpg",
        name: "Paneermakhani",
        price: 430,
        discription:
            "Paneer Makhani, also known as Paneer Butter Masala, is a popular North Indian dish. It consists of cubes of paneer (Indian cottage cheese) cooked in a rich and creamy tomato-based sauce. ",
        category: "veg",
        rating: 2.3,
    },
    {
        id: v4(),
        ImageUrl: "rtrppics/pasta.webp",
        name: "Pasta",
        price: 330,
        discription:
            "Pasta is a staple food from Italian cuisine made from unleavened dough of durum wheat flour, mixed with water or eggs. It is shaped into various forms such as spaghetti, penne, fusilli, or ravioli, and then boiled until cooked al dente. ",
        category: "veg",
        rating: 3.2,
    },
    {
        id: v4(),
        ImageUrl: "rtrppics/pastry.jpg",
        name: "Pastry",
        price: 130,
        discription:
            "A pastry is a baked food made from dough that is typically rich in butter or another fat. It can be sweet or savory and comes in various forms such as pies, tarts, croissants, and danishes.",
        category: "veg",
        rating: 2.9,
    },
    {
        id: v4(),
        ImageUrl: "rtrppics/pavbhaji.webp",
        name: "Pavbhaji",
        price: 120,
        discription:
            "Pav Bhaji is a popular Indian street food dish consisting of a spiced vegetable mash (bhaji) served with buttered and toasted bread rolls (pav). The bhaji is made from mashed vegetables like potatoes, peas, tomatoes, and bell peppers cooked with spices such as cumin, coriander, turmeric, and red chili powder. ",
        category: "veg",
        rating: 1.2,
    },
    {
        id: v4(),
        ImageUrl: "rtrppics/pizza.jpg",
        name: "Pizza",
        price: 280,
        discription:
            "Pizza is a popular Italian dish consisting of a round, flat bread base topped with tomato sauce, cheese (usually mozzarella), and various ingredients such as meats (pepperoni, sausage), vegetables (bell peppers, mushrooms), and herbs (basil, oregano). ",
        category: "veg",
        rating: 3.5,
    },
    {
        id: v4(),
        ImageUrl: "rtrppics/samosa.webp",
        name: "Samosa",
        price: 80,
        discription:
            "A samosa is a popular snack originating from the Indian subcontinent. It consists of a crispy, triangular pastry filled with a savory mixture, usually including spiced potatoes, peas, and sometimes meat like minced lamb or chicken.",
        category: "veg",
        rating: 2.6,
    },
    {
        id: v4(),
        ImageUrl: "rtrppics/sandwich.webp",
        name: "Sandwich",
        price: 280,
        discription:
            "A sandwich is a food item consisting of two pieces of bread with various fillings between them. It can be made with a wide range of ingredients such as meats (like ham, turkey, or chicken), cheeses, vegetables (lettuce, tomatoes, cucumbers), spreads (mayonnaise, mustard), and condiments. ",
        category: "veg",
        rating: 3.2,
    },
    {
        id: v4(),
        ImageUrl: "rtrppics/shawarma.png",
        name: "Shawarma",
        price: 180,
        discription:
            "Shawarma is a Middle Eastern street food dish made of thinly sliced marinated meat (often lamb, chicken, beef, or a combination) stacked in a vertical rotisserie. The meat is slowly roasted and shaved off in thin slices as it cooks. ",
        category: "Non-veg",
        rating: 2.9,
    },
    {
        id: v4(),
        ImageUrl: "rtrppics/vegbiryani.jpg",
        name: "Vegbiryani",
        price: 220,
        discription:
            "Veg Biryani is a vegetarian version of the popular South Asian rice dish, biryani. It's made with fragrant basmati rice, mixed vegetables such as carrots, peas, potatoes, and bell peppers, cooked with a blend of spices like cumin, coriander, and garam masala.",
        category: "veg",
        rating: 1.2,
    },
];

export default class Products extends Component {
    state = {
        userInput: "",
        data: items,
        isVegChecked: true,
        isNonVegChecked: true,
        isVegOrNonVeg: ["veg", "Non-veg"],
    };
    onChangeInput = (event) => {
        this.setState({ userInput: event.target.value });
    };
    onChangeVeg = (event) => {
        let arr = this.state.isVegOrNonVeg;
        if (event.target.checked) {
            arr.push("veg");
        } else {
            arr = arr.filter((val) => val != "veg");
        }
        this.setState((pre) => ({
            isVegOrNonVeg: arr,
            isVegChecked: !pre.isVegChecked,
        }));
    };
    onChangeNonVeg = (event) => {
        let arr = this.state.isVegOrNonVeg;
        if (event.target.checked) {
            arr.push("Non-veg");
        } else {
            arr = arr.filter((val) => val != "Non-veg");
        }
        this.setState((pre) => ({
            isVegOrNonVeg: arr,
            isNonVegChecked: !pre.isNonVegChecked,
        }));
    };
    render() {
        console.log(this.state);
        return (
            <myContext.Consumer>
                {(values) => {
                    const { addCartItem, cartItemArray } = values;
                    return (
                        <>
                            <Nav />
                            <div className="container">
                                <img
                                    src="/images/productsImg.png"
                                    alt=""
                                    width="100%"
                                    height="450px"
                                />
                            </div>
                            <div className="products-all-container container">
                                <div className="prod-con">
                                    <div className="searchInput ">
                                        <input
                                            type="search"
                                            id="search-input"
                                            onChange={this.onChangeInput}
                                            placeholder="Search..."
                                        />
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            className="bi bi-search"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h1 className="filteration-heading">
                                            Category
                                        </h1>
                                        <div className="filter-items">
                                            <div className="selection">
                                                <input
                                                    type="checkbox"
                                                    name=""
                                                    id="veg"
                                                    checked={
                                                        this.state.isVegChecked
                                                    }
                                                    onChange={this.onChangeVeg}
                                                />
                                                <label htmlFor="veg">Veg</label>
                                            </div>
                                            <div className="selection">
                                                <input
                                                    type="checkbox"
                                                    name=""
                                                    id="NonVeg"
                                                    checked={
                                                        this.state
                                                            .isNonVegChecked
                                                    }
                                                    onChange={
                                                        this.onChangeNonVeg
                                                    }
                                                />
                                                <label htmlFor="NonVeg">
                                                    NonVeg
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="right-products-container">
                                    <h1>Products</h1>
                                    <div className="all-products">
                                        {this.state.data
                                            .filter((obj) => {
                                                return (
                                                    obj.name
                                                        .toLowerCase()
                                                        .includes(
                                                            this.state.userInput.toLowerCase()
                                                        ) &&
                                                    this.state.isVegOrNonVeg.includes(
                                                        obj.category
                                                    )
                                                );
                                            })
                                            .map((obj) => {
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
                                                    <div
                                                        className="img-item"
                                                        key={id}
                                                    >
                                                        <div>
                                                            <img
                                                                src={ImageUrl}
                                                                alt=""
                                                                width={"100%"}
                                                                height={"100%"}
                                                                className="prod-img"
                                                            />
                                                        </div>
                                                        <div className="img-content-section">
                                                            <div
                                                                style={{
                                                                    display:
                                                                        "flex",
                                                                    justifyContent:
                                                                        "space-between",
                                                                    alignItems:
                                                                        "center",
                                                                }}
                                                            >
                                                                <h2>{name}</h2>
                                                                <button
                                                                    className="logout-btn"
                                                                    style={{
                                                                        display:
                                                                            "flex",
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
                                                            <p>
                                                                <span>
                                                                    Cost :{" "}
                                                                </span>{" "}
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
                                                                {price}
                                                            </p>
                                                            <p>
                                                                <span>
                                                                    category :{" "}
                                                                </span>
                                                                {category}
                                                            </p>
                                                            <p className="dis-para">
                                                                {discription}
                                                            </p>
                                                            <button
                                                                className="logout-btn"
                                                                onClick={() => {
                                                                    let obj = {
                                                                        id,
                                                                        ImageUrl,
                                                                        name,
                                                                        price,
                                                                        discription,
                                                                        category,
                                                                        rating,
                                                                    };
                                                                    addCartItem(
                                                                        obj
                                                                    );
                                                                }}
                                                            >
                                                                Add to Cart
                                                            </button>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                    </div>
                                </div>
                            </div>
                            <Footer />
                        </>
                    );
                }}
            </myContext.Consumer>
        );
    }
}
