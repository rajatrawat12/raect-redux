import logo from './logo.svg';
import { Provider } from 'react-redux';
import CakeContainer from './components/CakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import store from './redux/cake/store';
import './App.css';
import IceCreamcontainer from './components/iceCreamcontainer';
import NewCakeContainer from './components/newCakeContainer';
import ItemContainer from './components/itemContainer';
import UserContainer from './components/userContainer';

function App() {
  return (
    <Provider store={store}>
       <UserContainer /> 
      <CakeContainer/>
      <ItemContainer/>
      <IceCreamcontainer/>
      <HooksCakeContainer/> 
     <ItemContainer buyIceCream/>
     <NewCakeContainer/>  
    </Provider>
  );
}

export default App;
