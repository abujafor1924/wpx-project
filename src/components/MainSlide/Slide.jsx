import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Slide = () => {
  return (
    <div className="my-4">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        //    pagination={{
        //      clickable: true,
        //    }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://www.greatnationalhotels.com/wp-content/uploads/2022/07/Black-Friday-1366x768-fp_mm-fpoff_0_0.jpg"
            alt=""
            className="w-full md:h-[80vh] h-[40vh] "
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://samraplasticsurgery.com/wp-content/uploads/2019/11/black_friday_header-crop.png"
            alt=""
            className="w-full md:h-[80vh] h-[40vh] "
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slide;
