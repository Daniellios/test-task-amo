import React from "react";

const Content = () => {
  return (
    <main className="mt-[40px] ">
      <div className="mobile-bg flex w-full flex-col items-center justify-center gap-[45px] px-4 py-8 sm:mt-0 sm:flex-row sm:items-start sm:justify-between sm:gap-0 sm:bg-none sm:px-0">
        {/* CONTENT_LEFT */}
        <div className="flex w-full flex-col items-start gap-[24px] pt-8 text-left sm:gap-[30px] sm:pt-0">
          <h1 className="text-3xl sm:text-5xl">
            Зарабатывайте
            <br /> больше
            <br />
            <span className="bg-gradient-to-r from-[#FCB045] to-[#FF3F78] bg-clip-text font-extrabold text-transparent">
              с WELBEX
            </span>
          </h1>
          <h2>
            Развиваем и контролируем <br /> продажи за вас
          </h2>
        </div>
        {/* CONTENT_RIGHT */}
        <div className="flex w-full flex-col items-start gap-5 sm:items-end ">
          <h2 className="text-[18px] sm:mb-10 sm:self-end sm:text-right">
            Вместе с 
            <span className="bg-gradient-to-tl from-[#FCB045] to-[#FD1D1D] bg-clip-text font-extrabold uppercase text-transparent">
              бесплатной <br /> консультацией
            </span>{" "}
            мы дарим:
          </h2>
          <div className="grid grid-cols-2 justify-end gap-[30px] text-right sm:mb-[61px]">
            <div className="flex flex-col gap-2">
              <h2 className="content-grid-text ">
                <div className="text-line"></div>Виджеты
              </h2>
              <p className="hidden sm:block">
                30 готовых <br /> решений
              </p>
            </div>
            <div className="flex min-w-fit flex-col gap-2 ">
              <h2 className="content-grid-text">
                <div className="text-line"></div>Dashboard
              </h2>
              <p className="hidden sm:block">
                с показателями <br /> вашего бизнеса
              </p>
            </div>
            <div className="flex min-w-fit flex-col gap-2">
              <h2 className="content-grid-text">
                <div className="text-line"></div>Skype Аудит
              </h2>
              <p className="hidden sm:block">
                отдела продажи <br />
                CRM системы
              </p>
            </div>
            <div className="flex min-w-fit flex-col gap-2">
              <h2 className="content-grid-text">
                <div className="text-line"></div> 35 дней
              </h2>
              <p className="hidden sm:block">
                использования
                <br /> CRM
              </p>
            </div>
          </div>

          <button className="hidden max-w-[262px] bg-[#4077F3]  py-[21px] px-[35px] text-center text-inherit sm:block">
            Получить консультацию
          </button>
        </div>
      </div>
    </main>
  );
};

export default Content;
