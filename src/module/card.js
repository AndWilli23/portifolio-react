import logo_html from "./assents/html.png"
import logo_css from "./assents/css.png"
import logo_js from "./assents/js.png"
import logo_react from "./assents/biblioteca.png"
import logo_boots from "./assents/bootstrap.png"


export const montaCard = () => {

    const listaTec = [

        {
            nome: "HTML", 
            descricao:"Linguagem de marcação para estruturar páginas web.", 
            logo: logo_html
        }, 

        {
            nome: "CSS", 
            descricao:"Estiliza a aparência de páginas web.", 
            logo: logo_css
        }, 

        {
            nome: "JavaScript", 
            descricao:"Linguagem de programação para comportamento dinâmico em páginas.", 
            logo: logo_js
        }, 

        {
            nome: "react", 
            descricao:"Biblioteca JavaScript para construir interfaces de usuário.", 
            logo: logo_react
        }, 


        {
            nome: "Bootstrap", 
            descricao:"Framework front-end para desenvolvimento responsivo.", 
            logo: logo_boots
        }
    ];

    try {
        const itemLista = listaTec.map((tec) => {
            return tec
        })
        return itemLista
    } catch (erro) {
        console.error("Não foi possível interar no array de objetos: ", erro);
        return []
    }

}


