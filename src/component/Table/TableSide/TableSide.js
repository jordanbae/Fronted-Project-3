import "./TableSide.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { forEach } from "lodash";

const TableSide = ({
  setSelTable,
  order,
  tables,
  setTables,
  setOrder,
  orderDetail,
  setOrderDetail,
  selTable,
  tableOrderDetailState,
  setTableOrderDetail,
}) => {
  const [menuItem, setMenuItem] = useState([]);

  // Get Menu from data base
  useEffect(() => {
    axios
      .get(`http://localhost:3001/menu_items`)
      .then((res) => {
        console.log("ALL menu DATA FROM BACKEND >>> ", res.data);
        setMenuItem(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //Map menu API
  let menuDetail = 0;

  menuDetail = menuItem.map((item) => {
    return {
      id: item.id,
      name: item.name,
      price: item.price,
    };
  });

  const allOrderDetailDataFromTable = tableOrderDetailState.map((item, key) => {
    return (
      <div key={key}>
        <p>Name: {item.name}</p>
        <p>Price: {item.price}</p>
        <p>Quantity: {item.quantity}</p>
      </div>
    );
  });

  // Map orderdetail API
  // let tableOrderDetail = 0;
  // try {
  //   tableOrderDetail = orderDetail.map((item) => {
  //     return {
  //       id: item.order_id,
  //       menuItemId: item.menu_item_id,
  //       quantity: item.quantity,
  //     };
  //   });
  // } catch (error) {}

  return (
    <div className={"table-side-grid"}>
      <p>Table Number {selTable}</p>

      <div>
        <div className={"table-side-detail-grid"}>
          <p>Order detail </p>
          {allOrderDetailDataFromTable}
          {/* <p>{menuItem.id}</p> */}
          {/* {console.log(tableOrderDetail, menuDetail)} */}
        </div>
      </div>
      <p>Total Price</p>
      <button>Check Button</button>
    </div>
  );
};
export default TableSide;
