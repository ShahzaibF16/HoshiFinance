import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import '../App.css'
import Pic from '../assets/giph8.gif';

const FooterPagePro2 = () => {
  return (
    <MDBFooter color="" style={{backgroundImage: `url(${Pic})`}} className="font-large Itim font-1 darken-3 pt-5 pb-5">
      <MDBContainer>
        <MDBRow>
          <MDBCol md="12" className="py-5">
          <h1 className=" text-center">Follow Us</h1>
            <div className="mb-5 flex-center">
              <a className="tw-ic" href="https://twitter.com/hoshifinancebsc" target="_blank">
                <i className="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-3x">
                </i>
              </a>  
              <a className="ins-ic" href="https://t.me/hoshifinancebcs" target="_blank">
                <i className="fab fa-telegram fa-lg white-text mr-md-5 mr-3 fa-3x">
                </i>
              </a>             
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      
    </MDBFooter>
  );
}

export default FooterPagePro2;