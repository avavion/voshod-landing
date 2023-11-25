"use client";

import Image from "next/image";
import Link from "next/link";

import logotype from "../../assets/images/logo.png";

import styles from "./Header.module.scss";
import Container from "../Container/Container";
import { usePathname } from "next/navigation";

const links = [
  {
    text: "Каталог",
    url: "/catalog",
  },
  {
    text: "О центре",
    url: "/about",
  },
  {
    text: "Наши проекты",
    url: "/works",
  },
  {
    text: "Прайс-лист",
    url: "/price",
  },
  {
    text: "Контакты",
    url: "/contacts",
  },
];

const Logotype = () => {
  return (
    <div className={styles.logo}>
      <Link href='/'>
        <Image
          width={90}
          src={logotype}
          alt='Логотип детейлинг сервиса VOSHOD'
          objectFit='cover'
        />
      </Link>
    </div>
  );
};

const HeaderMenu = ({ links }) => {
  return (
    <ul className={`${styles.menu} ${styles.headerMenu}`}>
      {links.map(({ text, url }, index) => {
        return (
          <li key={index}>
            <Link href={url} className={styles.link}>
              {text}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

const Header = () => {
  const path = usePathname();

  const classNames = `${styles.header}${
    path === "/" ? " absolute t-0 r-0 l-0" : ""
  }`;

  return (
    <header className={classNames} id='header'>
      <Container classNames={styles.wrapper}>
        <nav className={styles.nav}>
          <Logotype />
          <HeaderMenu links={links} />
        </nav>

        <div className={styles.headerMenu}>
          <Link href='tel:+78432538242' className='header__action'>
            +7 (843) 253-82-42
          </Link>
        </div>
      </Container>
    </header>
  );
};

export default Header;
