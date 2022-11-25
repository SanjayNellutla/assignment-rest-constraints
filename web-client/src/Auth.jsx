import React from 'react';
import { Button, Card, Col, Container, Form, FormControl, FormGroup, Row } from "react-bootstrap";
import { useHistory } from 'react-router';
import axios from "axios";
import config from "./config";

const Auth = (props) => {
  const { resources } = props.options;
  const history = useHistory();
  const [user, setUser] = React.useState({
    email: 'sanjay.nellutla@fissionlabs.com',
    password: 'Sanjay94#',
  });
  // const [loginUrl, setLoginUrl] = React.useState();

  const onLogin = (e) => {
    e.preventDefault();
    e.stopPropagation();
    axios.post(`${config.url}${resources.login}`, user).then((response) => {
      history.push('/posts');
    });
  };

  return (
    <Container>
      <Row>
        <Col></Col>
        <Col>
          <Card>
            <Form>
              <FormGroup>
                <FormControl type="email" placeholder="email" value={user.email} onInput={(e) => {
                  setUser((_user) => {
                    return {
                      ..._user,
                      email: e.target.value
                    }
                  })
                }} />
              </FormGroup>
              <FormGroup>
                <FormControl type="password" placeholder="password" value={user.password} onInput={(e) => {
                  setUser((_user) => {
                    return {
                      ..._user,
                      password: e.target.value
                    }
                  })
                }} />
              </FormGroup>
              <div> 
                <Button type="submit" onClick={onLogin} className="w-100" >Submit</Button>
              </div>
            </Form>
          </Card>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  )
}

export default Auth