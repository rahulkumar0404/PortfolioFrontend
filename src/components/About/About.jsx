import './About.css';
import { Typography } from '@mui/material';
import profileImage from '../../Images/profileImage.png';
const About = ({about}) => {
  return (
    <div className="about">
      <div className="aboutContainer">
        <Typography>{about.quote}</Typography>
      </div>
      <div className="aboutContainer2">
        <div>
          <img
            src={about.avatar.url}
            alt="profilePhoto"
            className="aboutProfile"
          />
          <Typography
            variant="h4"
            style={{ margin: '1vmax 0', color: '#000000' }}
          >
            {about.name}
          </Typography>
          <Typography style={{ margin: '1vmax 0' }}>{about.title}</Typography>
          <Typography>{about.subtitle}</Typography>
        </div>
        <div>
          <Typography
            style={{
              wordSpacing: '4px',
              lineHeight: '30px',
              letterSpacing: '3px',
              textAlign: 'right',
            }}
          >
            {about.description}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default About;
