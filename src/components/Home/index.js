import Header from '../Header'

const Home = () => (
  <>
    <Header />
    <div className="home-con">
      <div className="home-content">
        <h1 className="heading">Clothes That Get YOU Noticed</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          alt="clothes that you get noticed"
          className="home-image"
        />
        <p className="paragraph">
          Fashion is part of the daily air and it does not quite help that it
          changes all the time. clothes have always been a marker of the era and
          we are in a revolution. Your fashion makes you been seen heard that
          way you are. so.celebrate the seasons new and exciting fashion in your
          own way.
        </p>
        <button type="button" className="shop-now-btn">
          Shop Now
        </button>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
        alt="clothes that you get noticed"
        className="home-image"
      />
    </div>
  </>
)
export default Home
