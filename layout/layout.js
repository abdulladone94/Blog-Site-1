import React, { Children } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Head from "next/head";

const layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Blog</title>
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default layout;
