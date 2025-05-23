import React from "react";
import { NavLink } from "react-router-dom";
import '../styles/home.css'

export default function Home({ products }) {


  const categories = [
    { name: "Electronics", image: "https://t4.ftcdn.net/jpg/03/64/41/07/360_F_364410756_Ev3WoDfNyxO9c9n4tYIsU5YBQWAP3UF8.jpg" },
    { name: "Fashion", image: "https://www.cato.org/sites/cato.org/files/styles/aside_3x/public/2023-11/fast-fashion2.jpeg?itok=72ek8bxI" },
    { name: "Home Decor", image: "https://static01.nyt.com/images/2021/02/28/realestate/26diyextra-slide-EVOY/26diyextra-slide-EVOY-articleLarge.jpg?quality=75&auto=webp&disable=upscale" },
  ];

  const object = {
    image: "https://asia.dynabook.com/assets_new/images/Dynabook-animation-X40-K.gif",
    title: "Electronics Collection"
  };

  return (
    <div className="container">
      <img src={object.image} className="home-bg" alt="background" />
      <section className="section-home flex-row center">
        <div className="home-left flex-col">
          <span className="home-title">{object.title}</span>
          <h1 className="flex-row center">All Products are in <br />
            Best Quality & Best Price</h1>
          <p>Let's Enjoy With Ejoyr</p>
          <div className="flex-row social-media center">
            <a href="https://www.facebook.com/profile.php?id=61574006632071" className="fa-brands fa-facebook"> </a>
            <a href="https://www.instagram.com/teamejoyr/" className="fa-brands fa-instagram"> </a>
            <a href="https://t.me/teamejoyr" className="fa-brands fa-telegram"> </a>
            <a href="https://x.com/TeamEjoyr" className='fa-brands fa-x-twitter'> </a>
          </div>
        </div>
        <div className="home-right">
          <img src={object.image} id="right-image" className="home-right-image" alt="Product Display" />
        </div>
      </section>
      <section className="categories-section">
        <h2 className="categories-title">Explore Categories</h2>
        <div className="categories-container">
          {categories.map((category, index) => (
            <div className="category-card" key={index}>
              <img src={category.image} alt={category.name} className="category-image" />
              <div className="category-overlay">
                <span className="category-name">{category.name}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="fet-best-products">
        <h2>Featured Products</h2>
        <div className="fet-product-container">
          { products.length > 0 ? products.map((product) => (
            <div key={product.id} className="fet-product-card">
              <img src={product.images[0]} alt={product.title} className="fet-product-image" />
              <div className="fet-product-info">
                <h3>{product.title}</h3>
                <p>{product.description.slice(0, 50)}...</p>
                <span className="fet-price">₹{parseInt(product.price * (1 - (product.discount || 0) / 100))}</span>
              </div>
              <NavLink to={`/products/${product.id}`} state={{ product }} className="fet-buy-now">Buy Now</NavLink>
            </div>
          )): <div className="loader-container">
            <span class="loader"></span>
          </div>
        }
        </div>
      </section>
    </div>
  );
};