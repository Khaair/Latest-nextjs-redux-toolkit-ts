"use client";
import type { NextPage } from "next";
import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

// Fake API function
const submitForm = async (values: any) => {
  console.log(values);

  try {
    let res = await axios.post("http://localhost:4000/api/save", {
      title: values?.title,
      author: values?.author,
      body: values?.body,
    });

    if (res?.status === 200) {
      console.log(res?.data, "response login");
    }

    console.log(res, "success result");
  } catch (er) {
    console.log(er);
  }
};

const MyForm: NextPage = () => {
  const initialValues = {
    title: "",
    author: "",
    body: "",
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    author: Yup.string().required("Author is required"),
    body: Yup.string().required("Body is required"),
  });

  const handleSubmit = async (values: any, { setSubmitting }: any) => {
    try {
      const response = await submitForm(values);
      console.log(response); // Logging fake API response
      setSubmitting(false);
    } catch (error) {
      console.error(error);
      alert("An error occurred while submitting the form."); // Displaying an error message
      setSubmitting(false);
      console.log("error", error);
    }
  };

  return (
    <div className="myform-area mt-5">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="max-w-md mx-auto">
          <div className="mb-4">
            <label htmlFor="title" className="block font-medium text-gray-700">
              Title:
            </label>
            <Field
              type="text"
              id="title"
              name="title"
              className="border rounded-md px-3 py-2 w-full"
            />
            <ErrorMessage
              name="title"
              component="div"
              className="text-red-600"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="author" className="block font-medium text-gray-700">
              Author:
            </label>
            <Field
              type="text"
              id="author"
              name="author"
              className="border rounded-md px-3 py-2 w-full"
            />
            <ErrorMessage
              name="author"
              component="div"
              className="text-red-600"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="body" className="block font-medium text-gray-700">
              Body:
            </label>
            <Field
              as="textarea"
              id="body"
              name="body"
              className="border rounded-md px-3 py-2 w-full"
            />
            <ErrorMessage
              name="body"
              component="div"
              className="text-red-600"
            />
          </div>

          <div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Submit
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default MyForm;
