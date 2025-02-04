import { Delete } from "@mui/icons-material";
import { Avatar, Box, Grid2, IconButton, Rating } from "@mui/material";
import { red } from "@mui/material/colors";

function ReviewCard() {
  return (
    <div className="flex justify-between">
      <Grid2 container spacing={8}>
        <Grid2 size={{ xs: 1 }}>
          <Box>
            <Avatar
              className="text-white"
              sx={{ width: 56, height: 56, bgcolor: "#9155fd" }}
            >
              S
            </Avatar>
          </Box>
        </Grid2>
        <Grid2 size={{ xs: 9 }}>
          <div className="space-y-2">
            <div>
              <p className="font-semibold text-lg">Suhasi</p>
              <p className="opacity-70">2024-09-27 23:16</p>
            </div>
          </div>
          <Rating readOnly value={4.5} precision={0.5} />
          <p>value for money product, great product</p>
          <div className="mt-3">
            <img
              className="w-24 h-24 object-cover"
              src="https://media.istockphoto.com/id/1266818891/photo/beautiful-indian-woman-in-sari.jpg?s=2048x2048&w=is&k=20&c=Ekriz0lQ1iKhQA6wXdd3CPQTWtce-c1J3AmXnwxBWn0="
              alt=""
            />
          </div>
        </Grid2>
      </Grid2>
      <div>
        <IconButton>
          <Delete sx={{ color: red[700] }} />
        </IconButton>
      </div>
    </div>
  );
}

export default ReviewCard;
