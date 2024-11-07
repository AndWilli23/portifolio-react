import Card from "./components/card/Card"
import AboutMe from "./components/home/About"
import Cabecalho from "./components/layout/Cabecalho"
import Projetos from "./components/projects/Projetos"
import Rodape from "./components/layout/rodape"


function App() {

    return(
      <>
        <Cabecalho/>
          <AboutMe/>
            <Card/>
          <Projetos/>
        <Rodape/>
      </>
      
    )
}

export default App
