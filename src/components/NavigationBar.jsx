import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  AppBar, Toolbar, IconButton, Typography, Menu, Container, Avatar,
  Button, Tooltip, MenuItem, Box
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import DocumentIcon from '@mui/icons-material/Description';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase/firebaseConfig';
import { useTheme } from '@mui/material/styles';

const primaryColor = "#000000";
const fuchsiaColor = "#D100D1";

const pages = [
  { name: 'Documentos', path: '/Docs', icon: <DocumentIcon /> },
  { name: 'Ayuda', path: '/ayuda', icon: <HelpOutlineIcon /> },
  { name: 'Contacto', path: '/contacto', icon: <ContactMailIcon /> },
];

const settings = [
  { name: 'Cerrar sesión', path: '/logout' },
];

const ResponsiveAppBar = () => {
  const [user] = useAuthState(auth);
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const navigate = useNavigate();

  const handleMenuOpen = setter => event => setter(event.currentTarget);
  const handleMenuClose = setter => () => setter(null);

  const handleNavigation = async (path) => {
    if (path === '/logout') {
      await signOut(auth);
      navigate('/');
    } else {
      navigate(path);
    }
    setAnchorElNav(null);
    setAnchorElUser(null);
  };

  const Logo = () => (
    <Typography
      variant="h6"
      noWrap
      component={Link}
      to="/"
      sx={{
        fontFamily: 'monospace',
        fontWeight: 700,
        letterSpacing: '.3rem',
        color: fuchsiaColor,
        textDecoration: 'none',
        border: `2px solid ${fuchsiaColor}`,
        padding: '2px 4px',
      }}
    >
      Cuid
      <span style={{
        color: "white",
        backgroundColor: fuchsiaColor,
        padding: "0px 2px",
        borderRadius: "4px",
      }}>
        es
      </span>
    </Typography>
  );

  const NavButtons = ({ isMobile }) => (
    <>
      {pages.map(({ name, path, icon }) => (
        <Button
          key={name}
          onClick={() => handleNavigation(path)}
          sx={{
            my: 1,
            color: primaryColor,
            display: 'flex',
            alignItems: 'center',
            width: isMobile ? '100%' : 'auto',
          }}
        >
          {icon}
          <span style={{ marginLeft: 8 }}>{name}</span>
        </Button>
      ))}
    </>
  );

  return (
    <AppBar sx={{ position: 'fixed', bottom: 0, height: 55, bgcolor: 'white' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          {/* Logo grande en desktop */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 2 }}>
            <Logo />
          </Box>

          {/* Menú mobile */}
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton onClick={handleMenuOpen(setAnchorElNav)} sx={{ color: primaryColor }}>
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleMenuClose(setAnchorElNav)}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              <NavButtons isMobile />
            </Menu>
          </Box>

          {/* Logo chico en mobile */}
          <Box sx={{ display: { xs: 'flex', md: 'none' }, flexGrow: 1 }}>
            <Logo />
          </Box>

          {/* Botones de navegación en desktop */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <NavButtons />
          </Box>

          {/* Usuario o login */}
          <Box sx={{ flexGrow: 0 }}>
            {user ? (
              <>
                <Tooltip title="Opciones">
                  <IconButton onClick={handleMenuOpen(setAnchorElUser)} sx={{ p: 0 }}>
                    <Avatar alt={user.displayName || 'User'} src={user.photoURL || ''} />
                  </IconButton>
                </Tooltip>
                <Menu
                  anchorEl={anchorElUser}
                  open={Boolean(anchorElUser)}
                  onClose={handleMenuClose(setAnchorElUser)}
                  anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                  transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                >
                  <MenuItem disabled>
                    <Typography variant="body2">
                      Hola, <strong>{user.email}</strong>
                    </Typography>
                  </MenuItem>
                  {settings.map(({ name, path }) => (
                    <MenuItem key={name} onClick={() => handleNavigation(path)}>
                      <Typography>{name}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </>
            ) : (
              <Button
                component={Link}
                to="/login"
                sx={{ color: primaryColor, textTransform: 'none' }}
                startIcon={<Avatar sx={{ width: 24, height: 24 }} />}
              >
                Iniciar sesión
              </Button>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default ResponsiveAppBar;
