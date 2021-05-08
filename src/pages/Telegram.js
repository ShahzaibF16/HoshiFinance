import React from "react";
import Pic from "../assets/giph6.gif";
import '../App.css';
import { MDBRow, MDBCol, MDBCard, MDBIcon, MDBBtn, MDBAvatar } from "mdbreact";

const ProjectsPage = () => {
  return (
    <section className='text-center my-2'>


      <MDBRow>
        <MDBCol md='12' className='mb-0'>
          <MDBCard
            className='card-image'
            style={{
              backgroundImage: `url(${Pic})`
            }}
          >
            <div className='text-white Itim text-center d-flex flex-column align-items-center rgba-black-strong pt-5 py-5 px-4 rounded'>
              <h1 className='White-text'>
                <MDBIcon className="mx-2 " icon='user' />
                <strong>JOIN GROWING COMMUNITY</strong>
              </h1>
              <h2 className='py-3 font-weight-bold'>
                <strong>CHAT WITH THE COMMUNITY IN TELEGRAM!</strong>
              </h2>



              <MDBBtn href="https://t.me/hoshifinancebcs" target="_blank" className="font-weight-bold lg" color='white' rounded social="tl">
                <a ><MDBIcon fab icon="telegram" className="pr-1" />Telegram</a>
              </MDBBtn>
            </div>
          </MDBCard>
        </MDBCol>

      </MDBRow>
    </section>
  );
}

export default ProjectsPage;