import React from "react";
import Pic from "../assets/giph2.gif"
import "../App.css"
import {  MDBRow, MDBCol, MDBCard, MDBIcon, MDBBtn, MDBAvatar  } from "mdbreact";

const Liquid = () => {
  return (
    <section className='text-center my-2'>
      

      <MDBRow className="lg pb-1">
        <MDBCol md='12'  className='mb-0 '>
          <MDBCard
            className='card-image'
            style={{
              backgroundImage: `url(${Pic})`}}
          >
            <div className='lg text-white text-center d-flex flex-column align-items-center rgba-black-strong pt-6 py-5 px-4 rounded'>
              
              <h1 className='py-3 Itim pt-4 pb-4 font-weight-bold'>
                <strong>100% INITIAL LIQUIDITY LOCKED UNTIL 2099</strong>
              </h1>
              
              
             

{/* <MDBBtn href="" target="_blank" color='white' className="font-weight-bold pt-2.5" rounded social="tl">
        <a ><MDBIcon fab icon="" className="pr-0" />Cick to View</a>
      </MDBBtn> */}
            </div>
          </MDBCard>
        </MDBCol>
        
      </MDBRow>
    </section>
  );
}

export default Liquid;