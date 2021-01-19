import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component{

  state = {
    values:[]
  }
  componentDidMount(){
    axios.get('http://localhost:5000/api/values').then((response) => {
      console.log(response);
      this.setState({
        values: response.data
      })
    })
    // this.setState({
    //   values:[{id:1,name: 'Value 101'}, {id:2, name:'Value 102'}]
    // })
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <ul>
            {this.state.values.map((value:any) => (
              <li key={value.id}>{value.name}:{value.id}</li>
            ))}
          </ul>
        </header>
      </div>
    );
  }
}
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
