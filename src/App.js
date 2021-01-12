import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Form, FormControl, Button } from 'react-bootstrap';
import services from '../src/Services';

const App = () => {
  const [searchString, setSearchString] = useState('');

  function search() {
    console.log('Search function: ' + searchString);
  }

  return (
    <div>
      <header>
        <Navbar className='navbar navbar-dark bg-dark'>
          <Navbar.Brand className='pointer'>
            Levenstein-Distance-Algorithm
          </Navbar.Brand>
          <Form inline className='float-left'>
            <FormControl
              type='text'
              placeholder='Search'
              className='mr-sm-2'
              onChange={(e) => setSearchString(e.target.value)}
              id='search'
            />
            <Button variant='outline-light' onClick={search}>
              Search
            </Button>
          </Form>
        </Navbar>
      </header>
      <main style={{ margin: '20px 40px 0 40px' }}></main>
    </div>
  );
};

export default App;
