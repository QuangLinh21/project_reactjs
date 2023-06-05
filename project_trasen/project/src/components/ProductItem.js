import React, { Component } from 'react'

export default class ProductItem extends Component {
  render() {
    return (
        <div className="product-item">
        <div className="item-title d-flex justify-content-between">
          <div className="box-star">
            <i className="fa-solid fa-star" />
            <i className="fa-solid fa-star" />
            <i className="fa-solid fa-star" />
            <i className="fa-solid fa-star" />
            <i className="fa-solid fa-star" />
          </div>
          <p>NEW</p>
        </div>
        <div className="img-item">
          <img src="./Pictures/chitietsanpham/img-1.jpg" alt="" />
        </div>
        <p className="text-center">Trà Ô long</p>
        <div className="intro-item d-flex justify-content-between flex-wrap">
          <p>
            <b>50,000</b>VND
          </p>
          <select name="" id="">
            <option value="">200g</option>
            <option value="">500g</option>
            <option value="">1kg</option>
          </select>
        </div>
      </div>
    )
  }
}
