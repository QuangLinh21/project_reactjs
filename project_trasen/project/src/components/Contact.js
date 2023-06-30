import React from "react";

function Contact() {
  return (
      <section id="contact">
        <img src="./Pictures/lien-he/banner.jpg" width="100%" alt="" />
        <div className="box-contact">
          <h4 className="mb-3">LIÊN HỆ VỚI CHÚNG TÔI</h4>
          <form action="" method="get">
            <div className="mb-3">
              <input type="text" name="hoten" id="hoten" placeholder="Họ tên" />
            </div>
            <div className="mb-3">
              <input type="text" name="email" id="email" placeholder="Email" />
            </div>
            <div className="mb-3">
              <input
                type="number"
                name="sdt"
                id="sdt"
                placeholder="Số điện thoại"
              />
            </div>
            <div className="mb-2">
              <textarea name="nd" id="nd" defaultValue={""} />
            </div>
            <div>
              <button>Gửi</button>
            </div>
          </form>
        </div>
      </section>
  );
}

export default Contact;
