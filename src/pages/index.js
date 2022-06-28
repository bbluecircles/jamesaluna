import React, {useEffect} from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Info from "../components/Info";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";


export default function Index() {

  useEffect(() => {
    const hours = new Date().getHours()
    const isDayTime = hours > 6 && hours < 20;

    if (isDayTime) {
      document.documentElement.style.setProperty('--color-white', '#fff');
      document.documentElement.style.setProperty('--color-black', '#000');
    } else {
      document.documentElement.style.setProperty('--color-white', '#000');
      document.documentElement.style.setProperty('--color-black', '#fff');
    }

    document.body.classList.add('loadPageAnimation');
    const titleElement = document.getElementById('hero-title');

    titleElement.classList.add('moveText');
    setTimeout(() => {
      titleElement.style.transform = "translate(-50%, -50%)";
      titleElement.classList.remove('moveText');
    }, 1000);


    setTimeout(() => {
      document.body.style.opacity = "1";
      document.body.classList.remove('loadPageAnimation');
    }, 1000)
  }, [])

  const experience = '4+';
  const current_company = 'Blufish';
  const location = 'Phoenix, AZ';
  const primary_technology = 'React JS';

  const description = "With 4+ years experience in both React and Wordpress, I can develop your next website or web application. With no limitation on UI / UX designs, I can make any design come to life. Click on any of my projects below to view my work."

  return (
    <div id="Portfolio">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Portfolio - James Luna</title>
      </Helmet>
      <Header />
      <Hero title="A front-end developer that brings elegant designs to life" name="James Aaron Luna"/>
      <Info experience={experience} current_company={current_company} location={location} primary_technology={primary_technology} description={description} />
      <Projects />
      <Footer />
    </div>
  )
}