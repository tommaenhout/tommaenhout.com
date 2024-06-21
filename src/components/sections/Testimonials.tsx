"use client";
import SwiperCore from "swiper";
import { Autoplay, EffectFade, Grid, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Pagination, Navigation, EffectFade, Autoplay, Grid]);
const Testimonials = () => {
  const props = {
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  };
  return (
    <div className="content testimonials">
      {/* title */}
      <div className="title">Testimonials</div>
      {/* content */}
      <div className="row testimonials-items">
        {/* client item */}
        <div className="col col-d-12 col-t-12 col-m-12 border-line-v">
          <div className="revs-carousel default-revs">
            <Swiper {...props} className="owl-carousel">
              <SwiperSlide className="item">
                <div className="revs-item">
                  <div className="text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </div>
                  <div className="user">
                    <div className="img">
                      <img src="images/testi1.jpg" alt="" />
                    </div>
                    <div className="info">
                      <div className="name">Helen Floyd</div>
                      <div className="company">Art Director</div>
                    </div>
                    <div className="clear" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="item">
                <div className="revs-item">
                  <div className="text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </div>
                  <div className="user">
                    <div className="img">
                      <img src="images/testi2.jpg" alt="" />
                    </div>
                    <div className="info">
                      <div className="name">Robert Chase</div>
                      <div className="company">CEO</div>
                    </div>
                    <div className="clear" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="item">
                <div className="revs-item">
                  <div className="text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </div>
                  <div className="user">
                    <div className="img">
                      <img src="images/testi3.png" alt="" />
                    </div>
                    <div className="info">
                      <div className="name">Helen Floyd</div>
                      <div className="company">Art Director</div>
                    </div>
                    <div className="clear" />
                  </div>
                </div>
              </SwiperSlide>
              <div className="swiper-pagination"></div>
            </Swiper>
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};
export default Testimonials;
