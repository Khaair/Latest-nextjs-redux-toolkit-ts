"use client";

import { configureStore } from "@reduxjs/toolkit";
import posts from "./slices/postSlices";

export default configureStore({
  reducer: {
    posts,
  },
});
