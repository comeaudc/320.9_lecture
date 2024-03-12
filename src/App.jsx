import { useReducer } from 'react';
import './App.css';

function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const action = {
    INCREMENT: 'increment',
    DECREMENT: 'decrement',
  };
  let value = reducer(state, {type: action.INCREMENT});
  console.log(value);
  function reducer(state, action) {
    switch (action.type) {
      case 'increment':
        return { count: state.count + 1 };
      case 'decrement':
        return { count: state.count - 1 };
    }
  }

  return (
    <>
      <button
        onClick={(e) => {
          dispatch({ type: action.DECREMENT });
        }}
      >
        -
      </button>
      <h3>{state.count}</h3>
      <button
        onClick={(e) => {
          dispatch({ type: action.INCREMENT });
        }}
      >
        +
      </button>
    </>
  );
}

export default App;
