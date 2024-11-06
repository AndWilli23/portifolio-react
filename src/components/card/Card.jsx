/** @jsxImportSource @emotion/react */


import { montaCard } from "../../module/card";
import CardBody from "./CardBody";
import { ContainerCard } from "./card.style";


const Card = () => {

    const tecnologias = montaCard()

    console.log(tecnologias);
    
    return(
        <> 
        <section  css={ContainerCard} id="card">
            {tecnologias.map((tec, index) => (
                <CardBody
                    key={index}
                    tec={tec}
                />
            ))} 
        </section>
           
        </>
    )
}

export default Card;