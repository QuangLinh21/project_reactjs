import React from 'react'

function FilterProduct1() {
  return (
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
  )
}

export default FilterProduct1