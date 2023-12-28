// Desc: Home page of the app
// Path: wp_fp_gambling/src/app/component/main.tsx
// Usage:
// import { Main } from "./component";
//
// <Main />
//
// ------------------------------------------------------------------

export default function Main() {
  return (
    <>
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3">
          <img
            className="card-img img-fluid"
            src="./assets/gamble(1).jpg"
            alt="Card"
            height={500}
          />
          <div className="card-img-overlay d-flex align-items-center">
            <div className="container">
              <h5 className="card-title fs-1 text fw-lighter">
                Predict the Unpredictable
              </h5>
              <p className="card-text fs-5 d-none d-sm-block ">
                Bet on the Future: Weather, Stocks, Games - Where Thrills Meet
                Forecast !
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}