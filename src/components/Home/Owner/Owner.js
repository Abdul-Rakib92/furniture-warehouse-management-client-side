import React from "react";
import owner from '../../../images/owner.jpg';
import './Owner.css';

const Owner = () => {
  return (
    <div>
      <div className="container">
        <h2 className="text-primary text-center mt-5 pt-5">Owner</h2>

        <div className="row">
          <div className="g-3 col-sm-12 col-lg-6">
            <img src={owner} alt="" />
          </div>

          <div className="g-3 col-sm-12 col-lg-6 mt-5">
            <div className="checkout-text">
              <h5>a few words about Owner</h5>
              <h1>Read My Story</h1>
              <p>
              Ahammed Furniture Warehouse’s huge new furniture store stands out from the rest of the Great Northern Mall, and as far as owner Ahammed Ali is concerned, that’s definitely a good thing.
              </p>
              <p>
              Ahammed opened the 88,000-square-foot store Friday morning in the former Macy’s location at the front of the mall, close to Route 31. The new store is 6,000 square feet larger than his family’s longtime store on South Salina Street in Syracuse, which Ahammed said makes this new one the largest furniture store in New York.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Owner;
