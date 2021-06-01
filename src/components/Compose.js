import React, { Component } from 'react';
import {  ButtonToggle } from'reactstrap';
import { GlobalContext } from "./GlobalContext/globalContext";
import { Button ,List ,Badge,Row,Col,Container } from 'reactstrap';
import {Redirect, useHistory } from 'react-router'
import { Link } from "react-router-dom";
import { useContext , useState} from 'react'

const Compose = () => {
    const[name,setName]=useState("");
    const[subject,setSub]=useState("");

    const [data,setdata]=useContext(GlobalContext);

    function handledata(e){
        e.preventDefault();
        
    }
    const sendmail = (e) => {


        setdata([...data, { name: name, subject: subject }])
        console.log(data);
        return <Redirect to = "/Mailbox/" / >
    }
    let history = useHistory();
    return (
       <Container>
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
               <div className="col-md-9">
                <h3>Compose Mail</h3>
                <br></br>
                <br></br>
                <form onSubmit={handledata}>
                <div class="form-group row"><label class="col-sm-2 col-form-label">To:</label>
            <div class="col-sm-10"><input type="text" class="form-control" placeholder="Enter to name" onChange={(e)=>setName(e.target.value)}/></div>
        </div>
        <div class="form-group row"><label class="col-sm-2 col-form-label">Subject:</label>
            <div class="col-sm-10"><input type="text" class="form-control" onChange={(e)=>setSub(e.target.value)}/>
            </div>
        </div>

     
        <div class="tool">

            <ul>

                <li class="fa fa-magic"></li>
                <li class="fa fa-bold"></li>
                <li class="fa fa-underline"></li>
                <li class="fa fa-eraser"></li>
                <li class="fa fa-font"></li>
                <li class="fa fa-list-ul"></li>
                <li class="fa fa-list-ol"></li>
                <li class="fa fa-indent"></li>
                <li class="fa fa-table"></li>
                <li class="fa fa-link"></li>
                <li class="fa fa-photo"></li>
                <li class="fa fa-video-camera"></li>
                <li class="fa fa-arrows-alt"></li>
                <li class="fa fa-code"></li>
                <li class="fa fa-question"></li>


            </ul>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        
        <h3>Type your Mail Here </h3>
                <textarea class="form-control" formControlName="mailcon" id="mailcon" name="mailcon" rows="7" cols="120"> </textarea>
                




                <Link to = "/Mailbox" > 

   <Button type="submit" color="success" onClick={sendmail}>Send Mail</Button>
                 </Link>
</form>
               </div>

               



               </Row>
       </Container>
    );
  
}

export default Compose;
