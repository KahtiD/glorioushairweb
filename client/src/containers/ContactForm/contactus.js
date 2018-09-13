// odd function etc etc

onSubmit={e => this.handleSubmit(e)}

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


handleFiles = (e) => {

    let reader = new FileReader();
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
  // const finalForm = {
  //   userName: this.state.userName,
  //   email: this.state.email,
  //   subject: this.state.subject,
  //   message: this.state.message,
  // };
  // console.log(finalForm);

  // if (this.state.imagePreviewUrl !== null ) {
  //
  //   let newFileName = this.state.fileName.replace(/^C:\\fakepath\\/, "");
  //
  //   finalForm.attachments = [{
  //     filename: newFileName,
  //     content: this.state.imagePreviewUrl.split("base64,")[1],
  //     encoding: 'base64',
  //   }]
