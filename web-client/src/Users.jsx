import React from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Navbar, Nav, Button } from "react-bootstrap";
// import { useHistory } from 'react-router';
// import axios from "axios";
// import config from "./config";

const Users = (props) => {
  const { data, onRouteChange, getLink } = props.options;
  const users = data && data.rows ? data.rows : [];
  
  return (
    <Container className="mt-5" fluid>
      <Navbar className="text-right">
        <Nav className="ml-auto">
          <Link className="btn btn-primary mx-2" onClick={() => {
            onRouteChange(getLink('posts'));
          }} to={getLink('posts')}>Posts</Link>
        </Nav>
        <Nav>
          <Link className="btn btn-primary mx-2" onClick={() => {
            onRouteChange("/");
          }} to="/">Logout</Link>
        </Nav>
      </Navbar>
      {/* <div className="text-right">
        <Link onClick={() => {
          onRouteChange(getLink('posts'));
        }} to={getLink('posts')}>Posts</Link>
        <Link onClick={() => {
          onRouteChange("/");
        }} to="/">Logout</Link>
      </div> */}
      <h4 className="my-3">USERS:</h4>
      {(users).map(item => {
       return <Row key={item.id}>
          <Col>
            <Card className="mt-4">
              <Card.Header>{item.firstName} {item.lastName}</Card.Header>
              <Card.Body>
                <div>
                 {item.email}
                </div>
                <div>
                 {item.createdAt}
                </div>
                <div>
                 {item.updatedAt}
                </div>
              </Card.Body>
              <Card.Footer>
                <Button variant="danger">Delete</Button>
                <Button variant="outline-primary">Edit</Button>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      })}
    </Container>
  )
}

export default Users;