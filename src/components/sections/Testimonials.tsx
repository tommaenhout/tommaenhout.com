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
                    Tom demonstrated exceptional understanding and professionalism in designing a user-friendly, functional, and visually stunning website for our project, exceeding all our expectations. His communication skills and attention to detail ensured the final product met our specific needs perfectly.
                  </div>
                  <div className="user">
                    <div className="img">
                    </div>
                    <div className="info">
                      <div className="name">Matt Ashley</div>
                      <div className="company">Technical Solutions Architect at Amplity Health</div>
                    </div>
                    <div className="clear" />
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};
export default Testimonials;
