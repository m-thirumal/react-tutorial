import logo from './logo.svg';
import './App.css';
import Welcome  from './component/Welcome';
import Welcome1 from './component/Welcome1';
import WelcomeClassComponent from './component/WelcomeClassComponent';

function App() {
  return (
    <div className="App">
     <h1>Hello World</h1>
      <Welcome name = "Thirumal"/>
      <Welcome1 name = "Tamil Vendhan"/>
      <WelcomeClassComponent name = "Class Component"/>
    </div>
  );
}

export default App;
