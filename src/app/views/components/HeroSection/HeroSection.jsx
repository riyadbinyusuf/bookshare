import React from "react";
import Slider from "react-slick";
import cx from "classnames";

import { Card } from "react-bootstrap";

import styles from "./HeroSection.module.css";

const HeroSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
    // adaptiveHeight: true
  };
  return (
    <div className={styles.heroSection}>
      <Slider {...settings}>
        <div className={styles.slideItem}>
          <Card className="bg-dark text-white">
            <Card.Img
              src="https://images.unsplash.com/photo-1587500020549-2144e7edcb1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
              alt="Card image"
            />
            <Card.ImgOverlay>
              <Card.Title>Card title One</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <Card.Text>Last updated 3 mins ago</Card.Text>
            </Card.ImgOverlay>
          </Card>
        </div>
        <div className={styles.slideItem}>
          <Card className={cx(styles.slideCard, "bg-dark", "text-white")}>
            <Card.Img
              src="https://images.unsplash.com/photo-1547890749-24f198829b96?ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80"
              alt="Card image"
            />
            <Card.ImgOverlay>
              <Card.Title>Card title 2</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <Card.Text>Last updated 3 mins ago</Card.Text>
            </Card.ImgOverlay>
          </Card>
        </div>
      </Slider>
    </div>
  );
};

export default HeroSection;
