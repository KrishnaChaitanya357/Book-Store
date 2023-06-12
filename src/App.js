
import './App.css';
import {Provider} from "react-redux"
import store from './REDUX/Store';

import Navbar from './COMPONENTS/Navbar';
import BooksList from './COMPONENTS/BooksList';


function App() {
  return (
    <div className="App">
     <Provider store={store}>
     <Navbar/>
     <BooksList/>
     </Provider>
     
    </div>
  );
}

export default App;
