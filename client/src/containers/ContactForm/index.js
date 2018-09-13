import React, { Component } from 'react';
import './ContactForm.css';
import {Footer, Header} from '../../components';





export class ContactForm extends Component {
  constructor(props) {
   super(props);

   this.state = {
     formFields: {name: '', email: '', subject: '', message: '' },
      fileValue: '',
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
    fileValue: '',
    fileName: '',
    nameError : false, emailError: false, subjectError: false, messageError: false,
    formSubmit: false,
    errorStatement: '',
  });
}

sendFormOff() {
  fetch('/contactUs', {
    method: 'POST',
    body: {
      name: this.state.formFields.name,
      email: this.state.formFields.email,
      subject: this.state.formFields.subject,
      message: this.state.formFields.message,
      // fileValue: this.state.fileValue
    },
  }).then(res => console.log(res))
  .catch(error => console.error('Error:', error))
.then(res => console.log('Success:', res));
}

handleFiles = (e) => {
if (window.FileReader) {
  let reader = new FileReader();
  let file = e.target.files[0];
  let fileName = file.name;
  // let files = reader.readAsDataURL(file);
  let fileSize = file.size > 5e+7;

  if (fileSize) {
      this.setState({
        errorStatement: 'Error - File size too big',
        formSubmit: false,
    });
  } else {
    this.setState({
      fileName: fileName,
      fileValue: e.target.value
    });
  }
  console.log('files', reader);

  // else  {
  //     this.setState( prevState => ({
  //       files: [...prevState.files, ...files]
  //     })
  //   }
  // console.log('files', files);
  // console.log('file', file);
  // console.log('e.target', e.target.value);
  }
  }

handleWrongfile = (e) => {
  this.setState({
      fileValue: '',
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
        fetch('/contactUs', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: this.state.formFields.name,
            email: this.state.formFields.email,
            subject: this.state.formFields.subject,
            message: this.state.formFields.message,
            // fileValue: this.state.fileValue
          }),
        }).then((response) => console.log(response))
        console.log('data', this.state.formFields);
        console.log('show',) ;
     }
}




render() {
  // console.log('form status', this.state.formSubmit);
  // console.log('file value', this.state.fileValue);
  // console.log('file name', this.state.fileName);
  // console.log('name', this.state.userName);
  // console.log('email', this.state.email);
  // console.log('subject', this.state.subject);
  // console.log('message', this.state.message);
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
           <form onSubmit={e => this.handleSubmit(e)} >
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
               <input type="file" name="upload" value={this.state.fileValue} onChange={this.handleFiles}></input>
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
