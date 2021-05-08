import React from "react";
import Pic from "../assets/cool3.png"
import '../App.css'
import {  MDBRow, MDBCol, MDBCard, MDBIcon, MDBBtn, MDBAvatar  } from "mdbreact";

const Contract = () => {
  return (
    <section className='text-center my-2'>
      

      <MDBRow>
        <MDBCol md='12' className='mb-0'>
          <MDBCard
            className='card-image'
            style={{
              backgroundImage: `url(${Pic})`}}
          >
            <div className='text-black Itim text-center d-flex flex-column align-items-center  pt-5 py-5 px-4 rounded'>
              
              <h1 className='py-3 pt-6 pb-4 font-weight-bold'>
                <strong>CONTRACT ADDRESS</strong>
              </h1>
              <h4 className='pb-2 font-weight-bold'>
                {/* <MDBIcon className="mx-2 " icon="" />
                <strong><i class="fas fa-comments-dollar"></i></strong> */}
             <h6 className='font-weight-bold'> TOTAL SUPPLY 1,000,000,000,000</h6>
              <h6 className='font-weight-bold'>TOKEN TO ADD ON EXCHANGE 50%: 500,000,000,000</h6>
              <h6 className='font-weight-bold'>TAX 3%</h6>
              <h6 className='font-weight-bold'>TAX ADDED TO LP 2%</h6>
             <h6 className='font-weight-bold'> AIRDROP 10% : 100,000,000,000</h6>
             <h6 className='font-weight-bold'> BURN 40% <i class="fas fa-tick"></i>: 400,000,000,000</h6>
              <h6 className='font-weight-bold'>WEBSITE</h6>
              <h6 className='font-weight-bold'>PANCAKESWAP</h6>
               <h6 className='font-weight-bold'> 100% SAFU</h6>
              <h6 className='font-weight-bold'>  OWNER HAVE NO TOKEN</h6>
              <h6 className='font-weight-bold'>  VERY EARLY</h6>
              </h4>
              
              
             

              <MDBBtn href="https://bscscan.com/token/0xad5d459f43687a4d29c04c7f2ba3aab963804509" target="_blank" color='black' className="font-weight-bold text-white pt-2.5" rounded social="tl">
        <a ><MDBIcon fab icon="" className="pr-0" />Cick to View</a>
      </MDBBtn>
            </div>
          </MDBCard>
        </MDBCol>
        
      </MDBRow>
    </section>
  );
}

export default Contract;