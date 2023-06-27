import React from 'react'

function FilterKindProduct() {
  return (
    <>
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
        <input type="range" className="form-range" id="customRange1" />
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
  </>
  )
}

export default FilterKindProduct