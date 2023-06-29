import './reset.css';
import './App.css';
import './main.js';
import Header from './components/Header'; /* import 뒤 Header는 함수이름임 */
import Menu from './components/Menu';
import Main from './components/Main';
import Product from './components/Product';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Header/>
      <Menu/>
      <Main/>
      <Product/>
      <Main/>
      <Product/>
      <Product/>
      <Footer/>
    </div>
  );
}

export default App;
