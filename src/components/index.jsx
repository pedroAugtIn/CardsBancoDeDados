import React, { useState } from "react";
import data from "./data";
import { FaRegPaperPlane } from "react-icons/fa";


export default function CardsdeImagens() {
    const [visibleLocations, setVisibleLocations] = useState(8); // Estado para controlar o número de locais exibidos

    const handleLoadMore = () => {
        setVisibleLocations(prevCount => prevCount + 8); // Aumentar o número de locais exibidos em 8
    };

    return (
        <div>
            <div className="cards-all">
                {data.slice(0, visibleLocations).map((pontoTuristico, index) => (
                    <Card key={index} pontoTuristico={pontoTuristico} />
                ))}
            </div>
            <div style={{ textAlign: "center", marginTop: "20px" }}>
                {visibleLocations < data.length && ( // Verifica se há mais locais para carregar
                    <button className="buttonsall" onClick={handleLoadMore}>Conheça mais locais</button>
                )}
            </div>
        </div>
    );
}

function Card({ pontoTuristico }) {
    const { nome, cidade_pais, link_google_maps, imagem, descrição } = pontoTuristico;

    return (
        <div className="card">
            <div><img className="card-image" src={imagem} alt={nome} /></div>
            <div className="place-name"><p>{nome}</p></div>
            <div className="place-location"><p>{cidade_pais}</p></div>
            <div className="place-description">{descrição}</div>
            <div><a className="link-google" href={link_google_maps} target="_blank" rel="noopener noreferrer">Localização <FaRegPaperPlane /></a></div>
        </div>
    );
}