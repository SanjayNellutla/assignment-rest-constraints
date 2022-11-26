import React from 'react';
import { Button, Card, Col, Container, Form, FormControl, FormGroup, Row } from "react-bootstrap";
import { useHistory } from 'react-router';
import axios from "axios";
import config from "./config";

const Auth = (props) => {
  const { resources, onRouteChange } = props.options;
  const history = useHistory();
  const [user, setUser] = React.useState({
    email: 'sanjay.nellutla@fissionlabs.com',
    password: 'Sanjay94#',
  });
  // const [loginUrl, setLoginUrl] = React.useState();

  const onLogin = (e) => {
    e.preventDefault();
    e.stopPropagation();
    axios.post(`${config.url}${resources.login.url}`, user).then((response) => {
      onRouteChange(response.data.redirect);
      history.push(response.data.redirect);
    });
  };

  return (
    <Container>
      <Row>
        <Col></Col>
        <Col>
          <Card className="mt-5 pt-5 p-5">
            <h3>Login</h3>
            <Form>
              <FormGroup className='my-4'>
                <FormControl size="lg" type="email" placeholder="email" value={user.email} onInput={(e) => {
                  setUser((_user) => {
                    return {
                      ..._user,
                      email: e.target.value
                    }
                  })
                }} />
              </FormGroup>
              <FormGroup className='my-4'>
                <FormControl size="lg" type="password" placeholder="password" value={user.password} onInput={(e) => {
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