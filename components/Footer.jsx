import React from "react";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.columns}>
        <div className={styles.column}>
          <ul>
            <li>Київ</li>
            <li>Львів</li>
            <li>Одеса</li>
            <li>Харків</li>
            <li>Дніпро</li>
            <li>Запоріжжя</li>
          </ul>
        </div>
        <div className={styles.column}>
          <ul>
            <li>Херсон</li>
            <li>Чернівці</li>
            <li>Івано-Франківськ</li>
            <li>Чернігів</li>
            <li>Хмельницький</li>
            <li>Тернопіль</li>
          </ul>
        </div>
        <div className={styles.column}>
          <ul>
            <li>Ужгород</li>
            <li>Кропивницький</li>
            <li>Полтава</li>
            <li>Суми</li>
            <li>Луцьк</li>
            <li>Житомир</li>
          </ul>
        </div>
        <div className={styles.column}>
          <ul>
            <li>Рівне</li>
            <li>Миколаїв</li>
            <li>Вінниця</li>
            <li>Кривий Ріг</li>
            <li>Маріуполь</li>
            <li>Черкаси</li>
          </ul>
        </div>
      </div>
      <div className={styles.column}>
        {" "}
        <div className={styles.addres}>
          <p>Україна, Житомирська обл. місто Коростишів</p>
          <p>тел. +380979900084</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
