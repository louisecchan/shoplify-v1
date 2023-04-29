import React from "react";

export const Hamburger = () => {
  return (
    <>
      <div className="hamburger">
        <div className="burger burger1"></div>
        <div className="burger burger2"></div>
      </div>

      <style jsx>
        {`
          @media screen and (max-width: 720px) {
            .hamburger {
              position: absolute;
              top: 40%;
              right: 13.5%;
              width: 2rem;
              height: 1.5rem;
              display: flex;
              justify-content: space-around;
              flex-flow: column nowrap;
              z-index: 10;
            }
            .burger {
              width: 2rem;
              height: 0.08rem;
              border-radius: 10px;
              background-color: black;
              transform-origin: 1px;
              transition: all 0.3s linear;
            }
          }
        `}
      </style>
    </>
  );
};
