import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { listProducts } from "./actions/productsAction";
const Card = () => {
  const productList = useSelector(state => state.product_list)
  const { loading, products, error } = productList
  const dispatch = useDispatch()
  useEffect(() => {

    dispatch(listProducts())
  }, [])


  return (
    loading ? <div>Loading...</div> :
      error ? <div>{error}</div> :
        <section className="my-albums">
          <div className="container">
            <div className="heading text-center">
              <h3>NEW ARRIVALS</h3>
            </div>
            <div className="row" id="new_arivals">
              {products.map((product,key) => {
                return (
                  <div
                    className="col-lg-4 col-md-4 col-sm-6 col-12 album-box"
                    id="HuaweiNova3"
                    key={key}
                  >
                    <div className="main_card">
                      <div className="card">
                        <img src={product.img} alt="" />
                        <div className="card-text">
                          <h4>{product.name}</h4>
                          <Link
                            to={"/products/" + product.id}
                            className="btn btn-outline-secondary"
                          >
                            Shop Now
                          </Link>
                        </div>
                      </div>
                      <div className="detail text-center">
                        <h5>{product.name}</h5>
                        <p>{product.desc}</p>
                        <p className="price">RS {product.price}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
  );
};

export default Card;
