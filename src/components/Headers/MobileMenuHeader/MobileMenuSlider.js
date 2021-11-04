import React from "react";

// reactstrap components
import { Carousel, CarouselItem, CarouselIndicators } from "reactstrap";

import { ListGroup, ListGroupItem } from 'reactstrap';


// core components
const items = [
  {
    id: 1,
    name: "One",
    children: [{
        id: 111,
        name: 'Washington'
    }, {
        id: 112,
        name: 'Florida'
    }, {
        id: 113,
        name: 'Los Angeles'
    }, {
        id: 114,
        name: 'New York'
    }, {
        id: 115,
        name: 'Detroit'
    }, {
        id: 116,
        name: 'Chicago'
    }]
  },
  {
    id: 2,
    name: "Two",
    children: [{
        id: 121,
        name: 'Vancouver'
    }, {
        id: 122,
        name: 'Winnipeg'
    }, {
        id: 123,
        name: 'Calgary'
    }, {
        id: 124,
        name: 'Montreal'
    }, {
        id: 125,
        name: 'Quebec'
    }]
  },
  {
    id: 3,
    name: "Three",
    children: [{
        id: 211,
        name: 'Buenos Aire'
    }, {
        id: 212,
        name: 'Córdoba'
    }, {
        id: 213,
        name: 'Rosario'
    }, {
        id: 214,
        name: 'Mendoza'
    }]
  }
];

