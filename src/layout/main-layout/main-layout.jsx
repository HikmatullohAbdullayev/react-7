import React from "react";
import { Header } from "../header";
import { Footer } from "../footer";
import style from "./main.module.css";
import { Outlet } from "react-router-dom";

export const MainLayuot = () => {
  return (
    <>
      <div  style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}>
        <div>
          <header>
            <Header />
          </header>
          <main>
            <Outlet/>
          </main>
        </div>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
};
