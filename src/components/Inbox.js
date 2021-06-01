import { Button ,List ,Badge,Row,Col,Container } from 'reactstrap';
import React, { Component } from 'react';
import { Table } from 'reactstrap';
import {  ButtonToggle } from'reactstrap';
import './Inbox.css';
import  { useHistory } from 'react-router';






const Inbox = () => {
    let history = useHistory();
    return (
        <Container >
      <Row>
        <Col md="3" className="left">
        <Button color="success" onClick={() =>{history.push("/Compose")}}  size="md">Compose Mail</Button>
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
        <Col md="9" className="right">
            <h3>Inbox (16)</h3>
                                     <div className="searchmail">
                                    <div class="input-append ">
                                        <input type="text" placeholder="Search Mail" class="sr-input"/>
                                        <Button color="success"  size="md">Search</Button>
                                    </div>
                                    </div>
                                <Table>
                                <thead>
        <tr>
          <th><i class="fa fa-refresh"></i> refresh <i class="fa fa-eye">&nbsp;&nbsp;</i><i class="fa fa-exclamation"></i>
           <i class="fa fa-trash-o"></i> </th>
          <th></th>
          <th> </th>
          <th><i class="fa fa-arrow-left"></i><i class="fa fa-arrow-right"></i></th>
        </tr>
      </thead>
    </Table>
            
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
        <tr>
          <th scope="row"></th>
          <td><input type="checkbox"></input></td>
          <td>Jacob</td>
         <td> <Button size="sm" color="warning">Clients</Button>{' '}&nbsp;&nbsp; Thornton Library is  </td>
          <td></td>
        </tr>
        <tr>
          <th></th>
          <td><input type="checkbox"></input></td>
          <td>Larry</td>
          
          <td>the Bird in the nest is very near </td>
          <td><i className="fa fa-paperclip"></i></td>
          <td></td>
        </tr>
        <tr>
          <th scope="row"></th>
          <td><input type="checkbox"></input></td>
          <td>Facebook</td>
        <td> <Button size="sm" color="danger">Advertisement</Button>{' '} &nbsp;&nbsp; Many desktops publishing
         </td></tr>
        <tr>
          <th scope="row"></th>
          <td><input type="checkbox"></input></td>
          <td>Monica Ryther</td>
          <td>The standard Chunk of Loero </td>
          <td></td>
        </tr>
        <tr>
          <th scope="row"></th>
          <td><input type="checkbox"></input></td>
          <td>Alex T</td>
          <td>Early Bird Catches the worm </td>
          <td></td>
        </tr>
        <tr>
          <th scope="row"></th>
          <td><input type="checkbox"></input></td>
          <td>Sabdra Derick</td>
          <td>Country to populate  </td>
          <td><i className="fa fa-paperclip"></i></td>
          <td></td>
        </tr>
        
      </tbody>
    </Table>
         </div>

        
        </Col>
      </Row>
      
    </Container>
            
        
         





        




        );
}
 
export default Inbox;