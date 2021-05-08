import React from 'react';
import '../App.css'
import logo from '../assets/coin.png';
import back from '../assets/back.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Timer from '../pages/Timer';
import { BrowserRouter as Router } from 'react-router-dom';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBMask,
  MDBRow,
  MDBCol,
  MDBNotification,
  MDBAnimation,
  MDBIcon,
  MDBBtn,
  MDBView,
  MDBContainer
} from 'mdbreact';

class MinimalisticIntro extends React.Component {
  state = {
    collapsed: false
  };

  handleTogglerClick = () => {
    const { collapsed } = this.state;

    this.setState({
      collapsed: !collapsed
    });
  };

  componentDidMount() {
    document.querySelector('nav').style.height = '65px';
  }

  componentWillUnmount() {
    document.querySelector('nav').style.height = 'auto';
  }


  render() {
    const { collapsed } = this.state;

    const navStyle = { marginTop: '0rem' };
    const overlay = (
      <div
        id='sidenav-overlay'
        style={{ backgroundColor: 'transparent', fontFamily: 'Girassol' }}
        onClick={this.handleTogglerClick}
      />
    );


    return (

      <div id='minimalistintro'>
        <Router>
          <div>
            <MDBNavbar

              color='grey darken-3'
              style={navStyle}
              dark
              expand='md'
              fixed='top'
              scrolling
              transparent
            >
              

              <MDBContainer>
                <MDBNavbarBrand>
                  <MDBNavLink to='www.hoshifinance.com'><img width="60rem"
                    height="60rem" src={logo}></img></MDBNavLink>
                </MDBNavbarBrand>
                {/* Popup */}
              <MDBAnimation type="bounce" infinite>
                <MDBNotification
                  show
                  fixed="none"
                  fade
                  iconClassName="elegant"
                  // title="Welcome to HS"
                  message="We Will Run an Airdrop Soon!"
                // text="Just now"
                />
              </MDBAnimation>
                <MDBNavbarToggler onClick={this.handleTogglerClick} />
                <MDBCollapse isOpen={collapsed} navbar>
                  <MDBNavbarNav left>
                    <MDBNavItem active>
                    <a className='commut white-text mr-3 font-weight-bold ' href='www.hoshifinance.com'>Home</a>
                    </MDBNavItem>
                    <MDBNavItem>
                    <a className='commut white-text mr-3 font-weight-bold ' href=''>About</a>
                    </MDBNavItem>
                    <MDBNavItem>
                        <a className='commut white-text font-weight-bold ' href='https://t.me/hoshifinancebcs'>Community</a>
                    </MDBNavItem>
                  </MDBNavbarNav>
                  <MDBNavbarNav right>
                    <a className="waves-effect white-text mt-2 mr-2 fa-2x darken-2 waves-dark" href="https://twitter.com/hoshifinancebsc">
                      <MDBIcon fab icon="twitter" />
                   </a>

                    <a className="waves-effect white-text mt-2 mx-2 fa-2x darken-2 waves-dark" href="https://t.me/hoshifinancebcs">
                      <MDBIcon fab icon="telegram" />
                    </a>
                  </MDBNavbarNav>
                </MDBCollapse>
              </MDBContainer>
            </MDBNavbar>
            {collapsed && overlay}
          </div>
        </Router>

        <MDBView src={back}>
          <MDBMask className='rgba-black-light' />
          <MDBContainer
            className='d-flex px-5 justify-content-center align-items-center'
            style={{ height: '100%', width: '100%', paddingTop: '5rem' }}
          >

            <MDBRow>

            </MDBRow>
            <MDBRow>
              <MDBCol md='12' className='mb-0 mt-1 white-text text-center'>


                <MDBBtn href="" target="" rounded
                  className="mt-4 mb-0 thisColor rounded font-weight- waves-effect text-md hover"
                  hover="" color=''>
                  <Timer />
                </MDBBtn>

                <h2 className='h2-reponsive Gira font-0 white-text text-uppercase font-weight- mb-0 pt-md-0 pt-5 '>
                  Hoshi Finance
                </h2>
                <hr className='hr-light my-2' />
                <h6 className=' mb-5 mx-12 Itim text-right white-text'>
                  <strong> Hoshi Finance is a community project with the aim of providing financial solutions and stability for its community.
                  Our Focus is to generate lasting solution to financial instability in THIS SPACE and to be the best ever solution provider financially.
                  Hoshi Finance decentralized native token is $HF and soon you will be able to farm other tokens when we launch on Pancakeswap exchange in few days.
                  Hoshi Finance currently runs only on #BSC, join us now to experience the best financial services you can ever get.</strong>

                </h6>





              </MDBCol>


            </MDBRow>
          </MDBContainer>
        </MDBView>
      </div>
    );
  }
}

export default MinimalisticIntro;