import React, { useEffect, useState } from 'react'
import ProductItem from "./ProductItem";
import FilterProduct1 from "./FilterProduct1";
import FilterKindProduct from "./FilterKindProduct";
import Pagination from './Pagination';
function ListProduct({onclickpro}) {
  const listProducts = [
    {
        id: 1,
        name : 'Trà Shan Tuyết 1',
        img: 'https://i.pinimg.com/originals/a0/cf/88/a0cf88fda5e332d00ba2749b03f3e2fa.jpg',
        description: "Trà Shan tuyết (Chè Shan Tuyết) hay còn gọi là trà tuyết. Đây là loại trà đặc sản của các đồng bào dân tộc người Tày, Giao, Mông và là đặc sản của các tỉnh như Hà Giang Điện Biên, Lào Cai. Đặc điểm của trà Shan Tuyết là búp trà (cánh trà) rất to và có màu trắng, dưới cahnhs trà có phủ một lớp lông tơ mịn màu trắng. Cây trà Shan tuyết cổ thụ rất lớn, có khi bằng vòng tay ôm của vài người lớn, mọc trên núi với độ cao 1200m, quanh năm mây mù bao phủ. Nhiệt độ giữa ngày và đêm chênh lệch lớn",
        price: 100000,
        inventory: 20,
        rating: 4,
        status: true,
    
    },
    {
        id: 2,
        name : 'Trà sen 1',
        img: 'https://i.pinimg.com/originals/a0/cf/88/a0cf88fda5e332d00ba2749b03f3e2fa.jpg',
        description: "Trà Shan tuyết (Chè Shan Tuyết) hay còn gọi là trà tuyết. Đây là loại trà đặc sản của các đồng bào dân tộc người Tày, Giao, Mông và là đặc sản của các tỉnh như Hà Giang Điện Biên, Lào Cai. Đặc điểm của trà Shan Tuyết là búp trà (cánh trà) rất to và có màu trắng, dưới cahnhs trà có phủ một lớp lông tơ mịn màu trắng. Cây trà Shan tuyết cổ thụ rất lớn, có khi bằng vòng tay ôm của vài người lớn, mọc trên núi với độ cao 1200m, quanh năm mây mù bao phủ. Nhiệt độ giữa ngày và đêm chênh lệch lớn",
        price: 120000,
        inventory: 20,
        rating: 5,
        status: true,
    
    },
    {
        id: 3,
        name : 'Trà hoa cúc 1',
        img: 'https://i.pinimg.com/originals/a0/cf/88/a0cf88fda5e332d00ba2749b03f3e2fa.jpg',
        description: "Trà Shan tuyết (Chè Shan Tuyết) hay còn gọi là trà tuyết. Đây là loại trà đặc sản của các đồng bào dân tộc người Tày, Giao, Mông và là đặc sản của các tỉnh như Hà Giang Điện Biên, Lào Cai. Đặc điểm của trà Shan Tuyết là búp trà (cánh trà) rất to và có màu trắng, dưới cahnhs trà có phủ một lớp lông tơ mịn màu trắng. Cây trà Shan tuyết cổ thụ rất lớn, có khi bằng vòng tay ôm của vài người lớn, mọc trên núi với độ cao 1200m, quanh năm mây mù bao phủ. Nhiệt độ giữa ngày và đêm chênh lệch lớn",
        price: 138000,
        inventory: 10,
        rating: 3,
        status: true,
    
    },  {
        id: 4,
        name : 'Trà một ong',
        img: 'https://qph.fs.quoracdn.net/main-qimg-df9a4b3b82c78b5fe324195c7ea72c3e',
        description: "Trà Shan tuyết (Chè Shan Tuyết) hay còn gọi là trà tuyết. Đây là loại trà đặc sản của các đồng bào dân tộc người Tày, Giao, Mông và là đặc sản của các tỉnh như Hà Giang Điện Biên, Lào Cai. Đặc điểm của trà Shan Tuyết là búp trà (cánh trà) rất to và có màu trắng, dưới cahnhs trà có phủ một lớp lông tơ mịn màu trắng. Cây trà Shan tuyết cổ thụ rất lớn, có khi bằng vòng tay ôm của vài người lớn, mọc trên núi với độ cao 1200m, quanh năm mây mù bao phủ. Nhiệt độ giữa ngày và đêm chênh lệch lớn",
        price: 100000,
        inventory: 5,
        rating: 3,
        status: true,
    
    },
    {
        id: 5,
        name : 'Trà Shan Tuyết',
        img: 'https://qph.fs.quoracdn.net/main-qimg-df9a4b3b82c78b5fe324195c7ea72c3e',
        description: "Trà Shan tuyết (Chè Shan Tuyết) hay còn gọi là trà tuyết. Đây là loại trà đặc sản của các đồng bào dân tộc người Tày, Giao, Mông và là đặc sản của các tỉnh như Hà Giang Điện Biên, Lào Cai. Đặc điểm của trà Shan Tuyết là búp trà (cánh trà) rất to và có màu trắng, dưới cahnhs trà có phủ một lớp lông tơ mịn màu trắng. Cây trà Shan tuyết cổ thụ rất lớn, có khi bằng vòng tay ôm của vài người lớn, mọc trên núi với độ cao 1200m, quanh năm mây mù bao phủ. Nhiệt độ giữa ngày và đêm chênh lệch lớn",
        price: 100000,
        inventory: 20,
        rating: 2,
        status: true,
    
    }
]
const [products,setProducts] = useState(()=>{
  const lists = JSON.parse(localStorage.getItem("PROJECT_TRASEN"));
  if(lists==null){
    return listProducts;
  }
  else{
    return lists;
  }
});
useEffect(()=>{
  localStorage.setItem("PROJECT_TRASEN",JSON.stringify(products));

},[products]);
 const handleClick = (product)=>{
  onclickpro(product)
 }
const elementProducts = products.map((product,index)=>{
  return <ProductItem key={index} renderProduct={product} onclickpro={handleClick}/>
})
// const handleclick = (product)=>{
//   onclickpro(product)
// }
  return (
    <>
    <section id="banner">
      <img src="./Pictures/san-pham/banner.png" alt="" />
      <h3>SẢN PHẨM</h3>
    </section>
    <section id="list-product">
      <div className="products common-section">
        <div className="title mt-3">
          <p>
            <a href="index1.php">Trang chủ</a> &gt;{" "}
            <a href="list_products.php">Sản phẩm</a>
          </p>
          <h3>Sản phẩm</h3>
          <hr />
        </div>
        <div className="box-product">
          <div className="container-fluid">
            <FilterProduct1 />
            <div className="row">
              <div className="col-md-3">
                <FilterKindProduct />
              </div>
              <div className="col-md-9 ">
                <div className="box-products-item d-flex flex-wrap justify-content-around">
                  {elementProducts}
                </div>
                {/* ----------------pages------------------ */}
                <nav aria-label="Page page-item-pa navigation example ">
                  <Pagination />
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
  )
}

export default ListProduct