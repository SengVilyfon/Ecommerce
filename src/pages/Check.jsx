import React from 'react'

function checkout() {
  return (
    <div>
      <>
  <title>Vegefoods - Free Bootstrap 4 Template by Colorlib</title>
  <meta charSet="utf-8" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1, shrink-to-fit=no"
  />
  <link
    href="https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700,800&display=swap"
    rel="stylesheet"
  />
  <link
    href="https://fonts.googleapis.com/css?family=Lora:400,400i,700,700i&display=swap"
    rel="stylesheet"
  />
  <link
    href="https://fonts.googleapis.com/css?family=Amatic+SC:400,700&display=swap"
    rel="stylesheet"
  />
  <link rel="stylesheet" href="./assets/css/open-iconic-bootstrap.min.css" />
  <link rel="stylesheet" href="./assets/css/animate.css" />
  <link rel="stylesheet" href="./assets/css/owl.carousel.min.css" />
  <link rel="stylesheet" href="./assets/css/owl.theme.default.min.css" />
  <link rel="stylesheet" href="./assets/css/magnific-popup.css" />
  <link rel="stylesheet" href="./assets/css/aos.css" />
  <link rel="stylesheet" href="./assets/css/ionicons.min.css" />
  <link rel="stylesheet" href="./assets/css/bootstrap-datepicker.css" />
  <link rel="stylesheet" href="./assets/css/jquery.timepicker.css" />
  <link rel="stylesheet" href="./assets/css/flaticon.css" />
  <link rel="stylesheet" href="./assets/css/icomoon.css" />
  <link rel="stylesheet" href="./assets/css/style.css" />
  <div className="py-1 bg-primary">
    <div className="container">
      <div className="row no-gutters d-flex align-items-start align-items-center px-md-0">
        <div className="col-lg-12 d-block">
          <div className="row d-flex">
            <div className="col-md pr-4 d-flex topper align-items-center">
              <div className="icon mr-2 d-flex justify-content-center align-items-center">
                <span className="icon-phone2" />
              </div>
              <span className="text">+ 1235 2355 98</span>
            </div>
            <div className="col-md pr-4 d-flex topper align-items-center">
              <div className="icon mr-2 d-flex justify-content-center align-items-center">
                <span className="icon-paper-plane" />
              </div>
              <span className="text">youremail@email.com</span>
            </div>
            <div className="col-md-5 pr-4 d-flex topper align-items-center text-lg-right">
              <span className="text">
                3-5 Business days delivery &amp; Free Returns
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <nav
    className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
    id="ftco-navbar"
  >
    <div className="container">
      <a className="navbar-brand" href="index.html">
        Vegefoods
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#ftco-nav"
        aria-controls="ftco-nav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="oi oi-menu" /> Menu
      </button>
      <div className="collapse navbar-collapse" id="ftco-nav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a href="index.html" className="nav-link">
              Home
            </a>
          </li>
          <li className="nav-item active dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="dropdown04"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Shop
            </a>
            <div className="dropdown-menu" aria-labelledby="dropdown04">
              <a className="dropdown-item" href="shop.html">
                Shop
              </a>
              <a className="dropdown-item" href="wishlist.html">
                Wishlist
              </a>
              <a className="dropdown-item" href="product-single.html">
                Single Product
              </a>
              <a className="dropdown-item" href="cart.html">
                Cart
              </a>
              <a className="dropdown-item" href="checkout.html">
                Checkout
              </a>
            </div>
          </li>
          <li className="nav-item">
            <a href="about.html" className="nav-link">
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="blog.html" className="nav-link">
              Blog
            </a>
          </li>
          <li className="nav-item">
            <a href="contact.html" className="nav-link">
              Contact
            </a>
          </li>
          <li className="nav-item cta cta-colored">
            <a href="cart.html" className="nav-link">
              <span className="icon-shopping_cart" />
              [0]
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  {/* END nav */}
  <div
    className="hero-wrap hero-bread"
    style={{ backgroundImage: 'url("text/images/bg_1.jpg")' }}
  >
    <div className="container">
      <div className="row no-gutters slider-text align-items-center justify-content-center">
        <div className="col-md-9 ftco-animate text-center">
          <p className="breadcrumbs">
            <span className="mr-2">
              <a href="index.html">Home</a>
            </span>{" "}
            <span>Checkout</span>
          </p>
          <h1 className="mb-0 bread">Checkout</h1>
        </div>
      </div>
    </div>
  </div>
  <section className="ftco-section">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xl-7 ftco-animate">
          <form action="#" className="billing-form">
            <h3 className="mb-4 billing-heading">Billing Details</h3>
            <div className="row align-items-end">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="firstname">Firt Name</label>
                  <input type="text" className="form-control" placeholder="" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="lastname">Last Name</label>
                  <input type="text" className="form-control" placeholder="" />
                </div>
              </div>
              <div className="w-100" />
              <div className="col-md-12">
                <div className="form-group">
                  <label htmlFor="country">State / Country</label>
                  <div className="select-wrap">
                    <div className="icon">
                      <span className="ion-ios-arrow-down" />
                    </div>
                    <select name="" id="" className="form-control">
                      <option value="">France</option>
                      <option value="">Italy</option>
                      <option value="">Philippines</option>
                      <option value="">South Korea</option>
                      <option value="">Hongkong</option>
                      <option value="">Japan</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="w-100" />
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="streetaddress">Street Address</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="House number and street name"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Appartment, suite, unit etc: (optional)"
                  />
                </div>
              </div>
              <div className="w-100" />
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="towncity">Town / City</label>
                  <input type="text" className="form-control" placeholder="" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="postcodezip">Postcode / ZIP *</label>
                  <input type="text" className="form-control" placeholder="" />
                </div>
              </div>
              <div className="w-100" />
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input type="text" className="form-control" placeholder="" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="emailaddress">Email Address</label>
                  <input type="text" className="form-control" placeholder="" />
                </div>
              </div>
              <div className="w-100" />
              <div className="col-md-12">
                <div className="form-group mt-4">
                  <div className="radio">
                    <label className="mr-3">
                      <input type="radio" name="optradio" /> Create an Account?{" "}
                    </label>
                    <label>
                      <input type="radio" name="optradio" /> Ship to different
                      address
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </form>
          {/* END */}
        </div>
        <div className="col-xl-5">
          <div className="row mt-5 pt-3">
            <div className="col-md-12 d-flex mb-5">
              <div className="cart-detail cart-total p-3 p-md-4">
                <h3 className="billing-heading mb-4">Cart Total</h3>
                <p className="d-flex">
                  <span>Subtotal</span>
                  <span>$20.60</span>
                </p>
                <p className="d-flex">
                  <span>Delivery</span>
                  <span>$0.00</span>
                </p>
                <p className="d-flex">
                  <span>Discount</span>
                  <span>$3.00</span>
                </p>
                <hr />
                <p className="d-flex total-price">
                  <span>Total</span>
                  <span>$17.60</span>
                </p>
              </div>
            </div>
            <div className="col-md-12">
              <div className="cart-detail p-3 p-md-4">
                <h3 className="billing-heading mb-4">Payment Method</h3>
                <div className="form-group">
                  <div className="col-md-12">
                    <div className="radio">
                      <label>
                        <input type="radio" name="optradio" className="mr-2" />{" "}
                        Direct Bank Tranfer
                      </label>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-md-12">
                    <div className="radio">
                      <label>
                        <input type="radio" name="optradio" className="mr-2" />{" "}
                        Check Payment
                      </label>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-md-12">
                    <div className="radio">
                      <label>
                        <input type="radio" name="optradio" className="mr-2" />{" "}
                        Paypal
                      </label>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-md-12">
                    <div className="checkbox">
                      <label>
                        <input
                          type="checkbox"
                          defaultValue=""
                          className="mr-2"
                        />{" "}
                        I have read and accept the terms and conditions
                      </label>
                    </div>
                  </div>
                </div>
                <p>
                  <a href="#" className="btn btn-primary py-3 px-4">
                    Place an order
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>{" "}
        {/* .col-md-8 */}
      </div>
    </div>
  </section>{" "}
  {/* .section */}
  <section className="ftco-section ftco-no-pt ftco-no-pb py-5 bg-light">
    <div className="container py-4">
      <div className="row d-flex justify-content-center py-5">
        <div className="col-md-6">
          <h2 style={{ fontSize: 22 }} className="mb-0">
            Subcribe to our Newsletter
          </h2>
          <span>
            Get e-mail updates about our latest shops and special offers
          </span>
        </div>
        <div className="col-md-6 d-flex align-items-center">
          <form action="#" className="subscribe-form">
            <div className="form-group d-flex">
              <input
                type="text"
                className="form-control"
                placeholder="Enter email address"
              />
              <input
                type="submit"
                defaultValue="Subscribe"
                className="submit px-3"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  <footer className="ftco-footer ftco-section">
    <div className="container">
      <div className="row">
        <div className="mouse">
          <a href="#" className="mouse-icon">
            <div className="mouse-wheel">
              <span className="ion-ios-arrow-up" />
            </div>
          </a>
        </div>
      </div>
      <div className="row mb-5">
        <div className="col-md">
          <div className="ftco-footer-widget mb-4">
            <h2 className="ftco-heading-2">Vegefoods</h2>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia.
            </p>
            <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
              <li className="ftco-animate">
                <a href="#">
                  <span className="icon-twitter" />
                </a>
              </li>
              <li className="ftco-animate">
                <a href="#">
                  <span className="icon-facebook" />
                </a>
              </li>
              <li className="ftco-animate">
                <a href="#">
                  <span className="icon-instagram" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md">
          <div className="ftco-footer-widget mb-4 ml-md-5">
            <h2 className="ftco-heading-2">Menu</h2>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="py-2 d-block">
                  Shop
                </a>
              </li>
              <li>
                <a href="#" className="py-2 d-block">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="py-2 d-block">
                  Journal
                </a>
              </li>
              <li>
                <a href="#" className="py-2 d-block">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-4">
          <div className="ftco-footer-widget mb-4">
            <h2 className="ftco-heading-2">Help</h2>
            <div className="d-flex">
              <ul className="list-unstyled mr-l-5 pr-l-3 mr-4">
                <li>
                  <a href="#" className="py-2 d-block">
                    Shipping Information
                  </a>
                </li>
                <li>
                  <a href="#" className="py-2 d-block">
                    Returns &amp; Exchange
                  </a>
                </li>
                <li>
                  <a href="#" className="py-2 d-block">
                    Terms &amp; Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="py-2 d-block">
                    Privacy Policy
                  </a>
                </li>
              </ul>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="py-2 d-block">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="py-2 d-block">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md">
          <div className="ftco-footer-widget mb-4">
            <h2 className="ftco-heading-2">Have a Questions?</h2>
            <div className="block-23 mb-3">
              <ul>
                <li>
                  <span className="icon icon-map-marker" />
                  <span className="text">
                    203 Fake St. Mountain View, San Francisco, California, USA
                  </span>
                </li>
                <li>
                  <a href="#">
                    <span className="icon icon-phone" />
                    <span className="text">+2 392 3929 210</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="icon icon-envelope" />
                    <span className="text">info@yourdomain.com</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 text-center">
          <p>
            {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
            Copyright © All rights reserved | This template is made with{" "}
            <i className="icon-heart color-danger" aria-hidden="true" /> by{" "}
            <a href="https://colorlib.com" target="_blank">
              Colorlib
            </a>
            {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
          </p>
        </div>
      </div>
    </div>
  </footer>
  {/* loader */}
  <div id="ftco-loader" className="show fullscreen">
    <svg className="circular" width="48px" height="48px">
      <circle
        className="path-bg"
        cx={24}
        cy={24}
        r={22}
        fill="none"
        strokeWidth={4}
        stroke="#eeeeee"
      />
      <circle
        className="path"
        cx={24}
        cy={24}
        r={22}
        fill="none"
        strokeWidth={4}
        strokeMiterlimit={10}
        stroke="#F96D00"
      />
    </svg>
  </div>
</>

    </div>
  )
}

export default checkout
