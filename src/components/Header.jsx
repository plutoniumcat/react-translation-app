import logo from '../images/translator-pu-logo.svg';
// import './App.css';

export function Header() {
  return (
    <div class="text-center" >
      <header className="App-header m-4 ">
        <img src={logo} className="img-fluid" alt="logo" width = "50%" />
      </header>
    </div>
  );
}

export default Header;