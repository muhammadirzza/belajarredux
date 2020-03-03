import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavbarText
  } from 'reactstrap';
  import {connect} from 'react-redux'

const Header = (props) => {
const [isOpen, setIsOpen] = useState(false);

const toggle = () => setIsOpen(!isOpen);

return (
    <div>
    <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Aplikasi Parkir</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
        </Nav>
        <NavbarText>
            <Nav>{props.Durasi} Jam</Nav>  
            <Nav>Bayar:</Nav>  
            <Nav style={{fontWeight:500, fontSize:'33px'}}>Rp.{props.Harga},00</Nav>  
        </NavbarText>
        </Collapse>
    </Navbar>
    </div>
    );
}

const MapStatetoProps = (state) => {
    return {
      Harga:state.Count.harga,
      Durasi:state.Count.durasi,
    }
}

export default connect(MapStatetoProps) (Header);
