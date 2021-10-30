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

import InlineIcon from  'assets/img/inline_primary.svg';
import InsertionIcon from  'assets/img/insertion_primary.svg';

function ShowProductPage(data) {
  // console.log('Show me the data 1.0 =>', data.haz_page_data.title)
  let product_data = data.haz_product_data
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
      <p className="nav-product-main-title">{ data.haz_page_data.title }</p>
      <p className="nav-product-main-description">{ data.haz_page_data.description }</p>

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
                              href="#pablo"
                              onMouseEnter={() => updateProductImage(value, index, 'left')}
                              onMouseLeave={() => updateProductDefaultImage(value, index)}
                            >
                              <i style={{ 'line-height': '55px'}}> <img src={InlineIcon} style={{ 'width': '40px'}} /></i>
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
                              <i style={{ 'line-height': '55px'}}> <img src={InsertionIcon} style={{ 'width': '40px'}} /></i>
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
                              <i style={{ 'line-height': '55px'}}> <img src={InlineIcon} style={{ 'width': '40px'}} /></i>
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

export default ShowProductPage;