import React from 'react';
import '../App.css';

function Body() {
  let name = 'Initial'
  const buttonClickHandler = (value) => {
    console.log('Clicked!' + name)
  }

  const inputHandler = (e) => {
    name = e.target.value;
    console.log(e.target.value)
  }
  return (
    <main>
      <div className="container" style={{height: '250px', marginTop: '200px'}}>
        <h1>Content</h1>

        <label>
          {name}:
          <input name={name} type="text" onChange={inputHandler}/>
        </label>

        <button onClick={() => buttonClickHandler(1)}>Add One</button>
        <button onClick={() => buttonClickHandler(2)}>Add Two</button>

      </div>
    </main>
  );
}

export default Body;
