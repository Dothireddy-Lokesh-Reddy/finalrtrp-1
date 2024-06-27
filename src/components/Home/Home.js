import React, { Component } from "react";
import Nav from "../Navbar/Nav";
import "./Home.css";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
export default class Home extends Component {
    render() {
        return (
            <div>
                <Nav />
                <div className="hero-section">
                    <div className="hero-section-discription">
                        <h1 className="welcome-heading">
                            Welcome to <br />
                            Delish Dishes
                        </h1>
                        <p className="hero-para-dis">
                            At{" "}
                            <span className="hero-para-name">
                                Delish Dishes
                            </span>
                            , we bring the best restaurants foods to you, so you
                            can enjoy a variety of cuisines from the comfort of
                            your home. Whether you're craving a quick bite or
                            planning a family dinner, we've got you covered with
                            a wide selection of meals.
                        </p>
                        <Link to="/products">
                            <button className="order-btn">Order Know</button>
                        </Link>
                    </div>
                    <div className="img-section">
                        <img
                            src="/images/hero-img.jpg"
                            alt=""
                            className="hero-img"
                        />
                    </div>
                </div>
                <div className="improvement-feature-section">
                    <img
                        src="/images/mobile.jpg"
                        alt=""
                        className="mobile-imporvements"
                    />
                    <div className="items">
                        <h3 className="imp-heading">Improvement Feature</h3>
                        <ul className="imp-items">
                            <li>Detailed Nutritional Information</li>
                            <li>User Reviews and Ratings</li>
                            <li>Push Notifications for Deals and Offers</li>
                            <li>Recipe and Cooking Tips Section</li>
                            <li>Enhanced Security Features</li>
                            <li>Customer Feedback Loop</li>
                            <li>Personalized Meal Plans</li>
                            <li>Environmental Impact Information</li>
                            <li>Seasonal and Limited-Time Menus</li>
                            <li>Personal Chef Services</li>
                            <li>Weather-Based Recommendations</li>
                        </ul>
                    </div>
                    <img
                        src="/images/mobile-right.jpg"
                        alt=""
                        className="mobile-imporvements"
                    />
                </div>
                <div className="quote-container">
                    <img
                        src="/images/book-reader.jpg"
                        alt=""
                        className="quote-img"
                    />
                    <div className="quotes">
                        <p>
                            <span className="heading-person">James Beard:</span>{" "}
                            "Food is our common ground, a universal experience."
                        </p>
                        <p>
                            <span className="heading-person">
                                Description :
                            </span>{" "}
                            James Beard emphasizes that food is a unifying
                            element in human culture. Regardless of our
                            backgrounds, we all share the fundamental experience
                            of eating, which bridges cultural and social gaps.
                            Food, therefore, serves as a powerful connector
                            among people globally.
                        </p>
                        <hr />
                        <p>
                            <span className="heading-person">Julia Child:</span>{" "}
                            "People who love to eat are always the best people."
                        </p>
                        <p>
                            <span className="heading-person">
                                Description :
                            </span>
                            Julia Child highlights a charming and universal
                            truth: those who have a passion for food often have
                            a zest for life and are generally enjoyable to be
                            around. This quote underscores the idea that a love
                            for food often accompanies warmth, generosity, and a
                            vibrant spirit.
                        </p>
                    </div>
                </div>
                <div className="faqs">
                    <h1 className="faq-heading">Frequently Asked Question</h1>
                    <div className="question-answer-con">
                        <div className="ques">
                            <h2>
                                {" "}
                                I received the wrong order. What should I do?
                            </h2>
                            <p>
                                If you receive the wrong order, please contact
                                our customer support team through the app’s help
                                section. Provide details of the issue, and we
                                will resolve it as quickly as possible.
                            </p>
                        </div>
                        <div className="ques">
                            <h2> My order is late. What should I do?</h2>
                            <p>
                                If your order is running late, you can track its
                                status in the app. If you need further
                                assistance, contact our customer support team
                                for an update.
                            </p>
                        </div>
                        <div className="ques">
                            <h2> How do I report a problem with my order?</h2>
                            <p>
                                To report a problem, go to the "Help" section in
                                the app and select "Report an Issue." Provide
                                details about the issue, and our support team
                                will assist you.
                            </p>
                        </div>
                        <div className="ques">
                            <h2>
                                {" "}
                                Can I save my favorite restaurants and orders?
                            </h2>
                            <p>
                                Yes, you can save your favorite restaurants and
                                past orders for quick and easy access. Simply
                                tap the heart icon next to the restaurant or
                                order.
                            </p>
                        </div>
                        <div className="ques">
                            <h2>How do I leave a review for a restaurant?</h2>
                            <p>
                                After your order is delivered, you will receive
                                a prompt to rate and review the restaurant. Your
                                feedback helps us improve our service and inform
                                other customers.
                            </p>
                        </div>
                        <div className="ques">
                            <h2>Do you offer catering services?</h2>
                            <p>
                                Some of our partner restaurants offer catering
                                services. You can find and book catering options
                                directly through the app under the "Catering"
                                section.
                            </p>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}
