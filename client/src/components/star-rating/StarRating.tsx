import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";

type Props = {
    rating: number;
}

function StarRating({rating}: Props) {
  const [value, setValue] = React.useState<number | null>(rating);

  return (
    <Box
      sx={{
        "& > legend": { mt: rating },
        "& .MuiRating-iconFilled": {
          color: "#db202c",
        },
        "& .MuiRating-iconEmpty": {
          borderColor: "#db202c",
        },
      }}
    >
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
    </Box>
  );
}

export default StarRating;