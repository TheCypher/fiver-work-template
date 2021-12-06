import React, { useState } from "react";
import { Link } from "react-router-dom";

import{
  Card,
  CardImg,
  CardBody,
  CardText,
  Row,
  Col,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

import InlineIcon from  'assets/img/inline_primary.svg';
import InsertionIcon from  'assets/img/insertion_primary.svg';

function Haz(props) {
  let page_data = props.data
  const product_data = [
    {
      title: 'HAZ',
      link: 'haz',
      description: 'In oculis quidem exercitus quid ex ea voluptate ponit, quod summum bonum sit.',
      type: 2,
      left_small_title: 'INLINE',
      left_size_info: '1/4-4"',
      left_small_info: 'Line Size',
      right_small_title: 'INSERTION',
      right_size_info: 'MIN 1 1/2"',
      right_small_info: 'Line Size',
      right_icon: InlineIcon,
      left_icon: InsertionIcon,
      image: 'https://demos.creative-tim.com/now-ui-kit-react/static/media/bg7.6249276d.jpg',
      default_image: 'https://demos.creative-tim.com/now-ui-kit-react/static/media/bg7.6249276d.jpg',
      left_image: 'https://demos.creative-tim.com/now-ui-kit-react/static/media/bg6.dc603b74.jpg',
      right_image: 'https://demos.creative-tim.com/now-ui-kit-react/static/media/bg8.2c89438b.jpg'
    },
    {
      title: 'HAZ R',
      link: 'haz-r',
      description: 'In oculis quidem exercitus quid ex ea voluptate ponit, quod summum bonum sit.',
      type: 2,
      left_small_title: 'INLINE',
      left_size_info: '1/4-4"',
      left_small_info: 'Line Size',
      right_small_title: 'INSERTION',
      right_size_info: 'MIN 1 1/2"',
      right_small_info: 'Line Size',
      right_icon: InlineIcon,
      left_icon: InsertionIcon,
      image: 'https://demos.creative-tim.com/now-ui-kit-react/static/media/bg6.dc603b74.jpg',
      default_image: 'https://demos.creative-tim.com/now-ui-kit-react/static/media/bg6.dc603b74.jpg',
      left_image: 'https://demos.creative-tim.com/now-ui-kit-react/static/media/bg7.6249276d.jpg',
      right_image: 'https://demos.creative-tim.com/now-ui-kit-react/static/media/bg8.2c89438b.jpg'
    },
    {
      title: 'HAZ FAT',
      link: 'haz-fat',
      description: 'In oculis quidem exercitus quid ex ea voluptate ponit, quod summum bonum sit.',
      type: 2,
      left_small_title: 'INLINE',
      left_size_info: '1/4-4"',
      left_small_info: 'Line Size',
      right_small_title: 'INSERTION',
      right_size_info: 'MIN 1 1/2"',
      right_small_info: 'Line Size',
      right_icon: InlineIcon,
      left_icon: InsertionIcon,
      image: 'https://demos.creative-tim.com/now-ui-kit-react/static/media/bg7.6249276d.jpg',
      default_image: 'https://demos.creative-tim.com/now-ui-kit-react/static/media/bg7.6249276d.jpg',
      left_image: 'https://demos.creative-tim.com/now-ui-kit-react/static/media/bg6.dc603b74.jpg',
      right_image: 'https://demos.creative-tim.com/now-ui-kit-react/static/media/bg8.2c89438b.jpg'
    },
    {
      title: 'HAZ FAT R',
      link: 'haz-fat-r',
      description: 'In oculis quidem exercitus quid ex ea voluptate ponit, quod summum bonum sit.',
      type: 2,
      left_small_title: 'INLINE',
      left_size_info: '1/4-4"',
      left_small_info: 'Line Size',
      right_small_title: 'INSERTION',
      right_size_info: 'MIN 1 1/2"',
      right_small_info: 'Line Size',
      right_icon: InlineIcon,
      left_icon: InsertionIcon,
      image: 'https://demos.creative-tim.com/now-ui-kit-react/static/media/bg6.dc603b74.jpg',
      default_image: 'https://demos.creative-tim.com/now-ui-kit-react/static/media/bg6.dc603b74.jpg',
      left_image: 'https://demos.creative-tim.com/now-ui-kit-react/static/media/bg7.6249276d.jpg',
      right_image: 'https://demos.creative-tim.com/now-ui-kit-react/static/media/bg8.2c89438b.jpg'
    }
  ]

  const link_dir = '/products/haz/inline/'
  const [productData, setProductData] = useState(product_data)
  const [viewType, setViewType] = useState('')  

  const updateProductImage = (data, index, side) => {
    if(side == 'left'){
      data.image = data.left_image
      product_data[index] = data;
      setProductData(product_data);
    }

    if(side == 'right'){
      data.image = data.right_image
      product_data[index] = data;
      setProductData(product_data);
    }
  }

  const updateProductDefaultImage = (data, index) => {
    data.image = data.default_image
    product_data[index] = data;
    setProductData(product_data);
  }

  return (
    <>
      <p className="nav-product-main-title">{ page_data.page_title }</p>
      <p className="nav-product-main-description">{ page_data.page_description }</p>

      <div className="text-center">
        {
          productData.map((value, index) => {
            if(value.type == 2){
              return(
                <Card style={{ width: "13rem", 'margin-right': '11px' }}>
                  <CardImg
                    alt="..."
                    src={ value.image }
                    top
                  ></CardImg>
                  <CardBody>
                    <CardText>
                      <p className="nav-product-title">{ value.title }</p>
                      <p className="nav-product-description">{ value.description }</p>
                    </CardText>
                    <Row>
                      <Col>
                        <Nav
                          className="nav-pills-info nav-pills-just-icons"
                          pills
                          role="tablist"
                        >
                          <NavItem>
                            <NavLink
                              className="nav-product-hover-button"
                              tag={Link}
                              from="*"
                              to={link_dir + value.link}
                              onMouseEnter={() => updateProductImage(value, index, 'left')}
                              onMouseLeave={() => updateProductDefaultImage(value, index)}
                            >
                              <i style={{ 'line-height': '55px'}}> <img src={ value.right_icon } style={{ 'width': '40px'}} /></i>
                              <p className="nav-product-hover-button-title">{ value.left_small_title }</p>
                              <p className="nav-product-hover-button-size">{ value.left_size_info }</p>
                              <p className="nav-product-hover-button-info">{ value.left_small_info }</p>
                            </NavLink>
                          </NavItem>
                        </Nav>
                      </Col>
          
                      <Col>
                        <Nav
                          className="nav-pills-info nav-pills-just-icons"
                          pills
                          role="tablist"
                        >
                          <NavItem>
                            <NavLink
                              className="nav-product-hover-button"
                              href="#pablo"
                              onMouseEnter={() => updateProductImage(value, index, 'right')}
                              onMouseLeave={() => updateProductDefaultImage(value, index)}
                            >
                              <i style={{ 'line-height': '55px'}}> <img src={ value.left_icon } style={{ 'width': '40px'}} /></i>
                              <p className="nav-product-hover-button-title">{ value.right_small_title }</p>
                              <p className="nav-product-hover-button-size">{ value.right_size_info }</p>
                              <p className="nav-product-hover-button-info">{ value.right_small_info }</p>
                            </NavLink>
                          </NavItem>
                        </Nav>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              )
            } else {
              return(
                <Card style={{ width: "13rem", 'margin-right': '11px' }}>
                  <CardImg
                    alt="..."
                    src={ value.image }
                    top
                  ></CardImg>
                  <CardBody>
                    <CardText>
                      <p className="nav-product-title">{ value.title }</p>
                      <p className="nav-product-description">{ value.description }</p>
                    </CardText>
                    <Row>
                      <Col>
                        <Nav
                          className="nav-pills-info nav-pills-just-icons"
                          pills
                          role="tablist"
                        >
                          <NavItem>
                            <NavLink
                              className="nav-product-hover-button"
                              style={{ 'margin-left': '55px'}}
                              href="#pablo"
                              onMouseEnter={() => updateProductImage(value, index, 'left')}
                              onMouseLeave={() => updateProductDefaultImage(value, index)}
                            >
                              <i style={{ 'line-height': '55px'}}> <img src={ value.right_icon } style={{ 'width': '40px'}} /></i>
                              <p className="nav-product-hover-button-title">{ value.left_small_title }</p>
                              <p className="nav-product-hover-button-size">{ value.left_size_info }</p>
                              <p className="nav-product-hover-button-info">{ value.left_small_info }</p>
                            </NavLink>
                          </NavItem>
                        </Nav>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              )
            }
          })
        }
      </div>
    </>
  )
}

export default Haz;