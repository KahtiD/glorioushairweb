import React, { Component } from 'react';
import './ContactForm.css';
import {Footer, Header} from '../../components';




export class ContactForm extends Component {
  constructor(props) {
   super(props);

   this.state = {
      userName : '',
      email: '',
      subject: '',
      message: '',
      userNameError : false,
      emailError: false,
      subjectError: false,
      messageError: false,
      errorWords: '',
      formSubmit: false,
      formValid: false,
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

handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

validateForm = () => {

  let isError = false;

  const errors = {};

  if (this.state.userName.length < 2) {
      isError = true;
      console.log(isError);
  }

  if (this.state.email.indexOf("@") === -1) {
    isError = true;
    console.log(isError);
  }

  if (this.state.subject.length < 2) {
      isError = true;
      console.log(isError);
    }

  if (this.state.message.length < 2) {
      isError = true;
      console.log(isError);
   }

    this.setState({
      ...this.state,
      ...errors
    });

  return isError;

};

handleSubmit(e) {

      e.preventDefault();

      const err = this.validateForm();
      if (err) {

        if (this.state.userName.length < 2) {
          this.setState({
             userNameError: true,
          });
        }

        if (this.state.email.indexOf("@") === -1) {
          this.setState({
             emailError: true,
          });
        }


        if (this.state.subject.length < 2) {
          this.setState({
             subjectError: true,
          });
          }

         if (this.state.message.length < 2) {
           this.setState({
              messageError: true,
           });
          }
      }

      if (!err) {

      const finalForm = {
        userName: this.state.userName,
        email: this.state.email,
        subject: this.state.subject,
        message: this.state.message,
      };
      console.log(finalForm);

      if (this.state.imagePreviewUrl) {

        let newFileName = this.state.fileName.replace(/^C:\\fakepath\\/, "");

        finalForm.attachments = [{
          filename: newFileName,
          content: this.state.imagePreviewUrl.split("base64,")[1],
          encoding: 'base64',
        }]
     }

      this.handleFormClear(e);
      this.setState({
        formSubmit: true,
      });
    }
  }



    handleFormClear = (e) => {
    e.preventDefault();
    this.setState({
      userName: '',
      email: '',
      subject: '',
      message: '',
      showFilename: '',
      userNameError : false,
      emailError: false,
      subjectError: false,
      messageError: false,
      formSubmit: false
    });
  }


  handleFiles = (e) => {

      let reader = new FileReader();
      let fileName = e.target.value;
      let file = e.target.files[0];
      let newFileName = fileName.replace(/^C:\\fakepath\\/, "");

      if (newFileName.length > 18) {
        let last15chars = newFileName.substring(newFileName.length-15, newFileName.length);
        let first8chars = newFileName.substring(0, 8);
        newFileName = first8chars + "..." + last15chars
      }

      let fileSize = e.target.files[0].size > 5e+7;

      if (fileSize) {
        this.setState({
          errorStatement: 'Error - File size too big'
        });
      } else {

        reader.onloadend = () => {

          this.setState({
            file: file,
            fileName: fileName,
            newFileName: newFileName,
            imagePreviewUrl: reader.result,
            errorStatement: false
          });
        }

        reader.readAsDataURL(file)
      }
    }

handleWrongfile = (e) => {
  let showFilename = '';
  this.setState({newFileName: showFilename});
  this.setState({
      showFilename: ''
  });
}

handleHidemessage = (e) => {
  let showFilename = '';
  this.setState({newFileName: showFilename});
  this.setState({
    formSubmit: false,
    showFilename: ''
  });
}


render() {

  return(

  <div>
    <div className="body">
      <Header moveBody={this.menuShow.bind(this)} showMenu={this.state.showMenu} ></Header>
      <div className="containerBody">
      {!this.state.formSubmit ?
          <div className="formContainer">
          <div className="form">
            <div className="errorArea">
              <h1 className="cTitle">Contact Us</h1>
              {this.state.emailError &&
              <p className="errorText">Please make sure your fields and <br/> email address are valid.</p> }
            </div>
           <form onSubmit={e => this.handleSubmit(e)}>
             <textarea className={this.state.userNameError ? "errorStyle" : "name"} name="userName" placeholder="Name" value={this.state.userName} onChange={e => this.handleChange(e)} required></textarea>
             <textarea className={this.state.emailError ? "errorStyle" : "email"} name="email" placeholder="Email" value={this.state.email} onChange={e => this.handleChange(e)} required></textarea>
             <textarea className={this.state.subjectError ? "errorStyle" : "subject"} name="subject" placeholder="Subject" value={this.state.subject} onChange={e => this.handleChange(e)} required></textarea>
             <textarea className={this.state.messageError ? "errorStyle2" : "message"} name="message" placeholder="Message" value={this.state.message} onChange={e => this.handleChange(e)} required></textarea>
             <div className="uploadArea">
               <p className="caption">Attach Inspo Picture:</p>
               <input style={{display: "inline-block"}} type="file" name="upload" value={this.state.newFileName} onChange={this.handleFiles}></input>
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
