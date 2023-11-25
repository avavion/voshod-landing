"use client";

import Link from "next/link";
import Container from "../Container/Container";

const Reviews = () => {
  return (
    <section className='reviews' id='reviews'>
      <div className='rewiews-header'>
        <Container>
          <div className='wrapper'>
            <h2 className='heading'>Яндекс отзывы</h2>
            <hr />
          </div>
        </Container>
      </div>

      <Container>
        <div className='reviews-content'>
          <div className='reviews-inner'>
            <iframe
              style={{
                border: "1px solid #e6e6e6",
                borderRadius: "8px",
                boxSizing: "border-box",
                width: "100%",
                height: "100%",
              }}
              src='https://yandex.ru/maps-reviews-widget/231992007575?comments'
            ></iframe>
            <Link
              href='https://yandex.ru/maps/org/voskhod/231992007575/'
              target='_blank'
              style={{
                boxSizing: "border-box",
                textDecoration: "none",
                color: "#b3b3b3",
                fontZize: "10px",
                fontFamily: "YS Text,,sans-serif",
                padding: "0 20px",
                position: "absolute",
                bottom: "8px",
                width: "100%",
                textAlign: "center",
                left: "0",
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "block",
                maxHeight: "14px",
                whiteSpace: "nowrap",
              }}
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
