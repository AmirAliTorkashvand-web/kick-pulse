import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function HomeKingsSlider({ children }) {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = Array.isArray(children) ? children : [children];

  return (
    <div className="w-full min-w-0">
      <div className="relative">
        <Swiper
          modules={[Autoplay]}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            setActiveIndex(swiper.realIndex);
          }}
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.realIndex);
          }}
          slidesPerView={1}
          spaceBetween={0}
          loop
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          className="w-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={slide.key ?? index}>{slide}</SwiperSlide>
          ))}
        </Swiper>

        <button
          type="button"
          onClick={() => swiperRef.current?.slidePrev()}
          aria-label="Previous"
          className="absolute left-3 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-bg-primary/90 text-lg text-text-secondary shadow-md backdrop-blur-md transition-all duration-200 hover:border-brand hover:bg-brand/10 hover:text-brand"
        >
          ‹
        </button>

        <button
          type="button"
          onClick={() => swiperRef.current?.slideNext()}
          aria-label="Next"
          className="absolute right-3 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-bg-primary/90 text-lg text-text-secondary shadow-md backdrop-blur-md transition-all duration-200 hover:border-brand hover:bg-brand/10 hover:text-brand"
        >
          ›
        </button>
      </div>

      <div className="mt-3 flex items-center justify-center gap-1.5">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => swiperRef.current?.slideToLoop(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`rounded-full transition-all duration-300 ${
              activeIndex === index
                ? "h-1.5 w-5 bg-brand"
                : "h-1.5 w-1.5 bg-border hover:bg-text-muted"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
