import Carousel from "../../components/Carousel/Carousel";
import "./Home.css";

import Container from "../../components/shared/Container/Container";

function Home(props) {
  return (
    <div className="home-area">
      <div className="home-banner-image">
        <img
          className="banner"
          src="https://media.istockphoto.com/photos/happy-man-training-with-his-dog-in-the-nature-picture-id1344938288?b=1&k=20&m=1344938288&s=170667a&w=0&h=WclRPHs4JmUyZ-Fj5hYnWxeZfU12awWieZQiVAYsEIw="
          alt="banner"
        />
        <div className="headliner">Every Dog Deserves a Home.</div>
      </div>
      <div className="brand-statement">
        <div className="statement">
        The dog spot is a project whose motivation is to give every dog a second chance. We strive to find loving homes for homeless and abandoned dogs by promoting adopting animals from local animal shelters across India and partnering with animal placement organizations. Here, feel free to check available dogs or add a ready to be adopted to our site. 
        </div>
      </div>
      <div className="carousel">
        <div className="adopted">Adopted Dogs</div>
        <Carousel />
      </div>
      <Container />
    </div>
  );
}

export default Home;
