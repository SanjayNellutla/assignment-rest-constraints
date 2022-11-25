import React from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";
// import { useHistory } from 'react-router';
// import axios from "axios";
// import config from "./config";

const Users = (props) => {
  const { data, onRouteChange, getLink } = props.options;
  const users = data && data.rows ? data.rows : [];
  
  return (
    <Container className="mt-5">
      <div className="text-right">
        <Link onClick={() => {
          onRouteChange(getLink('posts'));
        }} to={getLink('posts')}>Posts</Link>
        <Link onClick={() => {
          onRouteChange("/");
        }} to="/">Logout</Link>
      </div>
      {(users).map(item => {
       return <Row key={item.id}>
          <Col>
            <Card className="mt-4">{JSON.stringify(item)}</Card>
          </Col>
        </Row>
      })}
    </Container>
  )
}

export default Users;