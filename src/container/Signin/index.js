import React, {  useState } from 'react';
import Layout from '../../components/Layout';
import { Container,Form,Row,Col ,Button} from 'react-bootstrap';
import Input from '../../components/UI/input';
import { login } from '../../actions/auth.action.js';
import {useDispatch,useSelector} from 'react-redux';
import { Redirect } from 'react-router-dom'
/**
* @author
* @function Signin
**/

const Signin = (props) => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  // const [error,setError] = useState('');
  const auth = useSelector(state => state.auth)

  const dispatch = useDispatch();


  
  const userLogin = (e) => {
    e.preventDefault();
    const user = {
     email,password
    }
    dispatch(
      login(user)
    );
  }
  if(auth.authenticate){
    return <Redirect to={'/'}/>
  }
  return(
    <Layout>
      <Container style={{marginTop:'75px'}}>
        <Row>
          <Col md={{span:6,offset:3}}>
            <Form onSubmit = {userLogin}>
            <Input
                    label="Email"
                    placeholder="Email"
                    value={email}
                    type="email"
                    onChange={(e)=>setEmail(e.target.value)}
                  />
                  <Input
                    label="Password"
                    placeholder="Password"
                    value={password}
                    type="password"
                    onChange={(e)=>setPassword(e.target.value)}
                  />
            
              <Button variant="primary" type="submit" style={{marginTop:"10px"}}>
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      
      </Container>
    </Layout>
   )

 }

 export default Signin