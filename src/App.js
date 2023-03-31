import logo from './logo.svg';
import './App.scss';
import { useDispatch, useSelector } from 'react-redux';
import { increaseCounter, decreaseCounter } from './redux/action/counterAction';
import MyComponent from './components/myFirstComponent';
import React from 'react';
class App extends React.Component {
  render() {
    return (
      // <React.StrictMode>
      <div>
        Hello world
        <MyComponent>
        </MyComponent>

      </div>
      // {/* </React.StrictMode> */}
    );
  }
}



// const App = () => {
//   const count = useSelector(state => state.counter.count);
//   const dispatch = useDispatch();

//   return (
//     <div>
//       Hello world
//       <MyComponent />
//     </div>
//     // <div className="App">
//     //   <header className="App-header">
//     //     <img src={logo} className="App-logo" alt="logo" />
//     //     <p>
//     //       BEGINER ReactJS
//     //     </p>
//     //     <div>Count = {count}</div>
//     //     <button onClick={() => dispatch(increaseCounter())}>Increase</button>
//     //     <button onClick={() => dispatch(decreaseCounter())}>Decrease</button>
//     //   </header>
//     // </div>
//   );
// }
export default App;
