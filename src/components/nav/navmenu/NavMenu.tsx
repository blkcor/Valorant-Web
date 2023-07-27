import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useLocation } from 'react-router-dom';
import { ListItemText } from '@mui/material';


const options: { [key: string]: string } = {
  "teach": '点位教学',
  "discuss": '发布点位',
  "news": '资讯'
};

const ITEM_HEIGHT = 48;

type NavMenuProps = {

};

const NavMenu: React.FC<NavMenuProps> = () => {
  const location = useLocation().pathname.split("/")[1]
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        {Object.keys(options).map((option) => (
          <MenuItem key={option} selected={option === location}>
            <ListItemText>
              <Link className='decoration-none text-black' to={`/${option}`}>
                {options[option]}
              </Link>
            </ListItemText>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
export default NavMenu;
