import React, { Component, useEffect, useState } from "react";
import Clock from "../clock/Clock";
import styles from './Main.module.css';
import Hanmadi from "../hanmadi/Hanmadi";
import Form from "../form/Form";
import FloatingButton from "../floatingButton/FloatingButton";
import { DiApple } from "react-icons/di";
import Card from "../card/Card";
import Search from "../search/Search";

export default function Main() {
  let name;
  const [userName, setUserName] = useState();
  const jsonData = require('../../data.json');
  const tmpData = JSON.parse(JSON.stringify(jsonData));
  const data = tmpData[Math.floor(Math.random() * tmpData.length)];
  // const randomBg = () => {
  //   return `images/background/${bg[Math.floor(Math.random() * bg.length)]}`;
  // };

  // const randomCg = () => {
  //   return `images/calligraphy/${cg[Math.floor(Math.random() * bg.length)]}`;
  // };

  const handleChange = e => {
    name = e.target.value;
  };

  const randomData = () => {
    const jsonData = require('../../data.json');
    const data = JSON.parse(JSON.stringify(jsonData));
    return data[Math.floor(Math.random() * data.length)];
  };

  const handleSubmit = e => {
    e.preventDefault();
    setUserName(name);
    localStorage.setItem("name", name);
  };

  useEffect(() => {
    const userName = localStorage.getItem("name");
    setUserName(userName);
  })

  return (
    <div className={styles.container} style={{ backgroundImage: `url(${'images/background/' + data.bg})` }}>
      <Clock/>
      {!userName ? <Form handleChange={handleChange} handleSubmit={handleSubmit}/> : <Hanmadi name={userName} title={data.title} path={'images/calligraphy/' + data.cg} youtube={data.youtube} description={data.description}/>}
      {/* <FloatingButton Icon={DiApple} place="left" />
      <FloatingButton Icon={DiApple} place="right" /> */}
    </div>
  );
}
