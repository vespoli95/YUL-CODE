import logo from './logo.svg';
import './App.css';
import YUL_CODE_White from './assets/images/YUL_CODE_White.png'

import Main from './components/Main'

function App() {
  
  return (
    <div>
      <div class="content" >
        <nav class="navbar navbar-expand-lg navbar-dark color-menu static-top">
          <div class="container container-global">
            <a class="navbar-brand" href="#">
              <img src={YUL_CODE_White} alt="" style={{width: "150px"}} />
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item active menu">
                  <a class="nav-link menuWidth" href="#">Accueil
                  </a>
                </li>
                <li class="nav-item menu">
                  <a class="nav-link menuWidth" href="#">Map Montreal</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <Main />
    </div>
  );
}

export default App;
