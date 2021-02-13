import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import ItemSelectCard from '../../components/ItemSelect.js';

function AlaCartePage() {
    return (
        <Container id="a-la-carte">
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