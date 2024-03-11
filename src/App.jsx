import { useEffect, useState } from "react";
import "./App.css";

/* images */
import Logo from "./assets/images/logo.svg";
import IconDocument from "./assets/images/icon-document.svg";
import IconFolder from "./assets/images/icon-folder.svg";
import IconUpload from "./assets/images/icon-upload.svg";

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const mobileBreakpoint = 970;

  useEffect(() => {
    const resize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", resize);

    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <>
      <main className="main">
        <header className="header">
          <img className="header__logo" src={Logo} alt="logo img"></img>
          <div className="header__options-container">
            <div className="header__options-wrapper">
              <img
                className="header__options-img"
                src={IconDocument}
                alt="icon document"
              ></img>
            </div>
            <div className="header__options-wrapper">
              <img
                className="header__options-img"
                src={IconFolder}
                alt="icon folder"
              ></img>
            </div>
            <div className="header__options-wrapper">
              <img
                className="header__options-img"
                src={IconUpload}
                alt="icon upload"
              ></img>
            </div>
          </div>
        </header>

        <article className="storage">
          <p className="p-text">
            You've used <span className="bold">815 GB</span> of your storage
          </p>

          <div className="storage__bar-container">
            <div className="storage__progress-bar">
              <div className="storage__progress-circle"></div>
            </div>
          </div>

          <div className="storage__bar-labels">
            <p className="p-text bold">0 GB</p>
            <p className="p-text bold">1000 GB</p>
          </div>

          <div className="storage__remaining">
            <div
              className={
                "storage__remaining-content" +
                (windowWidth > mobileBreakpoint
                  ? " storage__remaining-content--desktop"
                  : "")
              }
            >
              <h1 className="storage__remaining-num">185</h1>
              <p className="storage__remaining-label">GB LEFT</p>
            </div>
            {windowWidth > mobileBreakpoint ? (
              <div className="storage__remaining-arrow"></div>
            ) : null}
          </div>
        </article>
      </main>
      <footer className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="https://github.com/exchyphen" target="_blank">
          exc
        </a>
        .
      </footer>
    </>
  );
}

export default App;
