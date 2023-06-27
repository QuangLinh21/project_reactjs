import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
function InfoProduct({renderProduct,onclickAdd}) {
  const handleAdd =(product)=>{
    onclickAdd(product)
  }
  return (
    <div className="common-section">
        <div className="sp">
          <img src="./Pictures/chitietsanpham/background.jpg" style={{height:"70%", width:"100%"}} alt="" />
          <div className="link d-flex">
            <a href="index1.php">Trang chủ &nbsp;</a> <span>&gt;</span>
            <a href="chitietsp.php"> &nbsp;Chi tiết sản phẩm</a>
          </div>
          <div className="intro-product">
          <div className="container-fluid">
              <div className="row">
                <div className="col-md-6">
                  <section className="vertical-center slider">
                    <div>
                      <img src={renderProduct.img} width={'350px'} className='ms-3'/>
                    </div>
                    {/* <div>
                      <img src="./Pictures/san-pham/sanpham1.png" />
                    </div>
                    <div>
                      <img src="./Pictures/san-pham/sanpham1.png" />
                    </div> */}
                  </section>
                </div>
                <div className="col-md-4">
                  <h4>{renderProduct.name}</h4>
                  <div className="d-flex mb-2">
                    <h5 className="mt-2 me-3">
                    {renderProduct.price}<span>VND</span>
                    </h5>
                    <button className="btn btn-success p-2" onClick={()=>handleAdd(renderProduct)}>Thêm vào giỏ hàng</button>
                  </div>
                  <p>{renderProduct.description}</p>
                  <p />
                </div>
              </div>
              <div className="row">
                <div className="col-md-7 p-5">
                  <h5 className="ms-3 mb-3 ps-5" />
                  <p className="ms-3 ps-5">
                    <i className="fa-solid fa-droplet ms-3 me-3"> </i>Đổ vào ấm
                    từ 150 - 200 ml nước sôi nhiệt độ 85*C
                  </p>
                  <p className="ms-3 ps-5">
                    <i className="fa-solid fa-temperature-three-quarters ms-3 me-3" />
                    1 - 2 nắm trè từ 25 - 30g
                  </p>
                  <p className="ms-3 ps-5">
                    <i className="fa-solid fa-clock ms-3 me-3" />
                    Để ủ trà từ 4 - 6 phút
                  </p>
                </div>
                <div className="col-md-5" id="img-tra">
                  <img
                    src="./Pictures/chitietsanpham/phatra.jpg"
                    className=" pe-5"
                    alt="phatra"
                    style={{width:"450px"}}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default InfoProduct