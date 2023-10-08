"use client";

import Container from "../Container/Container";
import Image from "next/image";

import image1 from "../../assets/images/12.jpg";
import image2 from "../../assets/images/11.jpg";


const CARDS = [
  {
    id: 1,
    title: "Комплекс",
    text: "Детейлинг - комплекс высокотехнологических профессиональных операций над интерьером и экстерьером транспортных средств, которые включают в себя: восстановление любых поверхностей - с целью придания первозданного и безупречного внешнего вида ",
    image_url: image1,
  },
  {
    id: 2,
    title: "Высокотехнологичные решения для авто",
    text: " С целью сохранения превосходных визуальных и потребительских характеристик на максимально длительный срок, а так же облегчение ухода; и непосредственно всесторонний регулярный уход - с цельюобслуживания",
    image_url: image2,
  },
];

const Detailing = () => {
  return (
    <section className="detailing" id="detailing">
      <div className="detailing-header">
        <Container>
          <div className="wrapper">
            <h2>Детейлинг</h2>
          </div>
        </Container>
      </div>

      <Container>
        <div className="cards">
          {CARDS.map((cards, index) => {
            return(
              <div className="card">
                <Image
                src={cards.image_url}
                alt={cards.title}
                className="card-img"
                />
                <div className="card-info">
                <h2>{cards.title}</h2>
                <p>{cards.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Detailing;
