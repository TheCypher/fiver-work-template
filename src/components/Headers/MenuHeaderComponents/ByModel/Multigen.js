import React, { useState } from "react";

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

import InsertionIcon from  'assets/img/insertion_primary.svg';

function Multigen(props) {
  let page_data = props.data
  const product_data = [
    {
      title: 'MULTIGEN',
      description: 'In oculis quidem exercitus quid ex ea voluptate ponit, quod summum bonum sit.',
      type: 1,
      left_small_title: 'INSERTION',
      left_size_info: '1/4-4"',
      left_small_info: 'Line Size',
      left_icon: InsertionIcon,
      image: 'https://demos.creative-tim.com/now-ui-kit-react/static/media/bg6.dc603b74.jpg',
      default_image: 'https://demos.creative-tim.com/now-ui-kit-react/static/media/bg6.dc603b74.jpg',
      left_image: 'https://demos.creative-tim.com/now-ui-kit-react/static/media/bg7.6249276d.jpg',
      right_image: 'https://demos.creative-tim.com/now-ui-kit-react/static/media/bg8.2c89438b.jpg'
    }
  ]

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

      <div>
        {
          productData.map((value, index) => {
            if(value.type == 2){
              return(
                <Card style={{ width: "13rem", 'margin-right': '11px' }} className="text-center">
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
                <Card style={{ width: "13rem", 'margin-right': '11px' }} className="text-center">
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
                              <i style={{ 'line-height': '55px'}}> <img src={ value.left_icon } style={{ 'width': '40px'}} /></i>
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

export default Multigen;