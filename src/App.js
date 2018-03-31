import React, {Component} from 'react';
import Routes from './routes';

export class App extends Component {

  componentDidMount(){
   const loadingPage = document.getElementById('loadingPage')
   if (loadingPage) {
     setTimeout(() => {
       loadingPage
       setTimeout(() => {
         loadingPage.outerHTML = ''
       }, 2500)
     }, 1000)
   }
  }

render() {
  return(
    <Routes></Routes>
  )
}
}

export default App;
