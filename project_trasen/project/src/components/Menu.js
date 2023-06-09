import React from 'react'
import { Link } from 'react-router-dom'

function Menu() {
  return (
    <section id="menu-section">
  <div id="menu" className="common-section">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-5">
          <div className="logo">
            <img
              src="./Pictures/trang-chu/logophongtra.png"
              alt=""
              style={{ width: 185, height: 55 }}
              srcSet=""
            />
          </div>
        </div>
        <div className="col-md-7">
          <nav>
            <ul className="nav-parent">
            <li>
                <Link to={"/"}>TRANG CHỦ</Link>
              </li>
              <li>
                <Link to={"/introduce"}>GIỚI THIỆU</Link>
              </li>
              <li>
                <Link to={"/list-product"}>SẢN PHẨM</Link>
              </li>
              <li>
              <Link to={"/contact"}>LIÊN HỆ</Link>
              </li>
              <li>
              <Link to={"/cart"}><i class="fa-solid fa-cart-shopping"></i></Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default Menu