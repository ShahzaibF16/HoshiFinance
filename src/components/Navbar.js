import  React  from "react";
import 'react-bootstrap'
import Nav from 'react-bootstrap/Nav';


class Navbar extends React.Component {
    render(){
    return (
      <div>
          <Nav variant="tabs" defaultActiveKey="/home">
  <Nav.Item>
    <Nav.Link href="/home">Home</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="./About.js">About</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="disabled" disabled>
      Projects
    </Nav.Link>
  </Nav.Item>
</Nav>
      </div>
    )}
  }
  
  export default Navbar;
