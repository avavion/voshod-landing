"use client"
import Container from "../Container/Container";
import Link from "next/link";

const Contatcs = () => {
  return (
    <section className="contacts" id="contacts">
    <div className="contacts-header">
      <Container>
        <div className="wrapper">
          <h2 className="heading">+7 (XXX)XXX-XX-XX</h2>
          <h2 className="heading-sup">ул. Лаврентьева, д. 11 </h2>
          <Link href="/contacts" target="_blank"><span>Показать на карте</span> </Link>
        </div>
      </Container>
    </div>
    </section>
  )
}

export default Contatcs