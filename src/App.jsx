import Router from "./router/Router";
import Layout from "./components/layout";
import { Toaster } from "react-hot-toast";
import HomePage from "./components/home/HomePage";

function App() {
  return (
    <Layout>
      <Router>
        <HomePage />
      </Router>
      <Toaster />
    </Layout>
  );
}

export default App;
