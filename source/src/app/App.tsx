import React from "react";
import { Provider } from "react-redux";
import store from "../shared/store/reducers";
import { Layout } from "../pages/index";
import { Grommet } from "grommet";

function App() {
  return (
    <Provider store={store}>
      <Grommet full>
        <div className='App'>
          <div className='container'>
            <Layout />
          </div>
        </div>
      </Grommet>
    </Provider>
  );
}

export default App;

