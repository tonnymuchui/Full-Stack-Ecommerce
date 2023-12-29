import { React, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import { Button } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { mens_kurta } from "../../../Data/men_kurta";

const HomeSectionCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);


  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5 },
  };

  const syncActiveIndex = ({ item }) => setActiveIndex(item);

  const renderNextButton = ({ isDisabled }) => {
    if (activeIndex !== items.length - 5) {
    
    return (
      <Button
        variant="contained"
        className="z-50 bg-white"
        sx={{
          position: "absolute",
          top: "8rem",
          right: "-1.3rem",
          transform: "translateX(50%) rotate(90deg)",
          bgcolor: "white",
        }}
        aria-label="next"
      >
        <KeyboardArrowLeftIcon
          sx={{ transform: "rotate(90deg)", color: "black" }}
        />
      </Button>);
    }
  };

  const renderPrevButton = ({ isDisabled }) => {
    if (activeIndex !== 0) {
    return (<Button
      variant="contained"
      bg-color="white"
      className="z-50"
      sx={{
        position: "absolute",
        top: "8rem",
        left: "-1.3rem",
        transform: "translateX(-50%) rotate(-90deg)",
        bgcolor: "white",
      }}
      aria-label="next"
    >
      <KeyboardArrowRightIcon
        sx={{ transform: "rotate(-90deg)", color: "black" }}
      />
    </Button>);
    }
  };

  const items = mens_kurta.slice(0, 10).map((item) => <HomeSectionCard product={item} />);
  return (
    <div className="">
      <div className="relative p-5 border">
        <AliceCarousel
          items={items}
          responsive={responsive}
          disableDotsControls
          onSlideChanged={syncActiveIndex}
          activeIndex={activeIndex}
          renderNextButton={renderNextButton}
          renderPrevButton={renderPrevButton}
        />
      </div>
    </div>
  );
};

export default HomeSectionCarousel;
