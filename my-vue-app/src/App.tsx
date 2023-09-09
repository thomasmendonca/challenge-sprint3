import './App.css'
// import { Membros } from "./pages/Membros"
// import { NavBar } from './components/NavBar/NavBar'
// import { Buttonn } from './components/Button/Button'
// import { Header } from './components/Header/Header'
import { Welcome } from './pages/Welcome'
import { Start } from './pages/Start'
import { NextStep } from './pages/NextStep'
import { Ready } from './pages/Ready'

function App() {
  

  return (
    <>
      <Welcome></Welcome>
      <Start></Start>
      <NextStep></NextStep>
      <Ready></Ready>
      {/* <Membros/> */}
      {/* <Buttonn>
        Teste
      </Buttonn> */}
    </>
  )
}

export default App
