import React from "react";

// reactstrap components
import { Carousel, CarouselItem, CarouselIndicators } from "reactstrap";

// core components
const items = [
  {
    src: 'https://demos.creative-tim.com/now-ui-kit-react/static/media/bg8.2c89438b.jpg',
    altText: "Nature, United States",
    caption: "Nature, United States"
  },
  {
    src: "https://demos.creative-tim.com/now-ui-kit-react/static/media/bg7.6249276d.jpg",
    altText: "Somewhere Beyond, United States",
    caption: "Somewhere Beyond, United States"
  },
  {
    src: "https://demos.creative-tim.com/now-ui-kit-react/static/media/bg11.c6c21bd8.jpg",
    altText: "Yellowstone National Park, United States",
    caption: "Yellowstone National Park, United States"
  },
  {
    src: "https://demos.creative-tim.com/now-ui-kit-react/static/media/bg6.dc603b74.jpg",
    altText: "Somewhere Beyond, United States",
    caption: "Somewhere Beyond, United States"
  },
  {
    src: "https://demos.creative-tim.com/now-ui-kit-react/static/media/bg11.c6c21bd8.jpg",
    altText: "Yellowstone National Park, United States",
    caption: "Yellowstone National Park, United States"
  }
];

function ImageViewer(){
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);
  const onExiting = () => {
    setAnimating(true);
  };
  const onExited = () => {
    setAnimating(false);
  };
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = newIndex => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  return (
    <>
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {items.map(item => {
          console.log('Image view 1.0 =>', item.src)
          return (
            <CarouselItem
              onExiting={onExiting}
              onExited={onExited}
              key={item.src}
            >
              <img src={item.src} alt={item.altText} />
              <div className="carousel-caption d-none d-md-block">
                <h5>{item.caption}</h5>
              </div>
            </CarouselItem>
          );
        })}
        <a
          className="carousel-control-prev"
          data-slide="prev"
          href="#pablo"
          onClick={e => {
            e.preventDefault();
            previous();
          }}
          role="button"
        >
          <i className="now-ui-icons arrows-1_minimal-left"></i>
        </a>
        <a
          className="carousel-control-next"
          data-slide="next"
          href="#pablo"
          onClick={e => {
            e.preventDefault();
            next();
          }}
          role="button"
        >
          <i className="now-ui-icons arrows-1_minimal-right"></i>
        </a>
      </Carousel>
    </>
  );
}

export default ImageViewer;