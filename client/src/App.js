import React, {Component} from 'react';
import Routes from './routes';

export class App extends Component {
  constructor(props) {
   super(props);

   this.state = {
     response: '',
   }
 }

  componentDidMount(){
   const loadingPage = document.getElementById('loadingPage')
   if (loadingPage) {
     setTimeout(() => {
       loadingPage
       setTimeout(() => {
         loadingPage.outerHTML = ''
       }, 1000)
     }, 1000)
   }

   this.callApi()
     .then(res => this.setState({ response: res }))
     .catch(err => console.log('error bish', err));
  }

  callApi = async () => {
    const response = await fetch('/hello/hello');
    const body = await response.json();
    if (response.status !== 200)
    throw Error(body.message);
    return body;
  };

render() {
  console.log('hello bish',this.state.response)
  return(
    <Routes></Routes>
  )
}
}

export default App;
