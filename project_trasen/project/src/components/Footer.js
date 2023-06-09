import React, { Component } from "react";

 class Footer extends Component {
  render() {
    return (
      <section id="footer" className="ft">
        <div className="container-fluid">
          <div className="row common-section d-flex justify-content-center p-4">
            <div className="col-md-4 d-flex justify-content-center">
              <div>
                <h4>
                  <img src="./Pictures/trang-chu/logophongtra.png" alt="" />
                </h4>
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa-solid fa-phone-volume" />: 0999999999
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-solid fa-envelope" />:
                      trasenbichdiep@gmail.com
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-solid fa-house" />: Số 12, Tây Hồ Hà Nội
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4 mt-4 d-flex justify-content-center">
              <div>
                <h4>VỀ CHÚNG TÔI</h4>
                <ul>
                  <li>
                    <a href="#">Giới thiệu</a>
                  </li>
                  <li>
                    <a href="#">Sản phẩm</a>
                  </li>
                  <li>
                    <a href="#">Tin tức</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4 mt-4 d-flex justify-content-center">
              <div>
                <h4>LIÊN HỆ</h4>
                <ul>
                  <li>
                    <a href="#"></a>
                    <ul className="d-flex ">
                      <a href="#"></a>
                      <li className="me-2">
                        <a href="#" />
                        <a href="#">
                          <i className="fa-brands fa-youtube" />
                        </a>
                      </li>
                      <li className="me-2">
                        <a href="#">
                          <i className="fa-brands fa-instagram" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-brands fa-facebook" />
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Nguyễn Quang Linh</a>
                  </li>
                  <li>
                    <a href="#">Mỹ Hào - Hưng Yên</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-img">
          <img src="./Pictures/trang-chu/fotter-tea.png" alt="" />
        </div>
      </section>
    );
  }
}
export default Footer