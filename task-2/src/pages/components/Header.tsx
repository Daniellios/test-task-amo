import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="fixed top-0 w-full items-center bg-[#0E1014] px-4 py-[22px] sm:relative sm:bg-transparent sm:py-0 sm:px-0">
      <div className="flex w-full md:justify-center lg:justify-between">
        {/* HEADER_RIGHT */}
        <div className="flex w-full gap-[20px] lg:gap-[50px]">
          <div className="hidden w-full flex-col gap-[14px] sm:block md:max-w-[140px]">
            <Image
              src={"/logo_welbex.svg"}
              width={140}
              height={24}
              alt="welbex logo"
            ></Image>
            <span className="hidden text-left text-[10px] font-light sm:block">
              крупный интегратор CRM <br /> в Росcии и ещё 8 странах
            </span>
          </div>
          <ul className="flex w-full justify-between gap-4 text-[12px] uppercase sm:items-start sm:justify-end sm:gap-[30px] sm:capitalize md:w-1/4 md:justify-start">
            <Link className="font-medium" href={""}>
              Услуги
            </Link>
            <Link className="font-medium " href={""}>
              Виджеты
            </Link>
            <Link className="text-base font-medium" href={""}>
              Интеграции
            </Link>
            <Link className="font-medium" href={""}>
              Кейсы
            </Link>
            <Link className="hidden font-medium sm:block" href={""}>
              Сертификаты
            </Link>
          </ul>
        </div>

        {/* HEADER_LEFT */}
        <div className="hidden w-full  items-start justify-end md:flex  md:gap-[10px] md-lg:gap-[30px] ">
          <p className="mr-[17px] hidden font-medium md:block md:text-right md-lg:text-left">
            +7 555 555-55-55
          </p>
          <Image
            src={"/telegram.svg"}
            height={20}
            width={20}
            alt="header-icon-telegram"
          ></Image>
          <Image
            quality={100}
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
      </div>
    </header>
  );
};

export default Header;
