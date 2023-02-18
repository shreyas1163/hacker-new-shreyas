import React,{Component} from 'react';
import { renderRoutes } from 'react-router-config';

import { Switch} from 'react-router-dom';

import myRoutes from '../../src/routes';


class App extends Component {
  render(){
    
    return (
      <div className="App">
        <Switch>
        {renderRoutes(myRoutes)}
      </Switch>
      </div>
    );
  }
}  


export default App;