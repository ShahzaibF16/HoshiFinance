import React from "react";
import Logo from "../assets/coin.png"
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPagePro = () => {
  return (
    <MDBFooter color="" style={{backgroundColor: '#282c34'}} className="font-small Itim dark-2 pt-4 mt-4">
      <MDBContainer  className="text-center text-md-left">
        <MDBRow className="my-4">
          <MDBCol md="4" lg="4">
            <h5 className="text-uppercase mb-4 font-weight-bold">
              Hoshi Finance
            </h5>
            <img src={Logo} width="100px " height="100px"/>
            <p>
              
            </p>
          </MDBCol>
          <hr className="clearfix w-100 d-md-none" />
          <MDBCol md="2" lg="2" className="ml-auto">
            <h5 className="text-uppercase mb-4 font-weight-bold">About</h5>
            <ul className="list-unstyled">
              <p>
                <a href="#!">HOME</a>
              </p>
              <p>
                <a href="#!">ABOUT US</a>
              </p>
              <p>
                <a href="https://t.me/hoshifinancebcs">COMMUNITY</a>
              </p>
              
            </ul>
          </MDBCol>
          <hr className="clearfix w-100 d-md-none" />
          
          <hr className="clearfix w-100 d-md-none" />
          <MDBCol md="4" lg="4" className="text-center">
            <h5 className="text-uppercase mb-4 font-weight-bold">
              Social Media
            </h5>
            <div className="mt-1">
              <a href="https://t.me/hoshifinancebcs" type="button" className="btn-floating btn-small btn-fb">
                <i className="fab mr-5 fa-4x fa-telegram" />
              </a>
              <a href="https://twitter.com/hoshifinancebsc" type="button" className="btn-floating btn-small btn-tw">
                <i className="fab fa-4x fa-twitter" />
              </a>
              
            </div>
          </MDBCol>
          <hr className="clearfix w-100 d-md-none" />
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href="https://www.hoshifinance.com"> Hoshi Finance </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPagePro;