import React from "react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

type Props = {};

const Toast = (props: Props) => {
  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        closeOnClick
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
    </div>
  );
};

export default Toast;
