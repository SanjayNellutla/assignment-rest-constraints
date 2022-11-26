import React from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Navbar, Nav, Button } from "react-bootstrap";


const Posts = (props) => {
  const { data, onRouteChange, getLink } = props.options
    
  return (
    <Container className="mt-5" fluid>
      <Navbar className="text-right">
        <Nav className="ml-auto">
          <Link className="btn btn-primary" onClick={() => {
            onRouteChange(getLink("users"));
          }} to={getLink("users")}>Users</Link>
        </Nav>
        <Nav>
          <Link className="btn btn-primary mx-2" onClick={() => {
            onRouteChange("/");
          }} to="/">Logout</Link>
        </Nav>
      </Navbar>
      <h4 className="my-3">POSTS:</h4>
      {(data || []).map(item => {
       return <Row key={item.id}>
          <Col>
            <Card className="mt-4">
              <Card.Header>Post - {item.id}</Card.Header>
              <Card.Body>
                {item.content}
              </Card.Body>
              <Card.Footer>
                <Button variant="link">Likes</Button>
                <Button variant="link">Comments</Button>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      })}
    </Container>
  )
}

export default Posts;