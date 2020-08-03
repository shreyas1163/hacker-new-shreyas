import React,{Component} from 'react';
import '../assests/css/App.css';

import Loadable from 'react-loadable';

const AsyncComponent = Loadable({
  loader: () => import("./NewsList"),
  loading: () => <div>loading...</div>,
});

class App extends Component {
  render(){
    return (
      <div className="App">
        <header className="App-header">        
        </header>
        <div><AsyncComponent/></div>
      </div>
    );
  }
}  


export default App;
