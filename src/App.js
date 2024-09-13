// import ToDo from "./ToDoApp/ToDo";
// import {Provider} from 'react-redux'
import store from "./ToolkitApp/store";

import { Provider } from "react-redux";
import TodoList from "./ToolkitApp/Components/TodoList";

function App() {
  return (
    <Provider store={store}>
      <TodoList />
    </Provider>
  );
}

export default App;
