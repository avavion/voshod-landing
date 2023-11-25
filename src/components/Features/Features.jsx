"use client";

import Link from "next/link";
import Container from "../Container/Container";
import Image from "next/image";
i

import image1 from "../../assets/images/quarant.svg";
import image2 from "../../assets/images/settings.svg";
import image3 from "../../assets/images/top.svg";
import image4 from "../../assets/images/team.svg";
import image5 from "../../assets/images/tools.svg";
import Divider from "../Divider/Divider";

const FEATURES = [
  {
    id: 1,
    title: "ГАРАНТИЯ СОХРАННОСТИ ВАШЕГО АВТО",
    text: "Мы контролируем процесс детейлинга «от» и «до»",
    image_url: image1,
  },
  {
    id: 2,
    title: "СОВРЕМЕННОЕ НЕМЕЦКОЕ ОБОРУДОВАНИЕ",
    text: "Передовые технологии в борьбе за идеальны вид авто",
    image_url: image2,
  },
  {
    id: 3,
    title: "КАЧЕСТВЕННЫЕ МАТЕРИАЛЫ И ПОКРЫТИЯ",
    text: "Мы доверяем только проверенным брендам",
    image_url: image3,
  },
  {
    id: 4,
    title: "КОМАНДА СПЕЦИАЛИСТОВ ВЫСОКОГО КЛАССА",
    text: "Сами обучаем мастеров технологиям детейлинга",
    image_url: image4,
  },
  {
    id: 5,
    title: "ПОСТОЯННАЯ ТЕХПОДДЕРЖКА И ПОМОЩЬ",
    text: "Поможем вам в случае обнаружения технической неисправности",
    image_url: image5,
  },
];

const Features = () => {
  return (
    <section className="features">
      <div className="features-header">
        <Container>
          <div className="wrapper">
            <h2>Преимущества</h2>
          </div>
        </Container>
      </div>

      <Container>
        <div className="cards">
          {FEATURES.map((feature, index) => {
            return (
              <div className="card" key={feature.id}>
                <Image
                  src={feature.image_url}
                  alt={feature.title}
                  objectFit="cover"
                  className="card-img"
                />
                <div className="card-info">
                  <h2>{feature.title}</h2>
                  <Divider/>
                  <p>{feature.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
export default Features;
