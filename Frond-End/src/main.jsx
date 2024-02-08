
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Provider} from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import store from "./reduce/Store.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Provider store={store}>
    <App />
   </Provider> 
  </BrowserRouter>,
)
