import React from 'react';



const Navbar = ({setCategory}) => {
  return (
   <nav className ="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div className ="container-fluid">
    <a className ="navbar-brand" href="#"><span className = "badge bg-light text-dark fs-4">FirstPost</span></a>
    <button className ="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className ="navbar-toggler-icon"></span>
    </button>
    <div className ="collapse navbar-collapse" id="navbarNav">
      <ul className ="navbar-nav">
        <li className ="nav-item">
          <a className ="nav-link" onClick ={() => setCategory("technology")}>Technology</a>
        </li>

          <li className ="nav-item">
          <a className ="nav-link" onClick = {() => setCategory("business")}>Business</a>
        </li> 

          <li className ="nav-item">
          <a className ="nav-link" onClick = {() => setCategory("health")}>Health</a>
        </li> 

          <li className ="nav-item">
          <a className ="nav-link" onClick = {() => setCategory("sports")}>Sports</a>
        </li> 

          <li className ="nav-item">
          <a className ="nav-link" onClick = {() => setCategory("Entertainment")} >Entertainment</a>
        </li> 
        <li className = "nav-item">
        <a className = "nav-link disabled" aria-disabled ="true">Disabled</a>
        </li>
  
      </ul>
           
       
    </div>
  </div>
</nav>
  )
}

export default Navbar

