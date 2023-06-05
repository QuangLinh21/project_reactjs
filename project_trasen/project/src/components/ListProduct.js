import React from 'react'
import ProductItem from './ProductItem'

function ListProduct() {
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
          <div className="box-title d-flex justify-content-between">
            <p>Bộ lọc sản phẩm</p>
            <div>
              <select name="" id="">
                <option value="">Thứ tự mặc định</option>
                <option value="">Giá thấp đến cao</option>
                <option value="">Giá cao đến thấp</option>
                <option value="">Xếp theo đánh giá</option>
                <option value="">Xếp theo độ phổ biến</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <div className="first-select">
                <p>Loại sản phẩm</p>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue=""
                    id="flexCheckIndeterminate1"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckIndeterminate1"
                  >
                    Trà xanh Thái Nguyên
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue=""
                    id="flexCheckIndeterminate2"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckIndeterminate2"
                  >
                    Trà Ôlong
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue=""
                    id="flexCheckIndeterminate3"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckIndeterminate3"
                  >
                    Trà Shan Tuyết
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue=""
                    id="flexCheckIndeterminate4"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckIndeterminate4"
                  >
                    Trà Sen
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue=""
                    id="flexCheckIndeterminate5"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckIndeterminate5"
                  >
                    Trà Lài
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue=""
                    id="flexCheckIndeterminate6"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckIndeterminate6"
                  >
                    Trà thảo dược
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue=""
                    id="flexCheckIndeterminate7"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckIndeterminate7"
                  >
                    Dụng cụ pha trà
                  </label>
                </div>
              </div>
              <div className="first-select mt-4">
                <div>
                  <label htmlFor="customRange1" className="form-label">
                    Giá thành
                  </label>
                  <input
                    type="range"
                    className="form-range"
                    id="customRange1"
                  />
                </div>
              </div>
              <div className="first-select mt-4">
                <p>Thương hiệu</p>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue=""
                    id="flexCheckIndeterminate8"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckIndeterminate8"
                  >
                    Trà Tân Cương Xanh
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue=""
                    id="flexCheckIndeterminate9"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckIndeterminate9"
                  >
                    Trà Sen Tây Hồ
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue=""
                    id="flexCheckIndeterminate0"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckIndeterminate0"
                  >
                    Trà Lộc Tân
                  </label>
                </div>
              </div>
            </div>
            <div className="col-md-9 ">
              <div className="box-products-item d-flex flex-wrap justify-content-around">
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
                  <div className="img-item text-center">
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
               <ProductItem/>
              </div>
              {/* ----------------pages------------------ */}
              <nav aria-label="Page page-item-pa navigation example ">
                <ul className="pagination d-flex justify-content-center mt-5">
                  <li className="page-item">
                    <a
                      className="page-link text-dark"
                      href="#"
                      aria-label="Previous"
                    >
                      <span aria-hidden="true">«</span>
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#" aria-label="Next">
                      <span aria-hidden="true">»</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</>

  )
}

export default ListProduct