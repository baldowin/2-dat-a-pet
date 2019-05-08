import React from 'react';

function Footer() {
   
    return (
        
        <div>
               <footer class="page-footer">
          <div class="container">
            <div class="row">
              <div class="col l6 s12">
                <h5 class="white-text">The Team</h5>
                <p class="grey-text text-lighten-4">James .T</p>
                <p class="grey-text text-lighten-4">James .N</p>
                <p class="grey-text text-lighten-4">Jacob .B</p>
                <p class="grey-text text-lighten-4">Nancy .M.Z</p>
              </div>
              <div class="col l4 offset-l2 s12">
                <h5 class="white-text">Portfolios</h5>
                <ul>
                  <li><a class="grey-text text-lighten-3" href="#!">James .T</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">James .N</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Jacob .B</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Nancy .M.Z</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-copyright">
            <div class="container">
            © 2014 Copyright Text
            </div>
          </div>
        </footer>
        </div>
    )
}

export default Footer;