import React from "react";
import "./categories.scss";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <img
            src="https://res.cloudinary.com/dlmgs0z2s/image/upload/v1681216747/category-sale_suljcy.png"
            alt="Sale"
          />
          <Link className="link-2" to="/underconstruction">
            <button className="categories-btn"> Sale</button>
          </Link>
        </div>
        <div className="row">
          <img
            src="https://res.cloudinary.com/dlmgs0z2s/image/upload/v1681219442/category-skincare_jvlwi5.png"
            alt="Beauty"
          />
          <button className="categories-btn">
            <Link className="link-2" to="/products/1">
              Beauty
            </Link>
          </button>
        </div>
      </div>
      {/* </div> */}
      <div className="col">
        <div className="row" id="fashion">
          <img
            src="https://res.cloudinary.com/dlmgs0z2s/image/upload/v1681932506/margiela_uhylsy.jpg"
            alt="Fashion"
          />

          <button className="categories-btn">
            {" "}
            <Link className="link-2" to="/products/2">
              Fashion{" "}
            </Link>
          </button>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
              <img
                src="https://res.cloudinary.com/dlmgs0z2s/image/upload/v1681221133/category-supplements_qvgc4r.png"
                alt=""
              />
              <button className="categories-btn">
                <Link className="link-2" to="/underconstruction">
                  Supplements
                </Link>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <img
                src="https://res.cloudinary.com/dlmgs0z2s/image/upload/v1681223160/category-aromatherapy_i5ylrx.png"
                alt=""
              />
              <Link className="link-2" to="/underconstruction">
                <button className="categories-btn">Aromatherapy</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="row" id="yoga">
          <img
            src="https://res.cloudinary.com/dlmgs0z2s/image/upload/v1681224387/category-yoga-accessories_imimxf.png"
            alt=""
          />
          <button className="categories-btn">
            <Link className="link-2" to="/underconstruction">
              Yoga Accessories
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;
