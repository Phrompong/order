import "./Content.css";
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Badge from "react-bootstrap/Badge";

export default function Content() {
  const foodList = [
    "xxxxxxxxxx xxxxxxxxxx xxxxxxxxxx xxxxxxxxxx xxxxxxxxxx xxxxxxxxxx xxxxxxxxxx xxxxxxxxxx xxxxxxxxxx xxxxxxxxxx",
    "xxxxxxxxxx xxxxxxxxxx xxxxxxxxxx xxxxxxxxxx xxxxxxxxxx xxxxxxxxxx xxxxxxxxxx xxxxxxxxxx xxxxxxxxxx xxxxxxxxxx",
    "xxxxxxxxxx xxxxxxxxxx xxxxxxxxxx xxxxxxxxxx xxxxxxxxxx xxxxxxxxxx xxxxxxxxxx xxxxxxxxxx xxxxxxxxxx xxxxxxxxxx",
    "xxxxxxxxxx xxxxxxxxxx xxxxxxxxxx xxxxxxxxxx xxxxxxxxxx xxxxxxxxxx xxxxxxxxxx xxxxxxxxxx xxxxxxxxxx xxxxxxxxxx",
    "xxxxxxxxxx xxxxxxxxxx xxxxxxxxxx xxxxxxxxxx xxxxxxxxxx xxxxxxxxxx xxxxxxxxxx xxxxxxxxxx xxxxxxxxxx xxxxxxxxxx",
    "xxxxxxxxxx xxxxxxxxxx xxxxxxxxxx xxxxxxxxxx xxxxxxxxxx xxxxxxxxxx xxxxxxxxxx xxxxxxxxxx xxxxxxxxxx xxxxxxxxxx",
    "xxxxxxxxxx xxxxxxxxxx xxxxxxxxxx xxxxxxxxxx xxxxxxxxxx xxxxxxxxxx xxxxxxxxxx xxxxxxxxxx xxxxxxxxxx xxxxxxxxxx",
    "xxxxxxxxxx xxxxxxxxxx xxxxxxxxxx xxxxxxxxxx xxxxxxxxxx xxxxxxxxxx xxxxxxxxxx xxxxxxxxxx xxxxxxxxxx xxxxxxxxxx",
    "xxxxxxxxxx xxxxxxxxxx xxxxxxxxxx xxxxxxxxxx xxxxxxxxxx xxxxxxxxxx xxxxxxxxxx xxxxxxxxxx xxxxxxxxxx xxxxxxxxxx",
  ];

  const typeList = [
    "x",
    "x",
    "x",
    "x",
    "x",
    "x",
    "x",
    "x",
    "x",
    "x",
    "x",
    "x",
    "x",
    "x",
    "x",
    "x",
    "x",
    "x",
  ];

  const optionsList = ["x", "x", "x"];

  // * show modal menu
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // * show modal order
  const [showOrder, setShowOrder] = useState(false);
  const handleCloseOrder = () => setShowOrder(false);
  const handleShowOrder = () => setShowOrder(true);

  return (
    <>
      <div className="card">
        <div>
          <h1>X</h1>
        </div>
      </div>

      {/* type list */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          marginTop: "5%",
        }}
      >
        <h2 style={{ marginBottom: "0px", marginTop: "2%" }}>ประเภท</h2>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            overflowX: "scroll",
          }}
        >
          {typeList.map((o) => (
            <div className="card-type">
              <div>
                <h1>xxxxxx</h1>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* menu list */}
      <div
        style={{
          display: "flex",
          marginTop: "1%",
          flexDirection: "column",
          justifyContent: "flex-start",
        }}
      >
        <h2 style={{ marginBottom: "0px", marginTop: "5%" }}>เมนู</h2>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            overflowX: "scroll",
          }}
        >
          {foodList.map((o) => (
            <div className="card-menu" onClick={handleShow}>
              <div className="container" style={{ width: "500px" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    flexWrap: "wrap",
                    justifyContent: "flex-end",
                  }}
                >
                  <img
                    src="https://www.igethow.com/wp-content/uploads/2021/02/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%9C%E0%B8%B1%E0%B8%94%E0%B8%81%E0%B8%A3%E0%B8%B0%E0%B9%80%E0%B8%9E%E0%B8%A3%E0%B8%B2-01-01-01-800x445.jpg"
                    width="100%"
                  ></img>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      flexWrap: "wrap",
                      justifyContent: "flex-start",
                      height: "100px",
                    }}
                  >
                    <h4>ผัดกระเพรา</h4>
                    <h6>{o}</h6>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      justifyContent: "flex-end",
                    }}
                  >
                    <h4>60 Bath</h4>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* detail menu  */}
      <Modal show={show} size="lg" onHide={handleClose}>
        <Modal.Body
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <img
            src="https://www.igethow.com/wp-content/uploads/2021/02/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%9C%E0%B8%B1%E0%B8%94%E0%B8%81%E0%B8%A3%E0%B8%B0%E0%B9%80%E0%B8%9E%E0%B8%A3%E0%B8%B2-01-01-01-800x445.jpg"
            width="100%"
            height="50%"
          ></img>
          {/* topic */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <h3>ผัดกระเพรา</h3>
            <h3>60 Bath</h3>
          </div>
          {/* details */}
          <p>
            ข้าวผัดกระเพรา เป็นอาหารที่ทุกคนมักจะรู้จัก และคุ้มเคยอย่างดี
            สาเหตุส่วนหนึ่งอาจเป็นเพราะเป็นอาหารที่ปรุงง่าย แถมรสชาติก็อร่อย
            หลายคนเรียกอาหารจานนี้ว่า "อาหารสิ้นคิด"
            เพราะเวลาไปกินข้าวที่ร้านอาหารตามสั่งแล้วคิดเมนูไม่ออกว่าจะกินอะไรดี
            ก็จะนึกถึง "ข้าวกะเพราไข่ดาว" เป็นอันดับต้นๆ ส่วนประกอบหลัก ได้แก่
            ใบกะเพรา กระเทียม พริกขี้หนู น้ำมัน เนื้อไก่ น้ำเปล่า น้ำปลา น้ำตาล
            พริกไทยป่น และข้าวสุก แต่บางร้านอาจจะใส่ผัก เช่น ถั่วฝักยาว
            หรือข้าวโพดอ่อน ลงไปด้วย เริ่มปรุงด้วย การเจียวกระเทียมพอเหลือง
            ใส่พริกขี้หนู เนื้อไก่ เติมน้ำ ผัดจนสุก ปรุงรสด้วย น้ำปลา น้ำตาล
            พริกไทยป่น แล้วใส่ใบกะเพราลงไปตอนท้าย ตักข้าวสุกใส่จาน
            ราดด้วยผัดกะเพรา ทอดไข่ดาววางข้างเป็นอันเสร็จพิธี
          </p>
          {/* options */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {optionsList.map((o) => (
              <div className="card-type">
                <div>
                  <h1>xxxxxx</h1>
                </div>
              </div>
            ))}
          </div>
          {/* remark */}
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="หมายเหตุ"
            style={{ marginTop: "5%" }}
          ></textarea>
          {/* item selected */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              marginTop: "3%",
            }}
          >
            <Badge
              pill
              bg="light"
              text="dark"
              style={{ padding: "2%", borderStyle: "double" }}
              variant="outline-primary"
            >
              <h4>-</h4>
            </Badge>
            <div
              style={{ marginLeft: "2%", marginRight: "2%", fontSize: "30px" }}
            >
              0
            </div>
            <Badge
              pill
              bg="light"
              text="dark"
              style={{ padding: "2%", borderStyle: "double" }}
            >
              <h4>+</h4>
            </Badge>
            {/* <div className="card-menu" onClick={handleShow}>
              <h1>0</h1>
            </div>
            <div className="card-seletItem">+</div> */}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button type="button" class="btn btn-secondary" onClick={handleClose}>
            ยกเลิก
          </button>
          <button type="button" class="btn btn-warning" onClick={handleClose}>
            ยืนยัน
          </button>
        </Modal.Footer>
      </Modal>

      <button onClick={handleShowOrder} className="btnOrder" title="Go to top">
        orders
      </button>

      {/* detail order  */}
      <Modal show={showOrder} size="lg" onHide={handleCloseOrder}>
        <Modal.Body
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            overflowY: "scroll",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <h1>Order</h1>
            <h3>โต๊ะที่ 1</h3>
          </div>

          {/* order selected */}
          {optionsList.map((o) => (
            <div
              className="card"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: "10px",
              }}
            >
              <img
                src="https://www.igethow.com/wp-content/uploads/2021/02/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%9C%E0%B8%B1%E0%B8%94%E0%B8%81%E0%B8%A3%E0%B8%B0%E0%B9%80%E0%B8%9E%E0%B8%A3%E0%B8%B2-01-01-01-800x445.jpg"
                width="20%"
                height="50%"
              ></img>
              <h5 style={{ marginLeft: "5px" }}>
                ผัดกระเพราหมู <br />
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <h6>+ไข่ดาว</h6>
                  <h6 style={{ marginLeft: "10px" }}>+ไข่ดาว</h6>
                </div>
                <h6>comment : ไม่ใส่พริก</h6>
              </h5>
              <h5>test</h5>
            </div>
          ))}

          {/* total */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: "20px",
            }}
          >
            <h1></h1>
            <h3>ยอดรวม 280 Bath</h3>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button
            type="button"
            class="btn btn-secondary"
            onClick={handleCloseOrder}
          >
            เลือกรายการอาหาร
          </button>
          <button
            type="button"
            class="btn btn-warning"
            onClick={handleCloseOrder}
          >
            สั่งอาหาร
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
