import { PortfolioStyle } from "../styles/PortfolioStyle";
import PortfolioItemDescription from "../components/Portfolio/PortfolioItemDescription";
import PortfolioPicture from "../components/Portfolio/PortfolioPicture";
import TravelShare from "../assets/travelShareImage.png";
import PortfolioWebsiteImage from "../assets/portfolioWebsiteImage.png";
import MovieCatalogueImage from "../../src/assets/movieCatalogueImage.png"

function Portfolio() {
  return (
    <PortfolioStyle>
      <div className="content-centering-container">
        <div className="portfolio-title" id="portfolio">
          <p>Portfolio</p>
        </div>
        <div className="item-centering-container">
          <PortfolioPicture right="0">
            <img src={TravelShare} alt="" />
          </PortfolioPicture>
          <PortfolioItemDescription left="0">
            <p className="item-title">Travel share</p>
            <p className="item-description">
              Travel share is a social network demo web application that gives
              users the ability to make posts, comments, add friends, follow
              groups and much more. It was built with NextJS 13, and it utilizes
              CRUD operations to communicate with MongoDB through built in API
              endpoints in NextJS. It utilizes a mix of server and client
              components to optimize the speed of the website. CSS framework
              used for this project is tailwind.
            </p>
            <div className="item-buttons">
              <a
                href="https://travel-share.vercel.app/"
                className="pill-button"
              >
                Live demo
              </a>
              <a
                href="https://github.com/VojinPopovic/travel-share"
                className="pill-button"
              >
                Github
              </a>
            </div>
          </PortfolioItemDescription>
        </div>
        <div className="item-centering-container">
          <PortfolioItemDescription right="0">
            <p className="item-title">Portfolio Website</p>
            <p className="item-description">
              Welcome to my captivating portfolio website, crafted with skillful
              precision using cutting-edge technologies. This dynamic
              masterpiece is built on React, with seamless navigation provided
              by React Router. Immerse yourself in its visually stunning
              interface, brought to life through the magic of Styled Components.
              Experience innovation and creativity merged seamlessly in one
              place.
            </p>
            <div className="item-buttons">
              <a
                href="https://github.com/VojinPopovic/portfolio-final-version"
                className="pill-button"
              >
                Github
              </a>
            </div>
          </PortfolioItemDescription>
          <PortfolioPicture left="0">
            <img src={PortfolioWebsiteImage} alt="" />
          </PortfolioPicture>
        </div>
        <div className="item-centering-container">
          <PortfolioPicture right="0">
            <img src={MovieCatalogueImage} alt="" />
          </PortfolioPicture>
          <PortfolioItemDescription left="0">
            <p className="item-title">Movie catalogue</p>
            <p className="item-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ut
              qui fugit, quam maiores fuga reiciendis quis delectus iure quae
              quas modi ea asperiores culpa deserunt illum enim praesentium
              ipsam! Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Illo corporis temporibus laudantium repudiandae eveniet dolores
              itaque sed cum omnis placeat.
            </p>
            <div className="item-buttons">
              <a
                href="https://popular-movie-catalogue.vercel.app/"
                className="pill-button"
              >
                Live demo
              </a>
              <a
                href="https://github.com/VojinPopovic/movie-catalogue"
                className="pill-button"
              >
                Github
              </a>
            </div>
          </PortfolioItemDescription>
        </div>
      </div>
    </PortfolioStyle>
  );
}

export default Portfolio;
