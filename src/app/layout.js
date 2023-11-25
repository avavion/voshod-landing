import "../styles/index.scss";
import Header from "@/components/Header/Header";
import { Rubik } from "next/font/google";
import Footer from "@/components/Footer/Footer";

const rubik = Rubik({ subsets: ["cyrillic"] });

export const metadata = {
  title: "Премиум детейлинг центр VOSHOD",
  description:
    "Предлагаем профессиональные услуги детейлинга в Казани. Восстановление кузова, полировка, химчистка, защитные покрытия и многое другое. Оставьте автомобиль в надежных руках наших экспертов.",
};

export default function RootLayout({ children }) {
  return (
    <html lang='ru'>
      <body className={`${rubik.className} relative`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
