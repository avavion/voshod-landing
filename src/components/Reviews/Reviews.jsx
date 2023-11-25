"use client";

import Link from "next/link";
import Container from "../Container/Container";

const Reviews = () => {
  return (
    <section className="reviews" id="reviews">
      <div className="rewiews-header">
        <Container>
          <div className="wrapper">
            <h2 className="heading">Яндекс отзывы</h2>
            <hr />
          </div>
        </Container>
      </div>

      <Container>
        <div className="reviews-content">
          <div className="reviews-inner">
            <iframe
             width="100%"
             height="100%"
             border="1px solid #e6e6e6"
             border-radius="8px"
             box-sizing="border-box"
            src="https://yandex.ru/maps-reviews-widget/231992007575?comments"
            ></iframe>
            <Link
              href="https://yandex.ru/maps/org/voskhod/231992007575/"
              target="_blank"
              box-sizing="border-box"
              text-decoration="none"
              color="#b3b3b3"
              font-size="10px"
              font-family="YS Text,sans-serif"
              padding="0 20px"
              position="absolute"
              bottom="8px"
              width="100%"
              text-align="center"
              left="0"
              overflow="hidden"
              text-overflow="ellipsis"
              display="block"
              max-height="14px"
              white-space="nowrap"
            >
              Восход на карте Казани — Яндекс Карты
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Reviews;
