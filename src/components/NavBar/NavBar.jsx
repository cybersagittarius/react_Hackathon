import React, { useState } from 'react'
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';

const NavBar = () => {
    const [search, setSearch] = useState("")

    return (
        <>
        <div>
            <Navbar expand="lg">
          <Navbar.Brand href="/">Support</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Form className="form-center">
            {/* <FormControl input 
                      type="text" placeholder="Search" className="" /> */}
            <div className="form-row">
                <div className="form-group col-md-12">
                    <label>
                    Search
                    </label>
                    
                    <input type="text"
                            name="email"
                            placeholder="email"
                            className="form-control"
                            value={ search }
                            onChange={(e) => setSearch(e.target.value)}    
                            required                        
                            />                    
                </div> 
          </div>             
        </Form>
        
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item> 
          <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

        </div>
        </>         
    )
}   
export default NavBar
