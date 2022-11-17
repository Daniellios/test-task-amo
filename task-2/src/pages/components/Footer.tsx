import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex w-full flex-col items-start justify-between gap-[30px] px-4 pt-[40px] pb-[60px] text-[#E4E5EA] sm:flex-row sm:gap-0 sm:px-0 sm:pt-0 sm:pb-[10px]">
      {/* FOOTER_LEFT */}
      <div className="flex flex-col items-start justify-start gap-[30px] sm:flex-row sm:gap-[98px]">
        {/* О КОМПАНИИ */}
        <div className="flex flex-col gap-5">
          <h3>О компании</h3>
          <ul className="flex flex-col gap-[10px]">
            <li>
              <Link href={""}>Партнёрская программа</Link>
            </li>
            <li>
              <Link href={""}>Вакансии</Link>
            </li>
          </ul>
        </div>
        {/* МЕНЮ */}
        <div className="flex flex-col gap-5">
          <h3>меню</h3>
          <div className="flex gap-[52px]">
            <ul className="flex flex-col gap-[10px]">
              <li>
                <Link href={""}>Расчёт стоимости</Link>
              </li>
              <li>
                <Link href={""}>Услуги</Link>
              </li>
              <li>
                <Link href={""}>Виджеты</Link>
              </li>
              <li>
                <Link href={""}>Интеграции</Link>
              </li>
              <li>
                <Link href={""}>Наши клиенты</Link>
              </li>
            </ul>
            <ul className="flex flex-col gap-[10px]">
              <li>
                <Link href={""}>Кейсы</Link>
              </li>
              <li>
                <Link href={""}>Благодарственные</Link>
              </li>
              <li>
                <Link href={""}>Сертификаты</Link>
              </li>
              <li>
                <Link href={""}>Блог на Youtube</Link>
              </li>
              <li>
                <Link href={""}>Вопрос / Ответ</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* FOOTER_RIGHT */}
      <div className="flex flex-col items-start gap-[10px] text-right sm:items-end sm:gap-5 ">
        <h3>контакты</h3>
        <p className="font-medium">+7 555 555-55-55</p>
        <div className="flex gap-[11px]">
          <Image
            src={"/telegram.svg"}
            height={20}
            width={20}
            alt="header-icon-telegram"
          ></Image>
          <Image
            src={"/viber.svg"}
            height={20}
            width={20}
            alt="header-icon-viber"
          ></Image>
          <Image
            src={"/whatsapp.svg"}
            height={20}
            width={20}
            alt="header-icon-whatsapp"
          ></Image>
        </div>
        <p>Москва, Путевой проезд 3с1, к 902</p>
        <span className="mt-[50px] text-left  text-[12px] sm:text-right ">
          ©WELBEX {new Date().getFullYear()}. Все права защищены. <br />
          <a href="/" className="underline">
            Политика конфиденциальности
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
