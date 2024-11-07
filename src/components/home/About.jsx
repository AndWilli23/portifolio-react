/** @jsxImportSource @emotion/react */


import EfeitoEscrita from "./WriteEffect"
import { ContainerAboutMe, AboutConteudo, TextoConteudo, ConteudoFoto, containerPrincipal, containerConteudoTexto, BotaoVerde, BotaoVerdeEscuro, ContainerButtons} from "./About.style";
import foto from "../../../public/foto.png"
import { download } from "../../module/download";





const AboutMe = () => {


    return(
        <> 
            <main css={containerPrincipal} id="home">
                <section css={ContainerAboutMe}>
                    <div css={AboutConteudo}>
                        <div css={containerConteudoTexto}>
                            <EfeitoEscrita  texto={"  Hi, sou o Anderson Willian!"} speed={100}></EfeitoEscrita>

                            <p css={TextoConteudo}>Sou um programador front-end com um ano de experiência. Estou cursando Engenharia de Software e tenho habilidades em tecnologias como CSS, JavaScript, HTML e React. Tenho uma boa familiaridade com Bulma, Emotion e Bootstrap, o que me permite criar interfaces responsivas e atraentes. Sou apaixonado por aprender e sempre busco aprimorar minhas habilidades para desenvolver soluções eficientes e funcionais.</p>
                        </div>

                        <img css={ConteudoFoto} src={foto} alt="" />
                    </div>

                    <div css={ContainerButtons}>
                        <div>
                            <button onClick={download} css={BotaoVerde}>Baixar Curriculo</button>
                        </div>

                        <div>
                            <button css={BotaoVerdeEscuro}>Contados</button>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default AboutMe;