

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Helmet } from "react-helmet-async";

import Services from "./Services";
import { Badge, Button, Container, Nav, Navbar } from "react-bootstrap";

import logo from "../../assets/img/SecureMode_Logo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseChimney, faSignOut } from "@fortawesome/free-solid-svg-icons";
import Tabs from "./Tabs";

const Navigation = () => (
    <Navbar expand="md" className="landing-navbar">
        <Helmet title="Home" />
        <Container>
            <Navbar.Brand className="" href="/">
                {/* <img src={logo} alt="Logo" className="img-fluid logo" style={{ maxWidth: "75px" }} /> */}
                {/* <Logo /> */}
                <FontAwesomeIcon icon={faHouseChimney} />
                Logo & AppName{" "}
                {/* <Badge as="sup" bg="" className="badge-soft-primary p-1">
                    React
                </Badge> */}
            </Navbar.Brand>
            {/* <Nav className="ms-auto" navbar>
                <Nav.Item className="d-none d-md-inline-block">
                    <Nav.Link
                        href="/dashboard/default"
                        target="_blank"
                        rel="noreferrer"
                        active
                        className="text-lg px-lg-3"
                    >
                        Logout
                    </Nav.Link>
                </Nav.Item>
            </Nav> */}
            <Button
                // href="https://themes.getbootstrap.com/product/appstack-react-admin-dashboard-template/"
                // target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                className="ms-2 btn-pill"
                size="lg"
            >

                <FontAwesomeIcon icon={faSignOut} />
                <span className="vl" />
                Logout
            </Button>
        </Container>
    </Navbar>
);

const Home = () => {
    // const { setTheme } = useTheme();
    // const { setPosition, setBehavior } = useSidebar();
    // const { setLayout } = useLayout();

    // useEffect(() => {
    //     setTheme(THEME.DEFAULT);
    //     setPosition(SIDEBAR_POSITION.LEFT);
    //     setBehavior(SIDEBAR_BEHAVIOR.STICKY);
    //     setLayout(LAYOUT.FLUID);

    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, []);

    return (
        <React.Fragment>
            {/* <Navigation /> */}
            <Services />
            <Tabs></Tabs>
            {/* <Intro />
            <ColorSchemesAndLayouts />
            <Integrations />
            <Testimonials />
            <DashboardsAndPages />
            <Features />
            <Faq />
            <Footer /> */}
        </React.Fragment>
    );
};

export default Home;
