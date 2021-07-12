import React from 'react';
export const Navbar = ({ filter, setFiltering  }) => {
    {/*  const items = useSelector(state => state.items)*/}
     return (
       <nav className="navbar orange navbar-expand-lg navbar-light bg-light fixed-top">
            {/* <Link  className="navbar-brand crimson" to="/">   <i class="fas fa-shopping-cart"></i> Mes Courses en Ligne</Link>  */}
         <a href="" className="navbar-brand crimson">
           <i class="fas fa-shopping-cart"></i> Mes Courses en Ligne
         </a>
         
         <button
           className="navbar-toggler"
           type="button"
           data-toggle="collapse"
           data-target="#navbarSupportedContent"
           aria-controls="navbarSupportedContent"
           aria-expanded="false"
           aria-label="Toggle navigation"
         >
         <span className="navbar-toggler-icon"></span>
         </button>
   
         <div className="collapse navbar-collapse" id="navbarSupportedContent">
           <div className="ml-auto cart">
             <div>
               <form className="search form-inline my-2 my-lg-0">
                 <input
                   className="form-control mr-sm-2"
                   type="search"
                   placeholder="Search"
                   aria-label="Search"
                   
                   />
               </form>
             </div>
             <div className="menu-right">
                {/* <Link to="/cart">
                   <i class="fas fa-shopping-bag fa-2x grey"></i>
                </Link> */}
                 {/* <span class="badge badge-pill badge-success">{items.length > 0 && items.length}</span> */}
             </div>
           </div>
         </div>
       </nav>
     );
   };

   export const Card = props => {
    // const { item, count } = props
    return (
      <div className="col-sm-4">
        <div className="card">
          <img
            width="170"
            height="170"
            src={process.env.PUBLIC_URL + `/assets/0/citron.png`}
            alt="citron"
          />
          <div className="card-body">
            <div className="row">
              <div className="col-sm-6">
                <h4>Citron</h4>
              </div>
              <div className="col-sm-6">
                <p>
                    €2.99/unit
                </p>
                <button className="btn btn-warning btn-sm" >view product</button>
              </div>
            </div>
          </div>
        </div>
        {/* <Modal item={item} count={count}/> */}
      </div>
    );
  };

   export const List = () => {
   
  
    return (
      <div className="col-sm">
        <div className="row">
          <Card/>
        </div>
      </div>
    );
  };