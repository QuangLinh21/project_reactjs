import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (
      <div>
        <>
  <section id="banner-section">
    <div className="banner-img">
      <img
        src="./Pictures/trang-chu/banner.png"
        alt=""
        style={{ width: "100%" }}
        srcSet=""
      />
      <div className="box-content">
        <div className="box-content-header">
          <h3>TRÀ ƯỚP SEN TÂY HỒ</h3>
        </div>
        <div className="box-content-main">
          <p>
            Sự hòa quyện tuyệt vời giữa hương thơm man mát <br /> của sen Bách
            Diệp Hồ Tây và vị đậm đà của trà Tân Cương
          </p>
        </div>
        <div className="box-button">
          <button>THỬ NGAY</button>
        </div>
      </div>
    </div>
  </section>
  {/* --------------------end banner-------------------------*/}
  {/* --------------------product-------------------------*/}
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
  <section className="intro">
    <img src="./Pictures/trang-chu/background2.png" alt="" />
    <div className="box-intro">
      <img src="./Pictures/trang-chu/product-sen.png" alt="" />
      <h3 className="text-center">GIỚI THIỆU</h3>
      <div className="box-intro-content">
        <p>
          Trà ướp sen Bích Diệp - Tinh hoa văn hóa Hà Thành là sự hòa quyện
          tuyệt vời giữa hương thơm man mát của bông sen Bách Diệp Hồ Tây vị đậm
          đà của trà Tân Cương Thái Nguyên. Qua đôi bàn tay tài hoa và bí quyết
          bí mật của truyền nhiều đời của người thợ trà Thăng Long, tạo ra thức
          quà tinh túy kết tinh văn hóa ngàn năm Thăng Long - Hà Nội
        </p>
        <button>ĐỌC THÊM</button>
      </div>
    </div>
  </section>
  <section id="people">
    <div className="box-people">
      <h3 className="text-center ">NGHỆ NHÂN TRÀ ĐẠO</h3>
      <div className="box-img">
        <img src="./Pictures/trang-chu/TRANGCHU.jpg" alt="" />
      </div>
      <div className="container mt-5">
        <div className="row common-section d-flex justify-content-center">
          <div className="col-md-2 ">
            <div className="box-people">
              <img src="./Pictures/trang-chu/professional-tea-1.png" alt="" />
              <div className="box-people-title text-center">
                <p>Nn. Nguyễn Cao Sơn</p>
                <p>
                  Nguyễn Cao Dơn được chọn làm đại diện quảng bá văn hóa trà
                  Việt tại ngôi nhà di sản Mã Mây, Hà Nội
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-2 ">
            <div className="box-people text-center">
              <img src="./Pictures/trang-chu/professional-tea-2.png" alt="" />
              <p>Nn. Hướng Anh Sướng</p>
              <p>
                Truyền nhân đời thứ 6 của dòng trà Trường Xuân, Hà Nội. Chia sẻ
                về nghệ thuật trà đạo, lĩnh vực mà anh dành hơn nửa cuộ đời để
                nghiên cứu một cách đam mê
              </p>
            </div>
          </div>
          <div className="col-md-2 ">
            <div className="box-people text-center">
              <img src="./Pictures/trang-chu/professional-tea-3.png" alt="" />
              <p>Nn. Nguyễn Thị Dần</p>
              <p>
                Vẫn tự tay chọn hoa, tách gạo, thực hiện từng công đoạn ướp trà
                sen. Cũng như chính bởi nghiện trà, bởi yêu nghề nên cô thiwwus
                nữ Hà Thành năm xưa vẫn say hương vị trà sen{" "}
              </p>
            </div>
          </div>
          <div className="col-md-2 ">
            <div className="box-people text-center">
              <img src="./Pictures/trang-chu/professional-tea-4.png" alt="" />
              <p>Nn. Nguyễn Hoài Linh</p>
              <p>
                Vô địch toàn thế giới cuộc thi Tea Master Cup International 2018
                về pha trà được tổ chức tại Huế
              </p>
            </div>
          </div>
          <div className="col-md-2 ">
            <div className="box-people text-center">
              <img src="./Pictures/trang-chu/professional-tea-5.png" alt="" />
              <p>Nn. Viên Trần</p>
              <p>
                Sinh ra và lớn lên trong một gia đình quý tộc phong kiến, trong
                một ngôi trường mà việc uống trà và trà cực ngon, thượng hạng là
                điều không bao giờ thiếu trong nhà
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="box-img-2">
        <img src="./Pictures/trang-chu/thia.jpg" alt="" />
        <img src="./Pictures/trang-chu/product-la.png" alt="" />
      </div>
    </div>
  </section>
  <section id="buy-product" className="mb-3">
    <h3 className="text-center">MUA NGAY</h3>
    <div className="container">
      <div className="row">
        <div className="col-md-12 d-flex justify-content-center">
          <input type="email" name="" id="" />
          <button>Gửi</button>
        </div>
      </div>
    </div>
  </section>
</>

      </div>
    )
  }
}
