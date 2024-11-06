/** @jsxImportSource @emotion/react */

import React from "react";
import useCarrossel from "./MoverCarrossel";
import { itensCarrossel } from "../../module/itensCarrossel";
import seta_esquerda from "../../../public/seta-esquerda.png"
import seta_direita from "../../../public/seta-direita.png"
import { ContainerProjeto, Setas, TituloCarrossel, TextoCarrossel, tituloContainer, BotaoVerdeEscuro} from "./Carrossel.style";



const Carrossel = () => {
    const itens = itensCarrossel();
    const { mudarIndex, moverCarrossel } = useCarrossel(itens.length);

    return (
        <>
            <h2 css={tituloContainer} id="projetos">Meus projetos: </h2>

            <div css={ContainerProjeto}>
                <button  css={Setas} onClick={() => moverCarrossel(-1)}><img src={seta_esquerda} alt="seta para esquerda"/></button>
                <div css={""}>
                    {itens.map((item, index) => (
                        <div 
                            key={index} 
                            style={{ display: index === mudarIndex ? 'block' : 'none' }} 
                        >
                            <h2 css={TituloCarrossel}>{item.titulo}</h2>
                            <p css={TextoCarrossel}>{item.descricao}</p>
                            <a css={BotaoVerdeEscuro} href={item.link} target="_blank" rel="noopener noreferrer">Visitar {item.titulo}</a>   
                        </div>
                    ))}
                </div>
                <button css={Setas} onClick={() => moverCarrossel(1)}><img src={seta_direita} alt="seta para esquerda"/></button>
            </div>
            ;
                
        </>
    )      
}

export default Carrossel;
