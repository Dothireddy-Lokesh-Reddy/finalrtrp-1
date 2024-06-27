import "./Login.css";
import React, { Component } from "react";
import { myContext } from "../../App";
// import { Link } from "react-router-dom";
import { MdLightMode } from "react-icons/md";
import { FaGoogle } from "react-icons/fa";
import { ImFacebook2 } from "react-icons/im";
import { BsLinkedin } from "react-icons/bs";
import { SiGithub } from "react-icons/si";
import { de } from "date-fns/locale";

export default class Login extends Component {
    state = { userName: "", password: "", errorMsg: "" };
    onChangeUserName = (event) => {
        this.setState({ userName: event.target.value });
    };
    onChangeUserPassword = (event) => {
        this.setState({ password: event.target.value });
    };
    onLogin = (event) => {
        event.preventDefault();
        let str = localStorage.getItem("details");
        let details = JSON.parse(str);
        const { userName, password } = details;
        if (
            userName === this.state.userName &&
            password === this.state.password
        ) {
            const { history } = this.props;
            history.replace("/");
        } else {
            this.setState({ errorMsg: "Invalid Details Please Check again" });
        }
    };
    render() {
        return (
            <myContext.Consumer>
                {(values) => {
                    const { isdarkMode, changeMode } = values;
                    return (
                        <div
                            className={`login-container ${
                                isdarkMode ? "dark-bg" : ""
                            }`}
                        >
                            <div className="light-section">
                                <MdLightMode
                                    onClick={() => changeMode()}
                                    className={`light-icon ${
                                        isdarkMode ? "dark-heading" : ""
                                    }`}
                                />
                            </div>
                            <h1
                                className={`login-heading ${
                                    isdarkMode ? "dark-heading" : ""
                                }`}
                            >
                                Login Form
                            </h1>
                            <div
                                className={`inner-login-container ${
                                    isdarkMode ? "border-white" : ""
                                }`}
                            >
                                <div className="img-section">
                                    <img
                                        src="/images/redtom.jpg"
                                        alt=""
                                        className="login-img"
                                    />
                                </div>
                                <form
                                    className={`form-details ${
                                        isdarkMode ? "dark-bg" : ""
                                    }`}
                                    onSubmit={this.onLogin}
                                >
                                    <h1
                                        className={`main-logo-heading-login-pg ${
                                            isdarkMode ? "dark-heading" : ""
                                        }`}
                                    >
                                        Delish Dishes
                                    </h1>
                                    <img
                                        src="/images/fooddelicious.png"
                                        alt=""
                                        class="del-food"
                                    />
                                    <div className="input-fields">
                                        <label
                                            htmlFor="name"
                                            className={`${
                                                isdarkMode ? "text-white" : ""
                                            }`}
                                        >
                                            User Name
                                        </label>
                                        <input
                                            required
                                            onChange={this.onChangeUserName}
                                            type="text"
                                            id="name"
                                            placeholder="Enter your name..."
                                            className={`
												${isdarkMode ? "input-bg-black text-white" : ""}`}
                                        />
                                    </div>
                                    <div className="input-fields">
                                        <label
                                            htmlFor="name"
                                            className={`${
                                                isdarkMode ? "text-white" : ""
                                            }`}
                                        >
                                            Password
                                        </label>
                                        <input
                                            required
                                            onChange={this.onChangeUserPassword}
                                            type="password"
                                            id="name"
                                            placeholder="Enter Password..."
                                            className={`
												${isdarkMode ? "input-bg-black text-white" : ""}`}
                                        />
                                    </div>
                                    <div className="input-fields">
                                        <button
                                            className="login-btn"
                                            
                                        >
                                            Login
                                        </button>
                                        <p style={{ color: "red" }}>
                                            {this.state.errorMsg}
                                        </p>
                                    </div>
                                    <div
                                        className={`web-links ${
                                            isdarkMode ? "dark-heading" : ""
                                        }`}
                                    >
                                        <FaGoogle className="web-icon" />
                                        <ImFacebook2 className="web-icon" />
                                        <BsLinkedin className="web-icon" />
                                        <SiGithub className="web-icon" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    );
                }}
            </myContext.Consumer>
        );
    }
}
