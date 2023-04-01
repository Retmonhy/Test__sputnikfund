import React from "react";
import { Provider } from "react-redux";
import store from "../shared/store/reducers";
import { Layout } from "../pages/index";

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <div className='container'>
          <Layout />
        </div>
      </div>
    </Provider>
  );
}

export default App;

