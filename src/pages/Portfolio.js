import { PrezentacijaStyle } from "../styles/PrezentacijaStyle";
import PortfolioItemDescription from "../components/Portfolio/PortfolioItemDescription";
import PortfolioPicture from "../components/Portfolio/PortfolioPicture";
import SlikaJedan from "../assets/PrezentacijaSlikaJedan.jpg";
import SlikaDva from "../assets/PrezentacijaSlikaDva.jpg";
import SlikaTri from "../../src/assets/PrezentacijaSlikaTri.jpg";

function Portfolio() {
  return (
    <PrezentacijaStyle>
      <div className="content-centering-container">
        <div className="portfolio-title" id="portfolio">
          <p>Prezentacija</p>
        </div>
        <div className="item-centering-container">
          <PortfolioPicture right="0">
            <img src={SlikaJedan} alt="" />
          </PortfolioPicture>
          <PortfolioItemDescription left="0">
            <p className="item-title">Uvod</p>
            <p className="item-description">
              Kada je krenula serijska proizvodnja automobila niko se nije
              brinuo o aerodinamici I o tome kako ona moze uticati na
              performanse I na ekonomicnost. Kako je vreme prolazilo ljudi su
              hteli brze automobile, a da bi to postigli koristili su jace
              motore, medjutim, ubrzo su shvatili da stvar nije toliko
              jednostavna. Primetili su da se pri vecim brzinama stvaraju sumovi
              koji su cinili voznju neprijatnom, kao I da je potrosnja postala
              goriva postala mnogo veca. U to vreme je doslo I do procvata
              industrije aviona koja je imala iste probleme I tada su inzenjeri
              krenuli da razmisljaju o aerodinamici. prvi automobil koji je
              napravio prekretnicu je bio Saab 92, za kog su inzenjeri prvi put
              koristili aerotunel za testiranje automobile. On je mogao voziti
              brze uz manju potrosnju, bez upotrebe vecih motora. Nakon toga su
              aerotuneli krenuli da se koriste u auto industriji.
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
            <p className="item-title">Otpor vazduha</p>
            <p className="item-description">
              Otpor vazduha-sila koja se suprotstavlja kretanju objekta kroz
              vazduh, on zavisi od nekoliko faktora, kao sto su oblik I velicina
              vozila, brzine kretanja, gustine I viskoznosti. On ima veliki
              uticaj na performanse I ekonomicnost. Auotomobili se projektuju
              tako da se ova velicina ima sto manju vrednost.
              <br />
              <br />
              Koeficijent otpora - koristi se da kvantifikuje vrednost
              aerodinamickog otpora koje vozilo generise tokom kretanja
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
            <img src={SlikaDva} alt="" />
          </PortfolioPicture>
        </div>
        <div className="item-centering-container">
          <PortfolioPicture right="0">
            <img src={SlikaTri} alt="" />
          </PortfolioPicture>
          <PortfolioItemDescription left="0">
            <p className="item-title">Uzgon i potisna sila</p>
            <p className="item-description">
              Uzgon I potisna sila-deluje vertikalno gore/dole na vozilo. Ideja
              je da se uzgon smanji a potisak poveca sto vise. Pri vecim
              brzinama uzgon moze da znatno da smanji upravljivost I stabilnost
              vozila pri vecim brzinama, dok potisna sila tezi da vozilo drzi
              “zalepljenim” za podlogu
              <br />
              <br />
              Spojleri - montiraju se na vozila kako bi modifikovali protok
              vazduha preko I oko vozila, koriste se za povecanje potisne sile I
              smanjenje aerodinamickog otpora
              <br />
              <br />
              Kanardi - montiraju se na prednji deo vozila I imaju istu funkciju
              kao spojleri
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
    </PrezentacijaStyle>
  );
}

export default Portfolio;
