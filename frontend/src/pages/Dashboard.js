import React from "react";

import DashboardHeader from "../components/dashboard/DashboardHeader";

import ProductTable from "../components/dashboard/ProductTable";

const Dashboard = () => {
  return (
    <div className="py-20">
      <DashboardHeader />
      <section>
          <ProductTable ProductCategory={'FLOWER'}/>
          <ProductTable ProductCategory={'BOUQUET'}/>
      </section>
    </div>
  );
};

export default Dashboard;
