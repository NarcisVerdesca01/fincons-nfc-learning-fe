import "./HomePage.css";
import Header from "../header/Header";

const HomePage = () => {
  return (
    <>
      <Header />
      <div className={`bodyHomePage`}>
        <div className={`containerLegend`}>
          <div className={`containerTitleLegend`}>
            <h2 className={`titleLegend`}>Legend</h2>
          </div>
          <div className={`containerButtonLegend`}>
            <a href="#whoWeAre">
              <button className={`buttonLegend`}>Who we are</button>
            </a>
            <a href="#whatIsIt">
              <button className={`buttonLegend`}>What is it</button>
            </a>
            <a href="#whatWeOffer">
              <button className={`buttonLegend`}>What we offer</button>
            </a>
          </div>
        </div>
        <div className={`containerWhoWeAre`} id="whoWeAre">
          <div className={`textWhoWeAre`}>
            <div className={`containerTitleWhoWeAre`}>
              <h3 className={`titleWhoWeAre`}>
                Welcome to our E-Learning web site.
              </h3>
            </div>
            <div className={`containerDescriptionWhoWeAre`}>
              <p className={`descriptionWhoWeAre`}>
                To explane it simply: it is a website that organizes and offers
                educational content and tools for distance learning of student.
                <br /> A sort of virtual place/deposit that collects teaching
                materials and activities: document, video lessons and
                end-of-course tests.
              </p>
            </div>
          </div>
          <div className={`containerImgWhoWeAre`}></div>
        </div>
        <div className={`containerWhatIsIt`} id="whatIsIt">
          <div className={`textWhatIsIt`}>
            <div className={`containerTitleWhatIsIt`}>
              <h3 className={`titleWhatIsIt`}>Hi everybody!</h3>
            </div>
            <div className={`containerDescriptionWhatIsIt`}>
              <p className={`descriptionWhatIsIt`}>
                .... <br /> ...
              </p>
            </div>
          </div>
          <div className={`containerImgWhatIsIt`}></div>
        </div>
        <div className={`containerWhatWeOffer`} id="whatWeOffer">
          <div className={`textWhatWeOffer`}>
            <div className={`containerTitleWhatWeOffer`}>
              <h3 className={`titleWhatWeOffer`}>What we offer</h3>
            </div>
            <div className={`containerDescriptionWhatWeOffer`}>
              <p className={`descriptionWhatWeOffer`}>
                <h4>
                  A single platform to manage and monitor your training courses!
                </h4>
                <p>
                  A website without complications. Designed to be used without
                  e-learning experience. Dedicate your time to what really
                  matters. Tools that facilitate e automate training management.
                  Use yours contents in different formats: Word, PDF, videos,
                  tests and presentations.
                </p>
              </p>
            </div>
          </div>
          <div className={`containerImgWhatWeOffer`}></div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
