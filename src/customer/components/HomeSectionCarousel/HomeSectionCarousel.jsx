import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import { Button } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const HomeSectionCarousel = () => {
  const responsive = {
    0: { items: 2 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };

  const items = [1, 1, 1, 1, 1].map((item) => <HomeSectionCard />);
  return (
    <div className="">
      <div className="relative p-5 border">
        <AliceCarousel
          items={items}
          disableButtonsControls
          infinite
          responsive={responsive}
          disableDotsControls
        />
        <Button
          variant="contained"
          bg-color="white"
          className="z-50"
          sx={{
            position: "absolute",
            top: "8rem",
            right: "0rem",
            transform:"translateX(50%) rotate(90deg)",
            bgcolor: "white"
          }}
          aria-label="next"
        >
          <KeyboardArrowLeftIcon sx={{transform:"rotate(90deg)",color: "black"}}/>
        </Button>

        <Button
          variant="contained"
          bg-color="white"
          className="z-50"
          sx={{
            position: "absolute",
            top: "8rem",
            left: "0rem",
            transform:"translateX(-50%) rotate(-90deg)",
            bgcolor: "white"
          }}
          aria-label="next"
        >
          <KeyboardArrowRightIcon sx={{transform:"rotate(-90deg)",color: "black"}}/>
        </Button>
      </div>
    </div>
  );
};

export default HomeSectionCarousel;
