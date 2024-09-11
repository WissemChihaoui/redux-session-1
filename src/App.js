import ToDo from "./ToDoApp/ToDo";
import {Provider} from 'react-redux'
import store from "./ToDoApp/store";

function App() {
  return (
    <Provider store={store}>
      <ToDo />
    </Provider>
  );
}

export default App;
