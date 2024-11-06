/** @jsxImportSource @emotion/react */


import {ContainerCard, Card, iconCard} from "./card.style"


const CardBody = ({tec}) => { 

    return (
        <>
            <div css={Card}>
                <h3>{tec.nome}</h3>
                <img css={iconCard} src={tec.logo} alt={tec.nome}/>
                <p>{tec.descricao}</p>
            </div>    
        </>
    )


}

export default CardBody