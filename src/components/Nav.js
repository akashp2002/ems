import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function Nav() {
  return (
    <>
       <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="https://th.bing.com/th/id/OIP.z-sXA2a9P7Ess_BiRIERcAHaHa?pid=ImgDet&rs=1"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            EMS
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default Nav