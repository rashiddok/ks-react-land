import { useEffect, useState, Fragment } from "react";
import { AboutModel } from "../../utils/models/AboutModel";
import { useFetching } from "../../hooks/useFetching";
import { getAbout } from "../../services/about.service";
import "./About.scss";
import Loader from "../../components/UI/Loader/Loader";

const About = () => {
  const [about, setAbout] = useState<AboutModel>();
  const [fetchAbout, isAboutLoading, aboutError] = useFetching(async () => {
    const res = await getAbout();
    setAbout(res);
  });

  useEffect(() => {
    fetchAbout();
  }, []);

  if (isAboutLoading || aboutError) {
    return <Loader />;
  }

  return (
    <div className="about container">
      <img src={about?.photo} className="about__photo" alt="" />
      <div className="about__text">{about?.text}</div>
    </div>
  );
};

export default About;
