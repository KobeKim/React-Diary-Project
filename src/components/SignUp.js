import React, { Component } from "react";
import "../css/login.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import $ from "jquery";

class SignUp extends Component {
  componentDidMount() {
    $(".input100").each(function () {
      $(this).on("blur", function () {
        if ($(this).val().trim() != "") {
          $(this).addClass("has-val");
        } else {
          $(this).removeClass("has-val");
        }
      });
    });

    /*==================================================================
            [ Validate ]*/
    var input = $(".validate-input .input100");

    $(".validate-form").on("submit", function () {
      var check = true;

      for (var i = 0; i < input.length; i++) {
        if (validate(input[i]) == false) {
          showValidate(input[i]);
          check = false;
        }
      }

      return check;
    });

    $(".validate-form .input100").each(function () {
      $(this).focus(function () {
        hideValidate(this);
      });
    });

    function validate(input) {
      if (
        $(input).attr("type") == "email" ||
        $(input).attr("name") == "email"
      ) {
        if (
          $(input)
            .val()
            .trim()
            .match(
              /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/
            ) == null
        ) {
          return false;
        }
      } else {
        if ($(input).val().trim() == "") {
          return false;
        }
      }
    }

    function showValidate(input) {
      var thisAlert = $(input).parent();

      $(thisAlert).addClass("alert-validate");
    }

    function hideValidate(input) {
      var thisAlert = $(input).parent();

      $(thisAlert).removeClass("alert-validate");
    }
  }
  render() {
    return (
      <div class="limiter">
        <div class="container-login100">
          <div class="wrap-login100  p-b-20">
            <form className="login100-form validate-form" method="POST" action="/">
            <Link to="/" className="toMain">              
            <p className="loginTitle">Diary<span className="dot">.</span></p>
            </Link>
            
              <div
                className="wrap-input100 validate-input m-b-35"
                data-validate="Enter username"
              >
                <input className="input100" type="text" name="username " />
                <span
                  className="focus-input100"
                  data-placeholder="Username"
                ></span>
              </div>

              <div
                className="wrap-input100 validate-input m-b-35"
                data-validate="Enter password"
              >
                <input className="input100" type="password" name="pass" />
                <span
                  className="focus-input100"
                  data-placeholder="Password"
                ></span>
              </div>
              <div
                className="wrap-input100 validate-input m-b-35"
                data-validate="Enter NickName"
              >
                <input className="input100" type="text" name="nickname " />
                <span
                  className="focus-input100"
                  data-placeholder="NickName"
                ></span>
              </div>
              
              <div
                className="wrap-input100 validate-input m-b-35"
                data-validate="Enter PhoneNumber"
              >
                <input className="input100" type="text" name="phone " />
                <span
                  className="focus-input100"
                  data-placeholder="PhoneNumber"
                ></span>
              </div>
              <div className="loginContainer">
                <button className="loginBtn">Success</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default SignUp;
