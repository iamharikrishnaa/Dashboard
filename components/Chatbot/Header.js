import { Avatar } from "@mui/material";
import CachedIcon from "@mui/icons-material/Cached";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";

const Header = ({onClose,reset,themeData, storedIcon }) => {
const {bot_name,bot_picture} = themeData?.results || {};

  
  return (
    <div className="chatbot-header">
      <div className="botDetails">
        <Avatar
          alt="BotAvatar"
          src={storedIcon|| bot_picture}
          sx={{ width: 35, height: 35 }}
        />
        <div className="botName">
          <Typography variant="body1" component="span">
            {bot_name}
          </Typography>
        </div>
      </div>
      <div className="chatIcons">
        <CachedIcon
          sx={{ width: 28, height: 28, cursor: "pointer" }}
          onClick={reset}
        />
        <CloseIcon
          sx={{ width: 28, height: 28, cursor: "pointer" }}
          onClick={onClose}
        />
      </div>
    </div>
  );
};

Header.propTypes = {
  onClose: PropTypes.func.isRequired,
  reset:PropTypes.func.isRequired,
  themeData:PropTypes.func.isRequired,
};

export default Header;
