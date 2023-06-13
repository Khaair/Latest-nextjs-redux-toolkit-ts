import React from "react";
export default function OrderTable() {
  return (
    <>
      <div className="bdeshop-allorder-area mt-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1">
            <div className="all-order-table-wrapper border-solid">
              <div className="all-order-table-title mb-4">
                <div>
                  <b>
                    Order <span className="text-blue-600">AB-2345678</span>
                  </b>
                  <br />
                  <p>Placed order on 26 june,2023,11:23 pm</p>
                </div>
                <div className="text-blue-600">Details</div>
              </div>
              <div className="table-responsive">
                <table className="table-auto">
                  <tbody>
                    <tr>
                      <td>
                        <div className="all-order-table-img"></div>
                      </td>
                      <td>
                        <div className="order-table-title">
                          <h4 className="font-bold">
                            Order Form: EVM Official store
                          </h4>
                          <p className="text-gray-500">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Nostrum, soluta. Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. Nostrum, soluta.
                          </p>
                        </div>
                      </td>
                      <td>Quantity 1</td>
                      <td>
                        {" "}
                        <button className="order-table-btn">Progress</button>
                      </td>
                      <td>
                        <div className="order-table-last-item">
                          {" "}
                          Estimated delibary by mon 23 june,2023
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
