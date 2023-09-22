import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function App() {

  const [formValues, setFormValues] = useState({email:"", password:"", favClass:"1"})
  const [validationStates, setValidationStates] = useState({ emailState: true, passwordState: false });

  const handleEmailChange = ((e) => {

    setFormValues({...formValues, email: e.target.value})
    
    });

  const handlePasswordChange = ((e) => {
    
    // const password = e.target.value;
    setFormValues({...formValues, password: e.target.value})

    const isLengthValid = formValues.password.length >= 9;
    const containsLetter = /[a-zA-Z]/.test(formValues.password);
    const containsNumber = /[0-9]/.test(formValues.password);

    const isPasswordValid = isLengthValid && containsLetter && containsNumber;
    console.log(isPasswordValid)
    setValidationStates({ ...validationStates, passwordState: isPasswordValid });
    });

  const handleSelectChange = ((e) => {
    setFormValues({...formValues, favClass: e.target.value})
    });

  const clickSubmit = (() => {
    const isEmailValid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formValues.email);
    setValidationStates({ ...validationStates, emailState: isEmailValid })
    if (validationStates.emailState && validationStates.passwordState) {
      alert(JSON.stringify(formValues));
    } else {
      alert("Please correct the form errors before submitting");
    }
    })

return (
  <div>
    <h1>Ejemplo de formularios!</h1>
    <Form>
    <Form.Group className="mb-6" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email"
      onChange={handleEmailChange} value={formValues.email} style={{borderColor: validationStates.emailState ? '' : 'red'}}/>
      { validationStates.emailState ? (<Form.Text className="text-muted">We'll
      never share your email with anyone else.</Form.Text>)
      :
       (<Form.Text className="text-muted">Your email should follow an established
        format.</Form.Text>)}

    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password"
      onChange={handlePasswordChange} value={formValues.password} style={{borderColor: validationStates.passwordState ? '' : 'red'}} />
      { !validationStates.passwordState && <Form.Text
      className="text-muted">Your password should be have numbers and letters and
      should be at least 9 char long</Form.Text>}
      
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Label>Favorite Class</Form.Label>
      <Form.Select onChange={handleSelectChange}>
        <option value="1">ISIS3710</option>
        <option value="2">Programación con tecnologias web</option>
      </Form.Select>
    </Form.Group>
    <Button variant="primary" onClick={clickSubmit}>
    Submit
    </Button>
    </Form>
  </div>
);
}
export default App;
