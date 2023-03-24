import React from "react";

import { Hero } from "./Hero.jsx";
import { Clients } from "./Clients.jsx";
import { Aboutus } from "./Aboutus.jsx";
import { Process } from "./Process.jsx";
import { NeedHelp } from "./NeedHelp.jsx";

export const Main = () => (
    <>
        <Hero />

        <section id="clients" className="clients section-bg">
            <div className="container-fluid p-0">
                <div className="row" data-aos="zoom-in">
                    <Clients />
                </div>
            </div>
        </section>

        <Process />
        <NeedHelp />
        <Aboutus />
    </>
);
