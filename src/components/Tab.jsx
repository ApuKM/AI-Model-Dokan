import React from "react";

const Tab = ({ tab, setTab }) => {
  return (
    <div
      role="tablist"
      className="tabs tabs-lift justify-center mb-10 text-zinc-800 font-semibold "
    >
      <a
        role="tab"
        className={`tab ${tab === "models" ? "tab-active" : ""} w-40 text-lg  border-info`}
        onClick={() => setTab("models")}
      >
        Models
      </a>

      <a
        role="tab"
        className={`tab ${tab === "cart" ? "tab-active" : ""} w-40 text-lg  border-info`}
        onClick={() => setTab("cart")}
      >
        Cart
      </a>
    </div>
  );
};

export default Tab;
