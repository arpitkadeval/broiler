import React from "react";
import { AppContent, AppHeader, AppSidebar } from "../common/components/index";

const DefaultLayout = () => {
  return (
    <>
      <div className="flex flex-col h-screen">
        <AppHeader />

        <div className="flex grow">
          <AppSidebar />
          <div className="grow p-3">
            <AppContent />
          </div>
        </div>
      </div>
    </>
  );
};

export default DefaultLayout;
