import { Typography } from '@mui/material';
import './Loader.css';
const Loader = () => {
  return (
    <div className="loaderContainer">
      <div className="loader"></div>
      <Typography variant="h2" className="loadingText">
        Please Wait While Loading...
      </Typography>
    </div>
  );
};

export default Loader;
