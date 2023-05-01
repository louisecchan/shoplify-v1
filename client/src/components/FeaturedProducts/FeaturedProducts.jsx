import React from "react";
import Card from "../Card/Card";
import "./featuredProducts.scss";
import useFetch from "../../hooks/useFetch";

const FeaturedProducts = ({ type }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

  window.addEventListener("scroll", reveal);

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem sapiente
          officiis sint ipsam libero. Omnis, numquam excepturi porro nisi quae
          non eius culpa odio, doloremque laboriosam quisquam eligendi fugit
          inventore.
        </p>
      </div>
      <div className="bottom">
        {error ? (
          <span className="errMessage">Something went wrong!</span>
        ) : loading ? (
          <div class="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        ) : (
          data?.map((item) => (
            <div className="card-container">
              <Card item={item} key={item.id} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default FeaturedProducts;
