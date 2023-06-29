import React, { useEffect, useState } from 'react'

function Cart({renderProduct}) {
 const initialProduct = [renderProduct];
 const [product,setProduct] = useState(()=>{
  const products = JSON.parse(localStorage.getItem("CART"));
  if(products===null){
    return initialProduct;
  }
  else{
    return products;
  }
 });
 useEffect(()=>{
  localStorage.setItem("CART",JSON.stringify(product))
 },[product])
 

  return (
    <div className='common-section'>
      <h2 className='mt-3 text-center'>Giỏ hàng</h2>
      <table className='table'>
        <thead>
          <tr key={renderProduct.id}>
            <th>stt</th>
            <th>Tên sản phẩm</th>
            <td>Hình ảnh</td>
            <th>Giá</th>
            <th>Số lượng</th>
            <th>thao tác</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{renderProduct.id}</td>
            <td>{renderProduct.name}</td>
            <td><img src={renderProduct.img} alt="anh" width={"80px"}/></td>
            <td>{renderProduct.price}</td>
            <td><input type="number" value={1} name='quantity'/></td>
            <td className='color-dark'><i class="fa-solid fa-delete-left"></i></td>
          </tr>
        </tbody>
      </table>
      <p>Thành tiền </p>
    </div>
  )
 
}

export default Cart