const items2 = [
  {
    id: 1,
    cl: 'md-continent micons icon-north-america',
    name: 'North America',
    children: [{
        id: 11,
        imgsrc: 'https://img.mobiscroll.com/demos/flags/US.png',
        name: 'USA',
        children: [{
            id: 111,
            name: 'Washington'
        }, {
            id: 112,
            name: 'Florida'
        }, {
            id: 113,
            name: 'Los Angeles'
        }, {
            id: 114,
            name: 'New York'
        }, {
            id: 115,
            name: 'Detroit'
        }, {
            id: 116,
            name: 'Chicago'
        }]
    }, {
        id: 12,
        imgsrc: 'https://img.mobiscroll.com/demos/flags/CA.png',
        name: 'Canada',
        children: [{
            id: 121,
            name: 'Vancouver'
        }, {
            id: 122,
            name: 'Winnipeg'
        }, {
            id: 123,
            name: 'Calgary'
        }, {
            id: 124,
            name: 'Montreal'
        }, {
            id: 125,
            name: 'Quebec'
        }]
    }]
  }, {
    id: 2,
    cl: 'md-continent micons icon-south-america',
    name: 'South America',
    children: [{
        id: 21,
        imgsrc: 'https://img.mobiscroll.com/demos/flags/ar.png',
        name: 'Argentina',
        children: [{
            id: 211,
            name: 'Buenos Aire'
        }, {
            id: 212,
            name: 'Córdoba'
        }, {
            id: 213,
            name: 'Rosario'
        }, {
            id: 214,
            name: 'Mendoza'
        }]
    }, {
        id: 22,
        imgsrc: 'https://img.mobiscroll.com/demos/flags/br.png',
        name: 'Brazil',
        children: [{
            id: 221,
            name: 'Rio de Janeiro'
        }, {
            id: 222,
            name: 'Sao Paolo'
        }, {
            id: 223,
            name: 'Brasília'
        }, {
            id: 224,
            name: 'Salvador'
        }, {
            id: 225,
            name: 'Fortaleza'
        }]
    }, {
        id: 23,
        imgsrc: 'https://img.mobiscroll.com/demos/flags/cl.png',
        name: 'Chile',
        children: [{
            id: 231,
            name: 'Santiago'
        }, {
            id: 232,
            name: 'Concepción'
        }, {
            id: 233,
            name: 'Valparaíso'
        }]
    }]
  }  ,{
    id: 3,
    cl: 'md-continent micons icon-europe',
    name: 'Europe',
    children: [{
        id: 31,
        imgsrc: 'https://img.mobiscroll.com/demos/flags/fr.png',
        name: 'France',
        children: [{
            id: 311,
            name: 'Paris'
        }, {
            id: 312,
            name: 'Toulouse'
        }, {
            id: 313,
            name: 'Marseille'
        }, {
            id: 314,
            name: 'Strasbourg'
        }, {
            id: 315,
            name: 'Bordeaux'
        }, {
            id: 316,
            name: 'Lyon'
        }]
    }, {
        id: 32,
        imgsrc: 'https://img.mobiscroll.com/demos/flags/de.png',
        name: 'Germany',
        children: [{
            id: 321,
            name: 'Berlin'
        }, {
            id: 322,
            name: 'Frankfurt'
        }, {
            id: 323,
            name: 'Hamburg'
        }, {
            id: 324,
            name: 'Stuttgart'
        }, {
            id: 325,
            name: 'Munich'
        }]
    }, {
        id: 33,
        imgsrc: 'https://img.mobiscroll.com/demos/flags/es.png',
        name: 'Spain',
        children: [{
            id: 331,
            name: 'Madrid'
        }, {
            id: 332,
            name: 'Barcelona'
        }, {
            id: 333,
            name: 'Bilbao'
        }, {
            id: 334,
            name: 'Valencia'
        }, {
            id: 335,
            name: 'Zaragoza'
        }]
    }, {
        id: 34,
        imgsrc: 'https://img.mobiscroll.com/demos/flags/it.png',
        name: 'Italy',
        children: [{
            id: 341,
            name: 'Rome'
        }, {
            id: 342,
            name: 'Palermo'
        }, {
            id: 343,
            name: 'Genoa'
        }, {
            id: 344,
            name: 'Torino'
        }, {
            id: 345,
            name: 'Milan'
        }]
    }]
  }, {
    id: 4,
    cl: 'md-continent micons icon-asia',
    name: 'Asia',
    children: [{
        id: 41,
        imgsrc: 'https://img.mobiscroll.com/demos/flags/cn.png',
        name: 'China',
        children: [{
            id: 411,
            name: 'Shanghai'
        }, {
            id: 412,
            name: 'Hong Kong'
        }, {
            id: 413,
            name: 'Beijing'
        }, {
            id: 414,
            name: 'Tianjin'
        }, {
            id: 415,
            name: 'Wuhan'
        }, {
            id: 416,
            name: 'Chongqing'
        }]
    }, {
        id: 42,
        imgsrc: 'https://img.mobiscroll.com/demos/flags/jp.png',
        name: 'Japan',
        children: [{
            id: 421,
            name: 'Tokyo'
        }, {
            id: 422,
            name: 'Kagoshima'
        }, {
            id: 423,
            name: 'Osaka'
        }, {
            id: 424,
            name: 'Yokohama'
        }, {
            id: 425,
            name: 'Kawasaki'
        }, {
            id: 426,
            name: 'Kyoto'
        }, {
            id: 427,
            name: 'Sapporo'
        }]
    }]
  }, {
    id: 5,
    cl: 'md-continent micons icon-australia',
    name: 'Australia',
    children: [{
        id: 51,
        imgsrc: 'https://img.mobiscroll.com/demos/flags/au.png',
        name: 'Australia',
        children: [{
            id: 511,
            name: 'Sydney'
        }, {
            id: 512,
            name: 'Canberra'
        }, {
            id: 513,
            name: 'Melbourne'
        }, {
            id: 514,
            name: 'Perth'
        }, {
            id: 515,
            name: 'Brisbane'
        }, {
            id: 516,
            name: 'Sunshine Coast'
        }]
    }, {
        id: 52,
        imgsrc: 'https://img.mobiscroll.com/demos/flags/nz.png',
        name: 'New Zeland',
        children: [{
            id: 521,
            name: 'Wellington'
        }, {
            id: 522,
            name: 'Auckland'
        }, {
            id: 523,
            name: 'Christchurch'
        }, {
            id: 524,
            name: 'Napier-Hastings'
        }, {
            id: 525,
            name: 'Tauranga'
        }]
    }]
  }, {
    id: 6,
    cl: 'md-continent micons icon-africa',
    name: 'Africa',
    children: [{
        id: 61,
        imgsrc: 'https://img.mobiscroll.com/demos/flags/eg.png',
        name: 'Egypt',
        children: [{
            id: 611,
            name: 'Cairo'
        }, {
            id: 612,
            name: 'Alexandria'
        }, {
            id: 613,
            name: 'Giza'
        }, {
            id: 614,
            name: 'Shubra El-Kheima'
        }, {
            id: 615,
            name: 'Suez'
        }, {
            id: 616,
            name: 'Luxor'
        }]
    }, {
        id: 62,
        imgsrc: 'https://img.mobiscroll.com/demos/flags/za.png',
        name: 'South Africa',
        children: [{
            id: 621,
            name: 'Port Elizabeth'
        }, {
            id: 622,
            name: 'Kimberley'
        }, {
            id: 623,
            name: 'Cape Town'
        }, {
            id: 624,
            name: 'Johannesburg'
        }, {
            id: 625,
            name: 'Durban'
        }]
    }, {
        id: 63,
        imgsrc: 'https://img.mobiscroll.com/demos/flags/tz.png',
        name: 'Tanzania',
        children: [{
            id: 631,
            name: 'Dar es Salaam'
        }, {
            id: 632,
            name: 'Mwanza'
        }, {
            id: 633,
            name: 'Arusha'
        }, {
            id: 634,
            name: 'Dodoma'
        }, {
            id: 635,
            name: 'Zanzibar City'
        }]
    }, {
        id: 64,
        imgsrc: 'https://img.mobiscroll.com/demos/flags/gh.png',
        name: 'Ghana',
        children: [{
            id: 641,
            name: 'Kumasi'
        }, {
            id: 642,
            name: 'Accra'
        }, {
            id: 643,
            name: 'Sekondi-Takoradi'
        }, {
            id: 644,
            name: 'Tamale'
        }, {
            id: 645,
            name: 'Sunyani'
        }]
    }]
  }
];

