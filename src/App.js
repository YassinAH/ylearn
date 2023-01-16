import React, {Component} from 'react';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';


class App extends Component{
  render() {
    return(
      <div className='app'>
        {/*<Greet name="Bruce" heroName="batman">
          This is children props
        </Greet>
        <Greet name="Clark" heroName="superman" />
        <Greet name="Diana" heroName="wonder woman"/>
        <Welcome name ="Bruce" heroName="batman"/>
        <Welcome name ="Clark" heroName="superman"/>
        <Welcome name ="Diana" heroName="wonder woman"/>
        <Counter></Counter>
        <FunctionClick/>
        <Message />
        <ClassClick/>
        <EventBind />
        <ParentComponent/>
        <UserGreeting />
        


        */}
      
        <NameList />
      </div>
    )
  }
}
export default App;
