import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

const App = () => {
  return (
    <div>
      <header>
        <Navbar className='navbar navbar-dark bg-dark'>
          <Navbar.Brand className='pointer'>
            Levenstein-Distance-Algorithm
          </Navbar.Brand>
          <Form inline className='float-left'>
            <FormControl type='text' placeholder='Search' className='mr-sm-2' />
            <Button variant='outline-light'>Search</Button>
          </Form>
        </Navbar>
      </header>
      <main style={{ margin: '20px 40px 0 40px' }}></main>
    </div>
  );
};

export default App;
