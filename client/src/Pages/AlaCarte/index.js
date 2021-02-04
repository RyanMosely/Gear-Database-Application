import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ItemSelectCard from '../../components/ItemSelect.js';
import TopNavbar from '../../components/Navbar'

function AlaCartePage() {
    return (
        <Container id="a-la-carte">
            <TopNavbar />
            <Row className="view-cart">
                <Button variant="dark">View Cart</Button>
            </Row>
            <Row>
                <Col className="gear-type-col" xs={12} sm={12} md={2}>
                    <div id="btn-group">
                        <Button className="gt-btn" variant="outline-secondary">Gear Type</Button>
                        <Button className="gt-btn" variant="outline-secondary">Gear Type</Button>
                        <Button className="gt-btn" variant="outline-secondary">Gear Type</Button>
                        <Button className="gt-btn" variant="outline-secondary">Gear Type</Button>
                        <Button className="gt-btn" variant="outline-secondary">Gear Type</Button>
                        <Button className="gt-btn" variant="outline-secondary">Gear Type</Button>
                    </div>
                </Col>
                <Col className="item-listing" xs={12} sm={12} md={10}>
                    <ItemSelectCard />
                    <ItemSelectCard />
                    <ItemSelectCard />
                    <ItemSelectCard />
                    <ItemSelectCard />
                    <ItemSelectCard />
                </Col>
            </Row>
        </Container>
    )
}

export default AlaCartePage;