function MobileMenuSlider(){
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
  const goToSpecific = () => {
      setActiveIndex(2)
  }

  const RenderListItemsChildren = (props) => {
    console.log('Image view 3.0 =>', props);
    let propsItems = props.items;
    return(
        <>
            {
                propsItems.map(item => {
                    console.log('Image view 3.1 =>', item);
                    return(
                        <ListGroupItem tag="a">{ item.name }</ListGroupItem>
                    )
                })
            }
        </>
    )
  }

  const RenderListItems = (props) => {
    console.log('Image view 2.0 =>', props);
    let propsItems = [props.items];
    return(
        <>
            {
                propsItems.map(item => {
                    console.log('Image view 2.1 =>', item);
                    return(
                        <>
                        <ListGroupItem tag="a">{ item.name }</ListGroupItem>
                        <RenderListItemsChildren items={item.children} />
                        </>
                    )
                })
            }
        </>
    )
  }

  return (
    <>
      <Carousel activeIndex={activeIndex} next={next} previous={previous} interval={false}>

        {items.map(item => {
          console.log('Image view 1.0 =>', item)
          const children = item.children;
          console.log('Image view 1.1 =>', children)
          children.map(item2 => {
            console.log('Image view 1.2 =>', item2.name)
          })
        //   RenderListItems(children);
          return (
            <CarouselItem
              onExiting={onExiting}
              onExited={onExited}
              key={item.id}
            >
              <ListGroup flush>
                <ListGroupItem tag="a" onClick={previous}>Back</ListGroupItem>
                <ListGroupItem tag="a" onClick={goToSpecific}>Go to three</ListGroupItem>
                <RenderListItems items={item} />
              </ListGroup>
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

export default MobileMenuSlider;