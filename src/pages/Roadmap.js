import React from "react";
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBBtn } from "mdbreact";

const Roadmap = () => {
  return (
    <section className="text-center px-3 Itim my-5">
      <h1 className="h1-responsive Itim font-weight-bold text-center my-5">
        ROADMAP
      </h1>
      
      <MDBRow>
        <MDBCol lg="3" md="12" className="mb-lg-0 mb-4">
          <MDBCard pricing className="white-text">
            <div className="blue-gradient rounded-top">
              <h4
                className="option"
                style={{
                  padding: "2.5rem",
                  marginBottom: 0,
                  fontWeight: 500
                }}
              >
                Phase 1
              </h4>
            </div>
            <MDBCardBody className="striped green-striped text-black card-background px-5">
              
            
              <MDBBtn rounded gradient="blue" className="mb-3 mt-3">
                Smart Contract
              </MDBBtn>
              <MDBBtn rounded gradient="blue" className="mb-3 mt-3">
                Meme Contest
              </MDBBtn>
              <MDBBtn rounded gradient="blue" className="mb-3 mt-3">
                Launch
              </MDBBtn>
              
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol lg="3" md="12" className="mb-lg-0 mb-4">
          <MDBCard pricing className="white-text">
            <div className="aqua-gradient rounded-top">
              <h4
                className="option"
                style={{
                  
                  padding: "2.5rem",
                  marginBottom: 0,
                  fontWeight: 500
                }}
              >
                Phase 2
              </h4>
            </div>
            <MDBCardBody
             className="striped green-striped card-background px-5">
              
              <MDBBtn rounded gradient="aqua" className="mb-3 mt-3">
               Applying Main Exchange 
              </MDBBtn>
              <MDBBtn rounded gradient="blue" className="mb-3 mt-3">
                Coin Market Capital
              </MDBBtn>
              <MDBBtn rounded gradient="blue" className="mb-3 mt-3">
                Farming
              </MDBBtn>
              <MDBBtn rounded gradient="blue" className="mb-3 mt-3">
                Staking
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol lg="3" md="12" className="mb-lg-0 mb-4">
          <MDBCard pricing className="white-text">
            <div className="peach-gradient rounded-top">
              <h4
                className="option"
                style={{
                  padding: "2.5rem",
                  marginBottom: 0,
                  fontWeight: 500
                }}
              >
                Phase 3
              </h4>
            </div>
            <MDBCardBody className="striped orange-striped card-background px-5">
              
              <MDBBtn rounded gradient="peach" className="mb-3 mt-3">
                NFT Market
              </MDBBtn>
              <MDBBtn rounded gradient="peach" className="mb-3 mt-3">
                Casino
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol lg="3" md="12" className="mb-lg-0 mb-4">
          <MDBCard pricing className="white-text">
            <div className="purple-gradient rounded-top">
              <h4
                className="option"
                style={{
                  
                  padding: "2.5rem",
                  marginBottom: 0,
                  fontWeight: 500
                }}
              >
                Phase 4
              </h4>
            </div>
            <MDBCardBody className="striped purple-striped card-background px-5">
             
              <MDBBtn rounded gradient="purple" className="mb-3 mt-3">
                Burning Token
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </section>
  );
}



export default Roadmap;