import React, { Component , useContext } from 'react';
import  { useState } from 'react';
import { Button ,List ,Badge,Row,Col,Container } from 'reactstrap';
import { Table } from 'reactstrap';
import {  ButtonToggle } from'reactstrap';
import { GlobalContext } from './GlobalContext/globalContext';






const Mailbox = () => {
  const [data, setdata] = useContext(GlobalContext);
    
return (

  <Container >
  <Row>
    <Col md="3" className="left">
    <Button color="success" size="md">Compose Mail</Button>
    <br></br>
    <br></br>
    <ul class="list-group list-group-flush">FOLDERS
    <br></br>
    <li className="list-group-item"><i class="fa fa-inbox">&nbsp;&nbsp;</i>Inbox <span class="badge  bg-warning text-dark">16</span></li>
  <li className="list-group-item"><i class="fa fa-envelope">&nbsp;&nbsp;</i>Send Mail</li>
  <li className="list-group-item"><i class="fa fa-bookmark">&nbsp;&nbsp;</i>Important</li>
  <li className="list-group-item"><i class="fa fa-file">&nbsp;&nbsp;&nbsp;</i>Drafts<span class="badge bg-danger">2</span></li>
  <li className="list-group-item"><i class="fa fa-trash">&nbsp;&nbsp;</i>Trash</li>
</ul>
<br></br>
<ul class="list-group list-group-flush">CATEGORIES
  <br></br>
  <li className="list-group-item"><span className="dot-w"></span>&nbsp;&nbsp;Work</li>
  <li className="list-group-item" ><span class="dot-d"></span>&nbsp;&nbsp;Documents</li>
  <li className="list-group-item"><span class="dot-s"></span>&nbsp;&nbsp;Social</li>
  <li className="list-group-item"><span class="dot-a"></span>&nbsp;&nbsp;Advertising</li>
  <li className="list-group-item"><span class="dot-c"></span>&nbsp;&nbsp;Clients</li>
  </ul>
  <br></br>
  <ul class="list-group "> LABELS
 <p> <Button size="sm"outline color="secondary"> <i class="fa fa-tag"></i> Family</Button>{' '}
  <Button size="sm" outline color="secondary"> <i class="fa fa-tag"></i> Work</Button>{' '}
  <Button size="sm" outline color="secondary"> <i class="fa fa-tag"></i> Home</Button>{' '} </p>
  <p>
  <Button size="sm" outline color="secondary"> <i class="fa fa-tag"></i> Children</Button>{' '}
  <Button size="sm" outline color="secondary"> <i class="fa fa-tag"></i> Holidays</Button>{' '}
  </p>
  <p>
  <Button size="sm" outline color="secondary"> <i class="fa fa-tag"></i> Music</Button>{' '}
  <Button size="sm" outline color="secondary"> <i class="fa fa-tag"></i> Photography</Button>{' '}
  </p>
  


  </ul>
  
  </Col>
    <Col  md="9" className="right">
       <h3>Inbox</h3>
       <br></br><br></br>
        
     <div className="mailbox">
     <Table >
 
  <tbody>
    <tr>
      <th scope="row"></th>
      <td><input type="checkbox"></input></td>
      <td>Anna Smith </td>
      <td>  Hello Good Morning Welcome to Mailbox</td>
      <td><i className="fa fa-paperclip"></i></td>
      <td></td>
    </tr>
    {
   data.map((data) => ( 
                <tr>
                 <th scope="row"></th>
                <td><input type="checkbox"></input></td>
                 <td> { data.name } </td>
                 <td> { data.subject } </td> 

                 </tr>
            ))
        }
    </tbody>
</Table>
     </div>

    
    </Col>
  </Row>
  
</Container>);
}
 
export default Mailbox;