import * as React from "react";
import Footer from "./Footer";
import Navigation from "./Navigation";

const Layout = ({ children }: any) => {
  return (
    <div className="flex min-h-screen flex-col justify-between bg-neutral-50 text-neutral-900">
      <div>
        <Navigation />
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
