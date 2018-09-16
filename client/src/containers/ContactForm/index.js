import React, { Component } from 'react';
import './ContactForm.css';
import {Footer, Header} from '../../components';
// import axios from 'axios';




export class ContactForm extends Component {
  constructor(props) {
   super(props);

   this.state = {
     formFields: {name: '', email: '', subject: '', message: '' },
      fileValue: null,
      fileName: '',
      nameError : false, emailError: false, subjectError: false, messageError: false, errorWords: '',
      formSubmit: false, formValid: false,
      successCover: '',
      showMenu : false,
   };
   this.handleSubmit = this.handleSubmit.bind(this)
}


menuShow = () => {
console.log(this.state.showMenu)
  this.setState({
    showMenu : !this.state.showMenu
  });
}

handleChange(e) {
  let formFields = {...this.state.formFields};
      formFields[e.target.name] = e.target.value;
    this.setState({
      formFields
    });
  };

  handleFormClear = (e) => {
  e.preventDefault();
  this.setState({
    formFields: { name: '', email: '', subject: '', message: '' },
    fileName: '',
    fileValue: null,
    nameError : false, emailError: false, subjectError: false, messageError: false,
    formSubmit: false,
    errorStatement: '',
  });
}

sendFormOff() {
  const data = new FormData();
  data.append('file', this.state.fileValue );
  data.append('name', this.state.formFields.name);
  data.append('email', this.state.formFields.email);
  data.append('subject', this.state.formFields.subject);
  data.append('message', this.state.formFields.message);

  fetch('/contactUs', {
    method: 'POST',
    body: data,
  }).then((response) => {
          console.log('ResponseLog', response)
          // this.setState({formSubmit: true})
  })
  .catch((err) => {console.log('Error', err)} )
}

handleFiles = (e) => {
if (window.FileReader) {
//check if it works
  if (e.target.files[0].size > 5e+7) {
      this.setState({
        errorStatement: 'Error - File size too big',
        formSubmit: false,
    });
  } else {
    this.setState({
      fileName: e.target.files[0].name,
      fileValue: e.target.files[0],
    });
   }
 }
}

handleWrongfile = (e) => {
  this.setState({
      fileName: '',
  });
}

handleHidemessage = (e) => {
  this.setState({
    formSubmit: false,
  });
}

handleSubmit(e) {
      e.preventDefault();
      let isError = false;
        if (this.state.formFields.name.length < 2) {
          this.setState({ nameError: true });
          isError = true;
        }
        if (this.state.formFields.email.indexOf("@") === -1) {
          this.setState({ emailError: true });
          isError = true;
        }
        if (this.state.formFields.subject.length < 2) {
          this.setState({ subjectError: true });
          isError = true;
        }
        if (this.state.formFields.message.length < 2) {
         this.setState({ messageError: true });
         isError = true;
        }
      if (!isError) {
        this.handleFormClear(e);
        this.setState({ formSubmit: true });
        this.sendFormOff();
     }
}

render() {
  return(
  <div>
    <div className="body">
      <Header moveBody={this.menuShow.bind(this)} showMenu={this.state.showMenu} ></Header>
      <div className="containerBody">
      {this.state.formSubmit === false ?
          <div className="formContainer">
          <div className="form">
            <div className="errorArea">
              <h1 className="cTitle">Contact Us</h1>
              {this.state.emailError || this.state.messageError ?
              <p className="errorText">Please make sure your fields and <br/> email address are valid.</p> : null}
            </div>
           <form onSubmit={e => this.handleSubmit(e)} encType='multipart/form-data'>
             <textarea className={this.state.nameError ? "errorStyle" : "name"} name="name" placeholder="Name" value={this.state.formFields.name} onChange={(e) => this.handleChange.call(this, e)} required></textarea>
             <textarea className={this.state.emailError ? "errorStyle" : "email"} name="email" placeholder="Email" value={this.state.formFields.email} onChange={(e) => this.handleChange.call(this, e)} required></textarea>
             <textarea className={this.state.subjectError ? "errorStyle" : "subject"} name="subject" placeholder="Subject" value={this.state.formFields.subject} onChange={(e) => this.handleChange.call(this, e)} required></textarea>
             <textarea className={this.state.messageError ? "error" : "message"} name="message" placeholder="Message" value={this.state.formFields.message} onChange={(e) => this.handleChange.call(this, e)} required></textarea>
             <div className="uploadArea">
               <p className="caption">Attach Inspo Picture:</p>
               <div className="uploadThings">
                 <button className="uploadButton">Upload</button>
                 <p className="fileName">{this.state.fileName}</p>
                 {this.state.fileName && <button className="removeFile" onClick={this.handleWrongfile}>X</button>}
               </div>
               <input type="file" name="upload" onChange={this.handleFiles} />
               {this.state.errorStatement  && <p className="errorText2">{this.state.errorStatement}</p>}
             </div>
             <input type="submit" className="contactSubmit" value="Send" ></input>
           </form>
          </div>
        </div>

        :

        <div className="submitcover">
              <div style={{width: "100%", height: "35px"}}>
              <button style={{width: "50px", height: "50px", background: "none", border: "none", fontSize: "20px", float: "right"}} onClick={this.handleHidemessage}>X</button>
              </div>
              <div style={{marginTop: "30%"}}>
                <h1 style={{marginBottom: "50px", fontSize: "45px"}}>Thank you for contacting us</h1>
                <p style={{fontSize: "20px", color: "#281560"}}>We've recieved your enquiry and we'll get back to you soon!</p>
              </div>
      </div>
        }
    <Footer></Footer>
    </div>
  </div>
</div>

    );
  }
}

export default ContactForm;
