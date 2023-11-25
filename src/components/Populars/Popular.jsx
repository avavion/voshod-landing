"use client";

import Link from "next/link";
import Container from "../Container/Container";
import Image from "next/image";

import image1 from "../../assets/images/16.jpg";
import image2 from "../../assets/images/19.jpg";

const POPULARS = [
  {
    id: 1,
    title: "Полировка кузова",
    text: "Профессиональная полировка кузова автомобиля от царапин",
    image_url: image1,
  },
  {
    id: 2,
    title: "Оклейка антигравийной пленкой",
    text: "Профессиональное бронирование автомобиля",
    image_url: image2,
  },
];

const Popular = () => {
  return (
    <section className="popular" id="popular">
      <div className="popular-header">
        <Container>
          <div className="wrapper">
            <h2>Популярно</h2>
          </div>
        </Container>
      </div>

      <Container>
        <div className="cards">
          {POPULARS.map((card, index) => {
            return (
              <div className="card" key={card.id}>
                <div className="card__bg">
                  <Image
                    src={card.image_url}
                    alt={card.title}
                    objectFit="cover"
                  />
                </div>
                <div className="card-info">
                  <h2>{card.title}</h2>
                  <p>{card.text}</p>
                  <Link href="/catalog" target="_blank">
                    <span>Смотреть</span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
export default Popular;
