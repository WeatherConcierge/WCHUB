import React from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import {Link} from 'react-router-dom'
const Signin = () => (

  <div className="signin-background"> 
      <Form className="signin signin-form settings">
        <Form.Field required>
        
          <input placeholder='Username' />
        </Form.Field>
        <Form.Field required> 
          <input placeholder='Password' type='password' />
        </Form.Field>

        <Link to="/u/dashboard"><Button type='submit' className="signin-button">Login</Button></Link>
        <div className="btn-group signin-button-container">
		<a className='btn btn-danger '><i class="fab fa-google"></i></a>
		<a href="/api/auth/google" className='btn btn-danger main-button' > Sign in with Google</a>
    
	</div>

   <div className="btn-group signin-button-container">
		<a className='btn btn-primary '><i class="fab fa-facebook"></i></a>
		<a href="/api/auth/google" className='btn btn-primary main-button' > Sign in with Facebook</a>
    
	</div>
        

      
    </Form>
  </div>

)

export default Signin