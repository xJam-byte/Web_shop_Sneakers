import React from "react";
import Card from "./Card";

const arr = [
    {
      title: "Мужские Кроссовки Nike Blazer Mid Suede",
      price: '12 999',
      image: '/img/sneakers/1.jpg'
    },
    {
      title: "Мужские Кроссовки Nike Air Max 270",
      price: '16 000',
      image: '/img/sneakers/2.jpg'
    },
    {
      title: "Мужские Кроссовки Nike Blazer Mid Suede",
      price: '11 999',
      image: '/img/sneakers/3.jpg'
    },
    {
      title: "Кроссовки Puma X Aka Boku Future Rider",
      price: '14 500',
      image: '/img/sneakers/4.jpg'
    }
]
  

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
        <div className="d-flex flex-wrap">
          {
            arr.map((obj) => (
              <Card 
                title={obj.title} 
                price={obj.price} 
                image={obj.image}
                onCrossClick={() => alert('ADD Clicked')}
                onFavClick={() => alert('Liked')}
                />
            ))
          }
        </div>
    </div>
    )
}

export default Content;