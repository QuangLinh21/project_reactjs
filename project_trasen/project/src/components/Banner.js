import React from 'react'

function Banner() {
  return (
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

  )
}

export default Banner