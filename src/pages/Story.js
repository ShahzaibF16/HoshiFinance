import Pic from "../assets/coin.png"
import React from 'react';
import {
  MDBContainer,
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
//   MDBTestimonial,
//   MDBAvatar,
  MDBIcon
} from 'mdbreact';

const TeamPage = () => {
  return (
    <MDBContainer>
      <section id="about" className='text-center my-5'>
        <h1 className='h1-responsive Gira font-weight-bold my-5'>The Story Of Hoshi Finance</h1>

        <MDBCarousel
          activeItem={1}
          length={3}
          testimonial
          interval={false}
          showIndicators={false}
          className='no-flex'
        >
          <MDBCarouselInner>
            <MDBCarouselItem itemId='1'>
              <MDBContainer>
                <MDBContainer className='mx-auto mb-4'>
                  <img
                    src={Pic} width="300px" height="300px"
                    className='rounded-circle img-fluid'
                    alt=''
                  />
                </MDBContainer>
                <h4 className="Itim">
                  <MDBIcon icon='quote-left' /> Twinkle Twinkle Hoshi Star
How i wonder how profitable you are
Up above the world so high
Like a crypto-diamond in the sky<MDBIcon icon='quote-right' />
                </h4>
                <h4 className='font-weight-bold'>Hoshi Finance</h4>
                <h6 className='font-weight-bold Itim my-3'>Founder Company</h6>
                <MDBIcon icon='star' className='black-text' />
                <MDBIcon icon='star' className='black-text' />
                <MDBIcon icon='star' className='black-text' />
                <MDBIcon icon='star' className='black-text' />
                <MDBIcon far icon='star-half' className='black-text' />
              </MDBContainer>
            </MDBCarouselItem>
            <MDBCarouselItem itemId='2'>
              
            </MDBCarouselItem>
            <MDBCarouselItem itemId='3'>
              
            </MDBCarouselItem>
          </MDBCarouselInner>
        </MDBCarousel>
      </section>
    </MDBContainer>
  );
};



export default TeamPage;