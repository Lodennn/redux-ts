import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store/store";
import RepositoriesList from "./components/RepositoriesList";

const el = document.getElementById("root")!;

const root = ReactDOM.createRoot(el);

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Search For a Package</h1>
        <RepositoriesList />
      </div>
    </Provider>
  );
};

root.render(<App />);
