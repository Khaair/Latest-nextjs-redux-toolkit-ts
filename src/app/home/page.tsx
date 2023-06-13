"use client";

import Link from "next/link";
import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { fetchCrudDataHandler } from "../api/crud/page";

import { Button, Checkbox, Form, Input, Modal } from "antd";
import Edit from "./Edit";

export default function Home() {
  const [data, setData] = useState([]);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [studentId, setStudentId] = useState();

  const [form] = Form.useForm();
  const [editform] = Form.useForm();

  console.log("data", data);
  const sendDatatoApp = async () => {
    const values = await form.validateFields();

    try {
      let res = await axios.post("http://localhost:8080/api/save", {
        title: values?.title,
        author: values?.author,
        body: values?.body,
      });

      if (res?.status === 200) {
        console.log(res?.data, "response login");
        fetchData();
      }

      console.log(res, "success result");
    } catch (er) {
      console.log(er);
    }
  };

  const fetchData = useCallback(async () => {
    if (true) {
      await fetchCrudDataHandler().then((res) => {
        if (res?.status === 200) {
          setData(res?.data);
          console.log(res);
        } else {
          console.log("error fetching");
        }
      });
    }
  }, []);
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const deleteMe = async (id: any) => {
    try {
      let mydata = await axios.delete(`http://localhost:8080/api/delete/${id}`);
      console.log(mydata);
      if (mydata) {
        fetchData();
      }
    } catch (er) {
      console.log(er);
    }
  };

  const showEditModal = async (idd: any) => {
    setIsEditModalOpen(true);
    setStudentId(idd);
    try {
      const data = await axios.get(
        `http://localhost:8080/api/show-single/${idd}`
      );

      console.log(data);

      editform.setFieldsValue({
        title: data.data.title,
        author: data.data.author,
        body: data.data.body,
      });
    } catch (err) {
      console.log(err, "error");
    }
  };

  const handleEditOk = () => {
    setIsEditModalOpen(false);
  };

  const handleEditCancel = () => {
    setIsEditModalOpen(false);

    fetchData();
  };

  const handleUpdate = async () => {
    const values = await editform.validateFields();

    try {
      let res = await axios.post(
        `http://localhost:8080/api/update/${studentId}`,
        {
          title: values?.title,
          author: values?.author,
          body: values?.body,
        }
      );

      if (res?.status === 200) {
        console.log(res?.data, "response login");
        fetchData();
      }

      console.log(res, "success result");
    } catch (er) {
      console.log(er);
    }
  };

  return (
    <div className="home-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 mt-3 mb-2 text-center">
            <h3>Next.JS Latest</h3>
            <Edit />
          </div>

          <hr />

          <div className="form-area">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <Form onSubmit={sendDatatoApp} form={form} layout="vertical">
                    <Form.Item
                      name="title"
                      label="Title"
                      rules={[
                        {
                          required: true,
                          message: "Please input the title!",
                        },
                      ]}
                    >
                      <Input placeholder="title" />
                    </Form.Item>
                    <Form.Item
                      name="author"
                      label="Author"
                      rules={[
                        {
                          required: true,
                          message: "Please input the author!",
                        },
                      ]}
                    >
                      <Input placeholder="author" />
                    </Form.Item>

                    <Form.Item
                      name="body"
                      label="Body"
                      rules={[
                        {
                          required: true,
                          message: "Please input the body!",
                        },
                      ]}
                    >
                      <Input placeholder="body" />
                    </Form.Item>

                    <Form.Item>
                      <button
                        onClick={sendDatatoApp}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-sm"
                      >
                        Submit
                      </button>
                    </Form.Item>
                  </Form>
                </div>
              </div>
            </div>
          </div>

          <div className="table-area">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                          <th scope="col" className="px-6 py-3">
                            Title
                          </th>
                          <th scope="col" className="px-6 py-3">
                            Author
                          </th>

                          <th scope="col" className="px-6 py-3">
                            Body
                          </th>

                          <th scope="col" className="px-6 py-3">
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {data?.map((item: any) => {
                          return (
                            <tr
                              key={item?._id}
                              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                            >
                              <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                              >
                                {item?.title}
                              </th>
                              <td className="px-6 py-4"> {item?.author}</td>
                              <td className="px-6 py-4"> {item?.body}</td>

                              <td className="px-6 py-4">
                                <button
                                  onClick={() => deleteMe(item._id)}
                                  className="btn btn-danger"
                                >
                                  Delete
                                </button>
                                <Button
                                  onClick={() => showEditModal(item?._id)}
                                  type="primary"
                                  ghost
                                >
                                  Edit
                                </Button>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Modal
            title="Update Student Info"
            open={isEditModalOpen}
            onOk={handleEditOk}
            onCancel={handleEditCancel}
            width={600}
            footer={false}
          >
            <Form form={editform} layout="vertical">
              <Form.Item
                name="title"
                label="Title"
                rules={[
                  {
                    required: true,
                    message: "Please input the title!",
                  },
                ]}
              >
                <Input placeholder="title" />
              </Form.Item>
              <Form.Item
                name="author"
                label="Author"
                rules={[
                  {
                    required: true,
                    message: "Please input the author!",
                  },
                ]}
              >
                <Input placeholder="author" />
              </Form.Item>

              <Form.Item
                name="body"
                label="Body"
                rules={[
                  {
                    required: true,
                    message: "Please input the body!",
                  },
                ]}
              >
                <Input placeholder="body" />
              </Form.Item>

              <Form.Item>
                <button
                  onClick={handleUpdate}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-sm"
                >
                  Submit
                </button>
              </Form.Item>
            </Form>
          </Modal>
        </div>
      </div>
    </div>
  );
}
