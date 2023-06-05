import React from 'react'

function NewProduct() {
  return (
    <section id="product">
  <div className="product-header common-header">
    <h2 className="text-center mb-5">SẢN PHẨM NỔI BẬT</h2>
    <img src="./Pictures/trang-chu/product-la.png" className="la" alt="" />
    <div className="container ">
      <div className="row common-section item">
        <div className="col-6 col-md-3 text-center">
          <div className="box-item">
            <img src="./Pictures/trang-chu/product-1.png" alt="" />
          </div>
          <div className="box-title mt-5">TRÀ ƯỚP HỒNG SEN</div>
        </div>
        <div className="col-6 col-md-3 text-center">
          <div className="box-item">
            <img src="./Pictures/trang-chu/product-2.png" alt="" />
          </div>
          <div className="box-title  mt-5">TRÀ ƯỚP NHỊ SEN</div>
        </div>
        <div className="col-6 col-md-3 text-center">
          <div className="box-item">
            <img src="./Pictures/trang-chu/product-3.png" alt="" />
          </div>
          <div className="box-title mt-5">TRÀ ƯỚP TRÀ SAN TUYẾT</div>
        </div>
        <div className="col-6 col-md-3 text-center">
          <div className="box-item">
            <img src="./Pictures/trang-chu/product-4.png" alt="" />
          </div>
          <div className="box-title mt-5">TRÀ ƯỚP Ô LONG</div>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default NewProduct