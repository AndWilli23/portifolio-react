import Card from "./components/card/Card"
import AboutMe from "./components/home/about"
import Cabecalho from "./components/layout/cabecalho"
import Carrossel from "./components/projects/Carrosel"
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
