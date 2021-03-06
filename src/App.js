import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Mark from 'mark.js/dist/mark.min.js';
import './App.css';
import { Navbar, Form, FormControl, Button } from 'react-bootstrap';
const { distance, closest } = require('fastest-levenshtein');

const App = () => {
  const [searchString, setSearchString] = useState('');
  const [message, setMessage] = useState('');

  function search() {
    let count = 0;
    let text = document.getElementById('text').textContent;
    const words = text.split(' ');
    var context = document.querySelector('.context');
    var instance = new Mark(context);
    instance.unmark();
    words.forEach((word) => {
      let replaceChars = [',', '.', ';', ':'];
      replaceChars.forEach((c) => {
        word = word.replace(c, '');
      });

      if (distance(word.toLowerCase(), searchString.toLowerCase()) === 0) {
        count++;
        instance.mark(word);
      }
      if (count === 0) {
        var closestWord = closest(searchString, words);
        replaceChars.forEach((c) => {
          closestWord = closestWord.replace(c, '');
        });
        setMessage([
          'Do you mean ' + closestWord,
          'alert alert-info text-center',
        ]);
      } else {
        setMessage(['', '']);
      }
    });
  }

  return (
    <div>
      <header>
        <Navbar className='navbar navbar-dark bg-dark'>
          <Navbar.Brand className='pointer'>
            Levenstein-Distance-Algorithm
          </Navbar.Brand>
          <Form inline>
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
      <main style={{ margin: '20px 60px 0 60px' }}>
        <p className={message[1]}>{message[0]}</p>
        <div id='text' className='context'>
          <h1>Lorem Ipsum Text </h1>
          <div>
            <h2>Erster Abschnitt </h2>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet.
            </p>
          </div>
          <div>
            <h2>Zweiter Abschnitt </h2>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Duis autem vel eum iriure
              dolor in hendrerit in vulputate velit esse molestie consequat, vel
              illum dolore eu feugiat nulla facilisis at vero eros et accumsan
              et iusto odio dignissim qui blandit praesent luptatum zzril
              delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum
              dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
              nibh euismod tincidunt ut laoreet dolore magna aliquam erat
              volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
              ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat. Duis autem vel eum iriure dolor in hendrerit in
              vulputate velit esse molestie consequat, vel illum dolore eu
              feugiat nulla facilisis at vero eros et accumsan et iusto odio
              dignissim qui blandit praesent luptatum zzril delenit augue duis
              dolore te feugait nulla facilisi. Nam liber tempor cum soluta
              nobis eleifend option congue nihil imperdiet doming id quod mazim
              placerat facer possim assum.
            </p>
            <div>
              <h3>Untertitel </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor
                in hendrerit in vulputate velit esse molestie consequat, vel
                illum dolore eu feugiat nulla facilisis. At vero eos et accusam
                et justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
