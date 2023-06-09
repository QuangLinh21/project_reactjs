import React, { Component } from "react";
import ProductItem from "./ProductItem";
import FilterProduct1 from "./FilterProduct1";
import FilterKindProduct from "./FilterKindProduct";
import Pagination from "./Pagination";
import {connect} from 'react-redux';

 class ListProduct extends Component {
  render() {
    let {products} = this.props;
    console.log(this.props.products);
    var elementProduct = products.map((product,index)=>{
      return <ProductItem key={index} product={product}/>
    })
    return (
      <>
      <section id="banner">
        <img src="./Pictures/san-pham/banner.png" alt="" />
        <h3>SẢN PHẨM</h3>
      </section>
      <section id="list-product">
        <div className="products common-section">
          <div className="title mt-3">
            <p>
              <a href="index1.php">Trang chủ</a> &gt;{" "}
              <a href="list_products.php">Sản phẩm</a>
            </p>
            <h3>Sản phẩm</h3>
            <hr />
          </div>
          <div className="box-product">
            <div className="container-fluid">
              <FilterProduct1 />
              <div className="row">
                <div className="col-md-3">
                  <FilterKindProduct />
                </div>
                <div className="col-md-9 ">
                  <div className="box-products-item d-flex flex-wrap justify-content-around">
                    {elementProduct}
                    <ProductItem />
                  </div>
                  {/* ----------------pages------------------ */}
                  <nav aria-label="Page page-item-pa navigation example ">
                    <Pagination />
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
  }
}

const mapStateToProps = (state) =>{
  return {
    products:state.products
  }
}

export default connect(mapStateToProps,null) (ListProduct);