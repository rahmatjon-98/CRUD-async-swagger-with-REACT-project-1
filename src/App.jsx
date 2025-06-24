import { useState } from "react";
import "./App.css";

import logo from "./assets/Logo.png";
import logo1 from "./assets/Group 3.png";
import img1 from "./assets/hero-right-2 1.png";
import img2 from "./assets/6627791131 1.png";
import img3 from "./assets/0ceecfb1-7d40-11ed-b2c1-f02f74dffd40_6bfd63c7-a1b7-11ed-b2c7-f02f74dffd40 (1) 1.png";
import img4 from "./assets/7d38768cc61d0c0a1f7b6cbcc163d6d3f5c4e14f.png";
import img5 from "./assets/image.png";
import Crud from "./components/crud";

function App() {
  return (
    <div>
      <header className="flex items-center justify-between mx-5 lg:mx-24 my-2.5">
        <img src={logo} alt="" />

        <div className="text-[#73818E] text-base  items-center gap-5 hidden lg:flex ">
          <a href="">Одежда</a>
          <a href="">Обувь</a>
          <a href="">Аксессуары</a>
          <a href="">Калькулятор стоимости</a>
          <a href="">Помощь</a>
          <a href="">Подобрать размер</a>
        </div>

        <div className=" flex items-center gap-3 text-[#73818E]">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
          </button>

          <div className="flex items-center gap-3 bg-[#57BFC1] text-base px-2.5 py-1 rounded-2xl text-white ">
            <img src={logo1} alt="" />
            <div className="text-[12px] lg:text-base">
              Наш телеграм канал <br />
              <span className="text-[13px]">Telegram web app</span>
            </div>
          </div>
        </div>
      </header>

      <section className="flex items-center justify-center bg-[#E2E8F0] py-5">
        <div className="w-2/5">
          <h1 className="font-bold lg:text-5xl text-2xl ">
            Оригинальные товары от POIZON
          </h1>

          <ol className="text-[#73818E] text-[10px] lg:text-lg list-disc py-2.5">
            <li>Доставка по всей России бесплатно</li>
            <li>Официально зарегистрированное юридическое лицо</li>
            <li>Оформление и оплата заказа как в магазине</li>
            <li>Только сертифицированные товары из каталога POIZON</li>
            <li>Доставили более 10 000 посылок за 3 года</li>
          </ol>
        </div>

        <img className="w-2/5" src={img1} alt="" />
      </section>

      <section>
        <div className="text-[20px] lg:text-4xl w-3/4 m-auto py-10">
          <span>Категории.</span>{" "}
          <span className="text-[#73818E]">
            Гарантированно оригинальные товары
          </span>
        </div>

        <article className="ml-5 lg:ml-24 py-10 flex gap-5 overflow-scroll  scrollbar-hidden whitespace-nowrap">
          <div className="bg-[#F1F5F9] whitespace-normal flex items-center gap-3 basis-auto grow-0 shrink-0 w-9/10 lg:w-2/5 p-5 rounded-2xl ">
            <div>
              <p className="font-bold">Одежда</p>
              <p className="lg:text-base text-[12px] py-5">
                Откройте для себя мир роскоши и качества с одеждой от ведущих
                мировых брендов: Addidas, Timberland, The North Face и других
                знаменитых брендов
              </p>

              <button className="bg-white py-2 px-4 rounded-2xl">
                Выбрать
              </button>
            </div>

            <img className="w-2/5" src={img2} alt="" />
          </div>

          <div className="bg-[#F1F5F9] whitespace-normal flex gap-3 items-center basis-auto grow-0 shrink-0 w-9/10 lg:w-2/5 p-5 rounded-2xl ">
            <div>
              <p className="font-bold">Одежда</p>
              <p className="lg:text-base text-[12px]  py-5">
                Откройте для себя мир роскоши и качества с одеждой от ведущих
                мировых брендов: Addidas, Timberland, The North Face и других
                знаменитых брендов
              </p>

              <button className="bg-white py-2 px-4 rounded-2xl">
                Выбрать
              </button>
            </div>

            <img className="w-2/5" src={img3} alt="" />
          </div>

          <div className="bg-[#F1F5F9] whitespace-normal flex gap-3 items-center basis-auto grow-0 shrink-0 w-9/10 lg:w-2/5 p-5 rounded-2xl ">
            <div>
              <p className="font-bold">Одежда</p>
              <p className="lg:text-base text-[12px]  py-5">
                Откройте для себя мир роскоши и качества с одеждой от ведущих
                мировых брендов: Addidas, Timberland, The North Face и других
                знаменитых брендов
              </p>

              <button className="bg-white py-2 px-4 rounded-2xl">
                Выбрать
              </button>
            </div>

            <img className="w-2/5" src={img4} alt="" />
          </div>
        </article>
      </section>

      <section className="my-20 ml-5 lg:ml-20">
        <Crud />
        <Crud />
        <Crud />
      </section>

      <section className="flex lg:flex-row flex-col justify-center my-5 mx-5 lg:my-20 gap-10 ">
        <div className="bg-[#57BFC10F]  flex flex-col items-center justify-between gap-5 p-5 rounded-2xl ">
          <p className="font-bold">Рассчитай стоимость заказа прямо на сайте</p>
          <span className="border-2 text-[#57BFC180] border-[#57BFC1] py-2 px-4 rounded-2xl ">
            Цена на товар в юанях
          </span>

          <div className="flex gap-10 ">
            <p className="bg-[#57BFC126] text-[#57BFC1] py-2 px-4 rounded-2xl ">
              Обувь
            </p>{" "}
            <div className="rounded-full bg-[#57BFC1] p-1.5 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
          </div>

          <div className="font-bold text-center ">
            Итоговая стоимость: 3500₽ <br />
            <p className="text-[#050F0F80]">С учётом доставки</p>
          </div>
        </div>

        <div>
          <img src={img5} alt="" />
        </div>
      </section>

      <footer className="py-10 mb-20">
        <article className="flex lg:flex-nowrap flex-wrap justify-evenly text-[#1F2A37]">
          <div className="lg:w-1/5 w-2/5 lg:py-0 py-5 flex flex-col gap-2 lg:text-base text-[12px] ">
            <p className="font-semibold pb-5 text-black ">Помощь</p>
            <p>Частые вопросы</p>
            <p>Доставка и самовывоз</p>
          </div>

          <div className="lg:w-1/5 w-2/5 lg:py-0 py-5 flex flex-col gap-2 lg:text-base text-[12px] ">
            <p className="font-semibold pb-5 text-black ">Политика и условия</p>
            <p>Обмен и возврат</p>
            <p>Политика конфиденциальности</p>
            <p>Условия предоставления услуг</p>
          </div>

          <div className="lg:w-1/5 w-2/5 lg:py-0 py-5 flex flex-col gap-2 lg:text-base text-[12px] ">
            <p className="font-semibold pb-5 text-black ">
              Служба клиентской поддержки
            </p>
            <p>
              support@thesortage.com <br /> +7(995)788-00-58
            </p>
            <p>
              Звонки принимаются ежедневно с <br /> 10:00 до 22:00 по МСК.
            </p>
          </div>

          <div className="lg:w-1/5 w-2/5 lg:py-0 py-5 flex flex-col gap-2 lg:text-base text-[12px] ">
            <p className="font-semibold pb-5 text-black ">Адреса складов</p>
            <p>
              Москва, Кутузовский проспект 48ТЦ Галереи "Времена Года", 3 этаж.
            </p>
            <p>Время работы: ежедневно с 11:00 до 22:00.</p>
            <p>
              Московская область, деревня Воронки, 1 к. 4. ТЦ Архангельское
              Аутлет.
            </p>
            <p>Время работы: ежедневно с 10:00 до 22:00.</p>
          </div>
        </article>

        <button className="ml-10">
          <div className="flex items-center gap-3 border-2 border-gray-400 text-base px-2.5 py-1 rounded-xl  ">
            <img src={logo} alt="" />
            <div>
              Наш телеграм канал <br />
              <span className="text-[13px]">Telegram web app</span>
            </div>
          </div>
        </button>
      </footer>
    </div>
  );
}

export default App;
