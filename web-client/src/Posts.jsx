import React from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";


const Posts = (props) => {
  const { data, onRouteChange, getLink } = props.options
    
  return (
    <Container className="mt-5">
      <div className="text-right">
        <Link onClick={() => {
          onRouteChange(getLink("users"));
        }} to={getLink("users")}>Users</Link>
        <Link onClick={() => {
          onRouteChange("/");
        }} to="/">Logout</Link>
      </div>
      {(data || []).map(item => {
       return <Row key={item.id}>
          <Col>
            <Card className="mt-4">{JSON.stringify(item)}</Card>
          </Col>
        </Row>
      })}
    </Container>
  )
}

export default Posts;