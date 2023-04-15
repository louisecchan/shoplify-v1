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
            alt=""
          />
          <button>
            <Link className="link" to="/products/1">
              Sale
            </Link>
          </button>
        </div>
        <div className="row">
          <img
            src="https://res.cloudinary.com/dlmgs0z2s/image/upload/v1681219442/category-skincare_jvlwi5.png"
            alt=""
          />
          <button>
            <Link className="link" to="/products/1">
              Beauty
            </Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
          <img
            src="https://res.cloudinary.com/dlmgs0z2s/image/upload/v1681220158/category-fashion_vojvfg.png"
            alt=""
          />
          <button>
            <Link className="link" to="/products/1">
              Fashion
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
              <button>
                <Link className="link" to="/products/1">
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
              <button>
                <Link className="link" to="/products/1">
                  Aromatherapy
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <img
            src="https://res.cloudinary.com/dlmgs0z2s/image/upload/v1681224387/category-yoga-accessories_imimxf.png"
            alt=""
          />
          <button>
            <Link className="link" to="/products/1">
              Yoga Accessories
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;
