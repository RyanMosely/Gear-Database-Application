import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import UserImg from '../../user.png';
import InfoCard from '../../components/InfoCard';

function Profile() {
    return (
        <Container id="profile">
            <Row>
                <Col>
                    <img className="profile-pic" src={UserImg} alt="random text about pic"/>
                </Col>
            </Row>
            <Row >
                <Col>
                    <div id="name-box">
                        Name
                    </div>
                </Col>
            </Row>
            <Row >
                <Col>
                    <div id="profile-bio">
                        <p>Location</p>
                        <p>About me, including type of rental gear</p>
                    </div>
                </Col>
            </Row>
            <Row id="item-box">
                <InfoCard />
                <InfoCard />
            </Row>
        </Container>
    )
}

export default Profile;