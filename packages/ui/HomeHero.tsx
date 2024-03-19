export const HomeHero = () => {
  return (
    <>
      <div className="hero">
        <div className="hero__slider swiper-container swiper-container-fade swiper-container-initialized swiper-container-horizontal">
          <div
            className="swiper-wrapper"
            id="swiper-wrapper-eaeefb2aee4324e3"
            aria-live="polite"
          >
            <article
              className="hero__slide swiper-slide swiper-slide-active"
              role="group"
              aria-label="1 / 3"
              style={{
                width: "1728px",
                opacity: 1,
                transform: "translate3d(0px, 0px, 0px)",
              }}
            >
              <div
                className="hero__entry-image"
                style={{
                  backgroundImage:
                    "url('images/thumbs/featured/featured-01_2000.jpg')",
                }}
              ></div>
              <div className="hero__entry-text">
                <div className="hero__entry-text-inner">
                  <div className="hero__entry-meta">
                    <span className="cat-links">
                      <a href="category.html">Inspiration</a>
                    </span>
                  </div>
                  <h2 className="hero__entry-title">
                    <a href="single-standard.html">
                      Understanding and Using Negative Space.
                    </a>
                  </h2>
                  <p className="hero__entry-desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud corporis est
                    laudantium voluptatum consectetur adipiscing.
                  </p>
                  <a className="hero__more-link" href="single-standard.html">
                    Read More
                  </a>
                </div>
              </div>
            </article>
            <article
              className="hero__slide swiper-slide swiper-slide-next"
              role="group"
              aria-label="2 / 3"
              style={{
                width: "1728px",
                opacity: 0,
                transform: "translate3d(-1728px, 0px, 0px)",
              }}
            >
              <div
                className="hero__entry-image"
                style={{
                  backgroundImage:
                    "url('images/thumbs/featured/featured-02_2000.jpg')",
                }}
              ></div>
              <div className="hero__entry-text">
                <div className="hero__entry-text-inner">
                  <div className="hero__entry-meta">
                    <span className="cat-links">
                      <a href="category.html">Health</a>
                    </span>
                  </div>
                  <h2 className="hero__entry-title">
                    <a href="single-standard.html">
                      10 Reasons Why Being in Nature Is Good For You.
                    </a>
                  </h2>
                  <p className="hero__entry-desc">
                    Voluptas harum sequi rerum quasi quisquam. Est tenetur ut
                    doloribus in aliquid animi nostrum. Tempora quibusdam ad
                    nulla. Quis autem possimus dolores est est fugiat saepe vel
                    aut. Earum consequatur.
                  </p>
                  <a className="hero__more-link" href="single-standard.html">
                    Read More
                  </a>
                </div>
              </div>
            </article>
            <article
              className="hero__slide swiper-slide"
              role="group"
              aria-label="3 / 3"
              style={{
                width: "1728px",
                opacity: 0,
                transform: "translate3d(-3456px, 0px, 0px)",
              }}
            >
              <div
                className="hero__entry-image"
                style={{
                  backgroundImage:
                    "url('images/thumbs/featured/featured-03_2000.jpg')",
                }}
              ></div>
              <div className="hero__entry-text">
                <div className="hero__entry-text-inner">
                  <div className="hero__entry-meta">
                    <span className="cat-links">
                      <a href="category.html">Lifestyle</a>
                    </span>
                  </div>
                  <h2 className="hero__entry-title">
                    <a href="single-standard.html">
                      Six Relaxation Techniques to Reduce Stress.
                    </a>
                  </h2>
                  <p className="hero__entry-desc">
                    Quasi consequatur quia excepturi ullam velit. Repellat velit
                    vel occaecati neque perspiciatis quibusdam nulla. Unde et
                    earum. Nostrum nulla optio debitis odio modi. Quis autem
                    possimus dolores est est fugiat saepe vel aut.
                  </p>
                  <a className="hero__more-link" href="single-standard.html">
                    Read More
                  </a>
                </div>
              </div>
            </article>
          </div>
          <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets">
            <span
              className="swiper-pagination-bullet swiper-pagination-bullet-active"
              tabIndex={0}
            >
              1
            </span>
            <span className="swiper-pagination-bullet" tabIndex={0}>
              2
            </span>
            <span className="swiper-pagination-bullet" tabIndex={0}>
              3
            </span>
          </div>
          <span
            className="swiper-notification"
            aria-live="assertive"
            aria-atomic="true"
          ></span>
        </div>
        <a href="#bricks" className="hero__scroll-down smoothscroll">
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M10.25 6.75L4.75 12L10.25 17.25"
            ></path>
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M19.25 12H5"
            ></path>
          </svg>
          <span>Scroll</span>
        </a>
      </div>
    </>
  );
};
