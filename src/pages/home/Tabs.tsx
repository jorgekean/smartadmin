import React from "react";
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";

import useTheme from "../../hooks/useTheme";
import { THEME } from "../../constants";

interface TabsWithTextLabelType {
    name: string;
    className?: string;
}

const TabsWithTextLabel = ({ name, className }: TabsWithTextLabelType) => (
    <div className={"tab " + className}>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Nav variant="tabs">
                <Nav.Item>
                    <Nav.Link eventKey="first">Admin Rights</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="second">Cloud Access</Nav.Link>
                </Nav.Item>
            </Nav>
            <Tab.Content>
                <Tab.Pane eventKey="first">
                    <h4 className="tab-title">{name} tabs</h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                        commodo ligula eget dolor tellus eget condimentum rhoncus. Aenean
                        massa. Cum sociis natoque penatibus et magnis neque dis parturient
                        montes, nascetur ridiculus mus.
                    </p>
                    <p>
                        Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                        Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
                        aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
                        imperdiet a, venenatis vitae, justo.
                    </p>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                    <h4 className="tab-title">Another one</h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                        commodo ligula eget dolor tellus eget condimentum rhoncus. Aenean
                        massa. Cum sociis natoque penatibus et magnis neque dis parturient
                        montes, nascetur ridiculus mus.
                    </p>
                    <p>
                        Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                        Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
                        aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
                        imperdiet a, venenatis vitae, justo.
                    </p>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                    <h4 className="tab-title">One more</h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                        commodo ligula eget dolor tellus eget condimentum rhoncus. Aenean
                        massa. Cum sociis natoque penatibus et magnis neque dis parturient
                        montes, nascetur ridiculus mus.
                    </p>
                    <p>
                        Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                        Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
                        aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
                        imperdiet a, venenatis vitae, justo.
                    </p>
                </Tab.Pane>
            </Tab.Content>
        </Tab.Container>
    </div>
);

const Tabs = () => {
    const { theme } = useTheme();

    return (
        <React.Fragment>
            <Container fluid className="p-0">
                <h1 className="h3 mb-3">Quick Access</h1>
                <Row>
                    {/* <Col lg="6">
                    <TabsWithTextLabel name="Default" />
                </Col> */}
                    <Col lg="6">
                        <TabsWithTextLabel name="Colored" className={`${theme !== THEME.DARK && 'tab-primary'}`} />
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
};

export default Tabs;