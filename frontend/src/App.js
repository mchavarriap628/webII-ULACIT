import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./screens/Home/Home"; 

const App = () => (
  <>
    <Header />
    <main>
      <Home/>
    </main>
    <Footer />
  </>
);

export default App;
