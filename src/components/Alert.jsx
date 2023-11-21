import React from "react";

function Alert({ type, text }) {
  return (
    <div className="flex justify-start items-center mt-4">
      <div
        className={`p-2 ${
          type === "danger" ? "bg-red-200" : "bg-green-200"
        } items-center text-indigo-100 rounded-lg p-4 w-full`}
        role="alert"
      >
        <p
          className={`flex rounded-full ${
            type === "danger" ? "text-red-700" : "text-green-700"
          } text-lg font-bold`}
        >
          {type === "danger" ? "Failed" : "Success"}
        </p>
        <p
          className={`${
            type === "danger" ? "text-red-700" : "text-green-700"
          } text-left text-base font-light`}
        >
          {text}
        </p>
      </div>
    </div>
  );
}

export default Alert;
