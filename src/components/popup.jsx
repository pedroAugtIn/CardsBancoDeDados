import { useState } from "react";
import "./styles.css";

export default function PopupDescrição() {
    const [isOpen, setIsOpen] = useState(true);

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <div>
            {isOpen && (
                <dialog open>
                    <h1>Guia de Viagens!🗺️</h1>
                    <p>"Explore o mundo através de 25 cartões personalizados! 🌍✈️<br/> Este projeto incrível apresenta uma seleção cuidadosamente escolhida de pontos turísticos de destaque ao redor do globo.<br/> 
                    De maravilhas naturais a ícones culturais, cada cartão oferece uma visão única e cativante de lugares incríveis para visitar. 
                    Navegue pela diversidade do nosso planeta, mergulhe em histórias fascinantes e inspire-se para sua próxima aventura. 
                    Com imagens deslumbrantes, descrições envolventes e links úteis para o Google Maps, este projeto promete despertar sua curiosidade e alimentar sua sede de descoberta. 
                    Venha embarcar nesta jornada emocionante ao redor do mundo! 🗺️✨"</p>
                    <button className="fechar" onClick={handleClose}>Vamos lá!</button>
                </dialog>
            )}
        </div>
    );
}