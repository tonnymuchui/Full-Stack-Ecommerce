import { AdjustOutlined } from "@mui/icons-material";
import { Grid } from "@mui/material";
import React from "react";

const OrderCard = () => {
  return (
    <div className="p-5 shadow-md shadow-black hover:shadow-2xl border">
      <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
        <Grid item xs={6}>
          <div className="flex cursor-pointer">
            <img
              className="w-[5rem] h-[5rem] object-cover object-top"
              src="https://rukminim1.flixcart.com/image/612/612/l5h2xe80/kurta/x/6/n/xl-kast-tile-green-majestic-man-original-imagg4z33hu4kzpv.jpeg?q=70"
              alt=""
            />
            <div className="ml-5 space-y-2">
              <p className="opacity-50 text-lg font-bold">Men</p>
              <p className="opacity-50 text-sm font-semibold">Size: M</p>
              <p className="opacity-50 text-sm font-semibold">Color: Black</p>
            </div>
          </div>
        </Grid>

        <Grid item xs={2}>
          <p>Ksh 233</p>
        </Grid>
        <Grid item xs={4}>
          {true && (
            <div>
              <p>
                <AdjustOutlined
                  sx={{ width: "15px", height: "15px" }}
                  className="text-green-600 mr-2 text-sm"
                />
                <span>Deliver on March 03</span>
              </p>
              <p className="text-sm">your item has been delivered</p>
            </div>
          )}
          {false && (
            <p>
              <span>Expected Deliver on March 03</span>
            </p>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderCard;
