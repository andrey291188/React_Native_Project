import { persistor, store } from "./src/store/store";
import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import MyApp from "./src/component/MyApp";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StatusBar backgroundColor="#7e8fa1" translucent={false} />
          <MyApp />
      </PersistGate>
    </Provider>
  );
}

export default App;
