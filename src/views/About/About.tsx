import React, { useEffect, useState } from "react";
import { AboutModel } from "../../models/AboutModel";
import { useFetching } from "../../hooks/useFetching";
import AboutService from "../../services/about.service";
import "./About.scss";

const About = () => {
  const [about, setAbout] = useState<AboutModel>();
  const [fetchAbout, isAboutLoading, aboutError] = useFetching(async () => {
    const res = await AboutService.getAbout();
    setAbout(res);
  });

  useEffect(() => {
    fetchAbout();
  }, []);

  return (
    <div className="about container">
      <img src={about?.photo} className="about__photo" alt="" />
      <div className="about__text">{about?.text}</div>
    </div>
  );
};

export default About;
