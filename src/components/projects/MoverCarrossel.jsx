import { useState, useEffect } from "react";

const useCarrossel = (totalItems) => {
    const [mudarIndex, setMudarIndex] = useState(0);

    useEffect(() => {
        setMudarIndex(0);
    }, []);  

    
    const moverCarrossel = (direcao) => {
        setMudarIndex((prevIndex) => {

            let newIndex = prevIndex + direcao;

            if (newIndex < 0) return totalItems - 1;  
            if (newIndex >= totalItems) return 0;     

            return newIndex;
        });
    };

    return { mudarIndex, moverCarrossel };
};

export default useCarrossel;
