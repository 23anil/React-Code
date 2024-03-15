import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Modal,
  Typography,
} from "@mui/material";
import React from "react";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

function SecondModel(props) {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 240,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 2,
  };
  return (
    <div>
      <Modal
        open={props.SMopen}
        // onClose={props.handleCloseSM}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Modal Second
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <Card sx={{ minWidth: 240 }}>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Word of the Day
                </Typography>
                <Typography variant="h5" component="div">
                  be{bull}nev{bull}o{bull}lent
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  adjective
                </Typography>
                <Typography variant="body2">
                  well meaning and kindly.
                  <br />
                  {'"a benevolent smile"'}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
              <CardActions >
              <Button variant="contained" sx={{m:'auto'}} onClick={props.handleCloseSM}>close</Button>
              </CardActions>
            </Card>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default SecondModel;
