import React from "react";
import '../App.css'
import Pic from "../assets/cool2.svg"
import {  MDBRow, MDBCol, MDBCard, MDBIcon, MDBBtn, MDBAvatar  } from "mdbreact";

const PanCake = () => {
  return (
    <section className='text-center my-2'>
      

      <MDBRow>
        <MDBCol md='12' className='mb-0'>
          <MDBCard
            className='card-image'
            style={{
              backgroundImage: `url(${Pic})`}}
          >
            <div className='text-white Itim text-center d-flex flex-column align-items-center rgba-black-strong pt-5 py-5 px-4 rounded'>
              
              <h1 className='py-3 font-weight-bold'>
                <strong>LIVE PRICE CHART</strong>
              </h1>
              <h2 className='pb-4'>
                <MDBIcon className="mx-2 " icon="" />
                <strong><i class="fas fa-2x fa-comments-dollar"></i></strong>
              </h2>
              
             

{/* <MDBBtn href="" color='white' className="font-weight-bold pt-2.5" rounded social="tl">
        <a><MDBIcon fab icon="" className="pr-0" />Cick to View</a>
      </MDBBtn> */}
            </div>
          </MDBCard>
        </MDBCol>
        
      </MDBRow>
    </section>
  );
}

export default PanCake;