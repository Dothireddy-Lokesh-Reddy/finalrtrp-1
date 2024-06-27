import React, { Component } from "react";
import Nav from "../Navbar/Nav";
import "./Contact.css";
import Footer from "../Footer/Footer";
import { v4 } from "uuid";
import { myContext } from "../../App";
export default class Contact extends Component {
    state = { fname: "", lname: "", email: "", discription: "" };
    onChangeFname = (event) => {
        this.setState({ fname: event.target.value });
    };
    onChangelname = (event) => {
        this.setState({ lname: event.target.value });
    };
    onChangeEmail = (event) => {
        this.setState({ email: event.target.value });
    };
    onChangeDesc = (event) => {
        this.setState({ discription: event.target.value });
    };
    onContactDetailSubmit = (addContactItem) => {
        let obj = {
            id: v4(),
            fname: this.state.fname,
            lname: this.state.lname,
            email: this.state.email,
            discription: this.state.discription,
        };
        this.setState({ fname: "", lname: "", email: "", discription: "" });
        addContactItem(obj);
    };
    render() {
        return (
            <myContext.Consumer>
                {(values) => {
                    const {
                        isdarkMode,
                        changeMode,
                        contactsIssuesItems,
                        addContactItem,
                    } = values;
                    return (
                        <>
                            <Nav />
                            <div className="contact-section">
                                <div className="contact-img-sec">
                                    <img
                                        src="https://t3.ftcdn.net/jpg/06/99/44/68/360_F_699446849_Ey2Fbed82Bvlou6j7AoeJ5naalij9yX2.jpg"
                                        alt=""
                                        className="contact-women-img"
                                    />
                                </div>
                                <form
                                    className="contact-form"
                                    onSubmit={(e) => {
                                        e.preventDefault();
                                        this.onContactDetailSubmit(
                                            addContactItem
                                        );
                                    }}
                                >
                                    <center><h1>Contact Us</h1></center> 
                                    <div className="input-fields">
                                        <label htmlFor="fname">
                                            First Name
                                        </label>
                                        <input
                                            type="text"
                                            id="fname"
                                            placeholder="Enter Your First Name"
                                            value={this.state.fname}
                                            onChange={this.onChangeFname}
                                            required
                                        />
                                    </div>
                                    <div className="input-fields">
                                        <label htmlFor="lname">Last Name</label>
                                        <input
                                            type="text"
                                            id="lname"
                                            placeholder="Enter Your Last Name"
                                            value={this.state.lname}
                                            onChange={this.onChangelname}
                                            required
                                        />
                                    </div>
                                    <div className="input-fields">
                                        <label htmlFor="email">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            placeholder="Enter Your Email Id"
                                            onChange={this.onChangeEmail}
                                            value={this.state.email}
                                            required
                                        />
                                    </div>
                                    <div className="input-fields">
                                        <label htmlFor="dis">Discription</label>
                                        <textarea
                                            placeholder="Enter your problem here..."
                                            value={this.state.discription}
                                            onChange={this.onChangeDesc}
                                            required
                                        ></textarea>
                                    </div>
                                    <button
                                        className="logout-btn"
                                        style={{ marginTop: "10px" }}
                                    >
                                        Submit
                                    </button>
                                </form>
                                {contactsIssuesItems.length != 0 && (
                                    <div className="issuesList">
                                        <h1 className="issueItemHeading">
                                            Issues List
                                        </h1>
                                        {contactsIssuesItems.map((obj) => {
                                            const {
                                                id,
                                                fname,
                                                lname,
                                                email,
                                                discription,
                                            } = obj;
                                            return (
                                                <div
                                                    className="issueItem"
                                                    key={id}
                                                >
                                                    <div className="issue-top-sec">
                                                        <div className="card-circle">
                                                            {lname[0].toUpperCase()}
                                                        </div>
                                                        <h1 className="fnameheading">
                                                            {fname}
                                                        </h1>
                                                    </div>
                                                    <div>
                                                        <p>
                                                            <p className="dis-para">
                                                                <span className="Discription">
                                                                    Discription
                                                                    :
                                                                </span>
                                                                {discription}
                                                            </p>
                                                        </p>
                                                    </div>
                                                    <p className="status">
                                                        {" "}
                                                        <span className="Discription">
                                                            Status :
                                                        </span>{" "}
                                                        Pending
                                                    </p>
                                                </div>
                                            );
                                        })}
                                    </div>
                                )}
                            </div>
                            <Footer />
                        </>
                    );
                }}
            </myContext.Consumer>
        );
    }
}
