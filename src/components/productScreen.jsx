import { React, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetail } from "./actions/productsAction";
import data from "./state/data";
const ProductScr = (props) => {
  const [qty, setQty] = useState(1)
  const productDetails = useSelector(state => state.productDetails)
  const { loading, productDetail, error } = productDetails
const productId = props.match.params.id

  // get product data from redux
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getProductDetail(productId))
  }, [])

// go to cart component
const handleCart = () =>{
  props.history.push(`/Cart${productId}?qty=${qty}`)
}

  return (
    loading ? <div>loading</div> :
      error ? <div>{error}</div> :
      productDetail.map((product, key) => {
          return (
            <div className="details row" key={key}>
              <div className="mobile col-lg-4 col-12">
                <div className="img">
                  <img src={product.img} alt="*" />
                </div>

                <div className="little_imgs">
                  {/* {product.relatedImg.map((v) => {
                   return (
                     <div className="lite_img">
                       <img src={v} alt="" />
                     </div>
                   );
                 })} */}
                  <div className="lite_img">
                    <img src={product.img} alt="" />
                  </div>
                </div>

              </div>
              <div className="discription col-lg-8 col-12">
                <div className="title">
                  <p>{product.name}</p>
                  <h5>
                    For more details:
                    <a href="javascript:;" target="_blank">
                      VISIT
                    </a>
                  </h5>
                  <h4>QUICK DETAILS</h4>

                  <table className="quick_details">
                    <tr>
                      <td>DISPLAY</td>
                      <td>{product.desc}</td>
                    </tr>
                    <tr>
                      <td>CAMERA</td>
                      <td>{product.desc}</td>
                    </tr>

                    <tr>
                      <td>BATTERY</td>
                      <td>{product.desc}</td>
                    </tr>
                  </table>
                </div>
                <div className="take_order">
                  <table className="take_order">
                    <tr>
                      <td>Color</td>
                      <td>
                        {/* {product.color.map((v) => {
                        return (
                          <>
                            <input type="radio" name="color" id="" value={v} />
                            <span>{v}</span>
                          </>
                        );
                      })} */}
                      </td>
                    </tr>
                    <tr>
                      <td>STORAGE</td>
                      <td>
                        {/* {product.storage.map((v) => {
                        return (
                          <>
                            <input type="radio" name="storage" id="" value={v} />
                            <span>{v}GB</span>
                          </>
                        );
                      })} */}
                      </td>
                    </tr>

                    <tr>
                      <td>Quantity</td>
                      <td>
                        <input type="number" name="quantity" id="" onChange={e => setQty(e.target.value)} />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h3>{product.price}</h3>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <input
                          type="submit"
                          value="ADD To CARt"
                          className="btn btn-outline-success"
                          onClick={handleCart}
                        />
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          )
        })
  );
};

export default ProductScr;
