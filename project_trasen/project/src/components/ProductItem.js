import React, { useEffect,useState } from "react";


function ProductItem({renderProduct,onclickpro,}) {
  const showRatings=(rating) =>{
    var result = [];
    for (var i = 1; i <= rating; i++) {
      result.push(<i key={i} className="fa-solid fa-star star" />);
    }
    for (var j = 1; j <= 5 - rating; j++) {
      result.push(<i key={j+i} class="fa-regular fa-star"></i>);
    }
    return result;
  }
  console.log("product-name",renderProduct);
  const handleClick=(product)=>{
    onclickpro(product)
  }
  
  return (
    <a className="product-item"  onClick={()=>handleClick(renderProduct)}>
    <div className="item-title d-flex justify-content-between">
      <div className="box-star">
        <ul className="d-flex justifyContent: bettween">
          <li>{showRatings(renderProduct.rating)}</li>
          
        </ul>
      </div>
      <p>NEW</p>
    </div>
    <div className="img-item text-center">
      {/* <img src="./Pictures/chitietsanpham/img-1.jpg" alt="" /> */}

      <img width={"150px"} src={renderProduct.img} alt="img" />
    </div>
    <p className="text-center">{renderProduct.name}</p>
    <div className="intro-item d-flex justify-content-between flex-wrap">
      <p>
        <b>{renderProduct.price}</b>VND
      </p>
      <select name="" id="">
        <option value="">200g</option>
        <option value="">500g</option>
        <option value="">1kg</option>
      </select>
    </div>
  </a>
  )
}

export default ProductItem