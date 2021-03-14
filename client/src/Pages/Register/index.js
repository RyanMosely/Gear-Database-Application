import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import UserImg from '../../user.png';
import InfoCard from '../../components/InfoCard';
import { Form, Button } from 'react-bootstrap';
import './index.scss';

function Register() {
const [registerFirstName, setRegisterFirstName] = userState("");

const regiser = () => {
Axios({
  method: "POST",
  data: {
    first_name: registerFirstName
  },
  withCredentials: true,
  url: "http://localhost:3001/register",
}).then((res) => console.log(res));
}

const login = () => {
  Axios({
    method: "POST",
    data: {
      first_name: registerFirstName
    },
    withCredentials: true,
    url: "http://localhost:3001/login",
  }).then((res) => console.log(res));
  }

    return (
<Container id="profile">
  <div className="sign-up-container">
    <Form>
    <Row>
      <Col>
    <Form.Group controlId="formFirstName">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" placeholder="Enter First Name" />
          <Form.Text className="text-muted">
          </Form.Text>
      </Form.Group>
      <Form.Group controlId="formLastName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Last Name" />
          <Form.Text className="text-muted">
          </Form.Text>
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
          </Form.Text>
      </Form.Group>
      <Form.Group controlId="formPhoneNumber">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="text" placeholder="Enter Phone Number" />
          <Form.Text className="text-muted">
          </Form.Text>
      </Form.Group>
      <Form.Group controlId="AddressLineOne">
        <Form.Label>Address Line 1</Form.Label>
        <Form.Control type="text" placeholder="Enter Address" />
          <Form.Text className="text-muted">
          </Form.Text>
      </Form.Group>
      <Form.Group controlId="AddressLineTwo">
        <Form.Label>Address Line 2</Form.Label>
        <Form.Control type="text" placeholder="Enter Address 2 (Apartment, suite, etc.)" />
          <Form.Text className="text-muted">
          </Form.Text>
      </Form.Group>
      </Col>
      <Col>
      <Form.Group controlId="City">
        <Form.Label>City</Form.Label>
        <Form.Control type="text" placeholder="Enter email" />
          <Form.Text className="text-muted">
          </Form.Text>
      </Form.Group>
      <Form.Group controlId="Country">
        <Form.Label>Country</Form.Label>
        <Form.Control type="text" placeholder="Enter email" />
          <Form.Text className="text-muted">
          </Form.Text>
      </Form.Group>
      <Form.Group controlId="State">
        <Form.Label>State</Form.Label>
        <Form.Control type="text" placeholder="Enter State" />
          <Form.Text className="text-muted">
          </Form.Text>
      </Form.Group>
      <Form.Group controlId="ZipCode">
        <Form.Label>Zip Code</Form.Label>
        <Form.Control type="text" placeholder="Enter Zip Code" />
          <Form.Text className="text-muted">
          </Form.Text>
      </Form.Group>
      <Form.Group controlId="Occupation">
        <Form.Label>Occupation</Form.Label>
        <Form.Control type="text" placeholder="Enter Occupation" />
          <Form.Text className="text-muted">
          </Form.Text>
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>
          Password
        </Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>
          Re-enter Password
        </Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check if Owner Op" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      </Col>
      </Row>
    </Form>
  </div>
</Container>
    )
}

export default Register;