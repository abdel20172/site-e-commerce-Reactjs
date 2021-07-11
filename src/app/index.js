import React , {Fragment}  from 'react';
// import React, {  } from 'react';
import { Navbar,List } from './components/index';
import './styles/App.css';

const SideMenu = () =>{
  const links = ["Légumes","Fruits","Produits Frais","Epicerie","Boissons"];
return(
  <div className="col-sm-2 sidebar">
    {/* Pour utiliser du js dans ce fichier qui sera interpreter sur l'HTML il faut utiliser les parenthèses */}
    <ul >
      {links.map(link => <li>{link}</li>)}
    </ul>
  </div>
);
}

const App = () => {
  return (
    
    <Fragment>
      <Navbar/>
      <div className="container">
        <div className="row">
          <SideMenu/>
          <div className="col-sm red">
            <div className="row">
              <List/>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
    
  );
}
export default App;
