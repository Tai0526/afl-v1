import React from "react";

const Categories = () => {
  return (
    <div className="container mx-auto flex flex-wrap">
      <div className="lg:w-1/4 md:w-1/2 w-full p-4">
        <div className="p-8 rounded-xl shadow-md">
          <h4 className="mb-2 text-lg font-semibold">
            {" "}
            Card (with shadow-md){" "}
          </h4>
          <p className="text-base">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
            recusandae libero possimus culpa quod{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Categories;
