import React from "react";
import "./style.css"


function Jumbotron() {
  return (
    <div className="jumbotron text-center">
      <h1><span><a className="jumboClass" id="jumboHead" href="/">My Books</a></span></h1>
        <div>
          <a className="jumboClass" target="_blank" rel="noopener noreferrer" href="http://developers.google.com/books/">
            Powered by Google
          </a>
        </div>
      
    </div>
  );
}



export default Jumbotron;
