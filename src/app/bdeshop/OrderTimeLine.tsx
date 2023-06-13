"use client";
import React from "react";
import { Divider, Steps } from "antd";
import OrderTable from "./OrderTable";

const OrderTimeLine: React.FC = () => (
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
    <div className="order-timeline-area mt-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
          <div className="card">
            <div>
              <span className="order-timeline-bottom-border">
                Order Timeline
              </span>
              <hr />
            </div>
            <div className="mt-8">
              <Steps
                progressDot
                current={1}
                items={[
                  {
                    title: "Finished",
                    description: "This is a description.",
                  },
                  {
                    title: "In Progress",
                    description: "This is a description.",
                  },
                  {
                    title: "Waiting",
                    description: "This is a description.",
                  },
                ]}
              />
            </div>
            <div className="order-timeline-middle-item mt-8">
              <div className="mt-1">
                <div className="order-timeline-middle-item-bottom-margin">
                  17 Dec,12:30pm
                </div>
                <div className="order-timeline-middle-item-bottom-margin">
                  17 Dec,12:30pm
                </div>
                <div className="order-timeline-middle-item-bottom-margin">
                  17 Dec,12:30pm
                </div>
              </div>

              <div className="steps-vertical-section">
                <div className="mx-4">
                  <Steps
                    progressDot
                    current={1}
                    direction="vertical"
                    items={[
                      {
                        title: "Finished",
                        description:
                          "This is a description. This is a description.This is a description. This is a description.This is a description. This is a description.",
                      },
                      {
                        title: "Finished",
                        description:
                          "This is a description. This is a description.This is a description. This is a description.This is a description. This is a description.",
                      },
                      {
                        title: "In Progress",
                        description:
                          "This is a description. This is a description.This is a description. This is a description.This is a description. This is a description.",
                      },
                    ]}
                  />
                </div>
                <div>
                  <div className="order-timeline-middle-btn order-timeline-middle-item-bottom-margin ">
                    <button className="">PARTIAL</button>
                  </div>

                  <div className="order-timeline-middle-btn order-timeline-middle-item-bottom-margin">
                    {" "}
                    <button>UNPAID</button>
                  </div>

                  <div className="order-timeline-middle-btn order-timeline-middle-item-bottom-margin">
                    {" "}
                    <button>UNPAID</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card mb-8">
            <div>
              <span className="order-timeline-bottom-border">Address</span>
              <hr />
            </div>
            <div className="table-responsive mt-4">
              <table className="order-timeline-table">
                <tbody>
                  <tr className="order-timeline-table-header">
                    <th>Full Name</th>
                    <th>Address</th>

                    <th>Region</th>
                    <th>Phone Number</th>
                    <th></th>
                  </tr>

                  <tr>
                    <td>Shah md Arafat hossain</td>
                    <td>Lorem ipsum dolor sit amet.</td>
                    <td>Lorem ipsum dolor sit amet.</td>

                    <td>Lorem ipsum dolor sit amet.</td>

                    <td>Company</td>
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

export default OrderTimeLine;
