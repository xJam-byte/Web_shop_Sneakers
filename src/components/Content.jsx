import React from "react";
import Card from "./Card";

const Content = () => {
    return(
    <div className="content">
        <div className="d-flex align-center mb-40 ml-30 justify-between mt-40 mr-30">
            <h1>Все кроссовки</h1>
            <div className="search_block d-flex">
                <img src="/img/search.svg" alt="Search" />
                <input type="text" placeholder="Поиск..."/>
            </div>
        </div>

        {/* НУЖНО СДЕЛАТЬ КАРТЫ НОМРАЛЬНЫМИ,
            ТО ЕСТЬ ЧТО БЫ БРАТЬ ИНФУ
            О КАРТОЧКАХ ИЗ ОБЬЕКТА */}
        <div className="d-flex flex-wrap">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>

    </div>
    )
}

export default Content;