import Container from "../Container/Container";

const Hero = () => {
  return (
    <section className='hero relative' id='hero'>
      <Container>
        <div className='hero__wrapper'>
          <h1 className='hero__title'>PREMIUM DETALING CENTER</h1>
          <p className='hero__text'>Наш опыт и репутация - это самое главное</p>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
