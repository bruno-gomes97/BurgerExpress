import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from "./component/NavbarContainer"
import BannerContainer from "./component/BannerContainer"
import CardContainer from "./component/CardContainer"

import './App.css'

const url = "http://localhost:3000/produtos"

function App() {

  return (
    <>
      <div>
        <Navbar />
        <BannerContainer />
        <CardContainer url={url} />
      </div>
    </>
  )
}

export default App
