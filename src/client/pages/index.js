import Head from "next/head";
import React from "react";
import Home from "../components/home";

export default function App() {
  return (
    <div>
      <Head>
        <title>Includ - Web development and designing services</title>
        <meta
          name="description"
          content="Providing website development, web app development, hybrid app development and web designing services"
        />
        <meta
          name="keywords"
          content="Includ, website, web, website development, web development, app development, hybrid app development, mobile app development, web designing, web developer, front end developer"
        />
        <meta name="author" content="Includ" />
      </Head>
      <Home />
    </div>
  );
}
