import React from "react";
import Categories from "@/components/Categories";
import Cardscategorie from "@/components/Cardscategorie";

const categories = () => {
  return (
    <div>
      <Categories
        heading="Categories"
        message="The law can be a complex and nuanced field, with many different categories and subcategories."
      />
      <Cardscategorie />
    </div>
  );
};

export default categories;
