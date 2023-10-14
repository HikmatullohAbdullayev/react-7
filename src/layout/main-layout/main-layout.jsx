import React from "react";
import { Header } from "../header";
import { Footer } from "../footer";
import style from "./main.module.css";
import { Outlet } from "react-router";

export const MainLayuot = () => {
  return (
    <>
      <div>
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
