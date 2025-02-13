import {HashRouter, Route,Routes} from 'react-router-dom'
import Home from './components/Home/Home';
import Header from './components/Header/Header';

function App() {

  return (
    <>
      <HashRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/drag-drop' element={<Home/>}/>
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
