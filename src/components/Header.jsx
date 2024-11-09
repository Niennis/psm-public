'use client'
/* eslint-disable no-unused-vars */
import Image from "next/image";
import { useState, useEffect } from "react";
import { useSection } from "@/context/SectionContext";
import ReserveBtn from "./ReserveBtn";
import Link from "next/link";
import { useMediaQuery } from "@mui/material";
import { Tooltip, Avatar } from '@mui/material';

import { AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Button, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { FaUserCircle } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const pagesWithEvents = [
  { title: 'QUIÉNES SOMOS', url: '/quienes-somos', label: 'quienes-somos' },
  { title: 'TEST AUTODIAGNÓSTICO?', url: '/#test_autodiagnostico', label: 'test_autodiagnostico' },
  { title: 'EVENTOS', url: '/#eventos', label: 'eventos' },
  { title: 'PREGUNTAS FRECUENTES', url: '/#preguntas-frecuentes', label: 'preguntas-frecuentes' },
  { title: 'MATERIAL DESCARGABLE', url: '/material-descargable', label: 'material-descargable' },
];

const pagesWithoutEvents = [
  { title: 'QUIÉNES SOMOS', url: '/quienes-somos', label: 'quienes-somos' },
  { title: 'TEST AUTODIAGNÓSTICO', url: '/#test_autodiagnostico', label: 'test_autodiagnostico' },
  { title: 'PREGUNTAS FRECUENTES', url: '/#preguntas-frecuentes', label: 'preguntas-frecuentes' },
  { title: 'MATERIAL DESCARGABLE', url: '/material-descargable', label: 'material-descargable' },
];

const subMenu = [
  { title: 'Intervenciones', url: '/como-trabajamos', label: '/como-trabajamos' },
  { title: 'Plan de Acción', url: '/plan-de-accion-en-salud-mental', label: '/plan-de-accion-en-salud-mental' },
  { title: 'Prevención', url: '/intervencion-en-promocion-y-prevencion', label: '/intervencion-en-promocion-y-prevencion' },
  { title: 'Convenios y profesionales', url: '/como-trabajamos/convenios-y-profesionales', label: '/convenios-y-profesionales' },
];

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 641,
      md: 769,
      lg: 1024,
      xl: 1536,
    },
  },
});

const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const { activeSection, setActiveSection } = useSection();
  const open = Boolean(anchorEl);
  const EVENTS = 0;
  const pages = EVENTS !== 0 ? pagesWithEvents : pagesWithoutEvents
  const [style, setStyle] = useState({ width: 'min-content' });

  const BOTON_RESERVAR = process.env.NEXT_PUBLIC_ACTIVATE_BUTTON === "true"

  const isMediumSize = useMediaQuery("(min-width : 641px) and (max-width : 768px)");
  const isLargeSize = useMediaQuery("(min-width : 769px)");
  const isExtaLargeSize = useMediaQuery("(min-width: 1025px)");

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 900) {
        setStyle({ width: '6px' });
      } else if (width < 1450) {
        setStyle({ width: 'min-content' });
      } else {
        setStyle({ width: 'fit-content' });
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      handleResize();
    }

    // Limpia el event listener cuando el componente se desmonte
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
    // setActiveSection(id);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleNavClick = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(id);
  };
  // Controla el padding del body al abrir/cerrar el menú
  useEffect(() => {
    if (anchorElNav) {
      document.body.style.paddingRight = '0px';
      const header = document.querySelector('header');
      if (header) {
        header.style.paddingRight = '0px';
      }
    } else {
      document.body.style.paddingRight = '';
      const header = document.querySelector('header');
      if (header) {
        header.style.paddingRight = '';
      }
    }
  }, [anchorElNav]);

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="fixed"
        style={{
          background: 'white',
          color: 'black',
          justifyContent: isMediumSize ? 'center' : 'flex-end',
          margin: "0", // 0 72px
          maxHeight: '112px',
          minHeight: '98px',
          width: '100vw',
          left: '0',
          right: '0',
        }}
      >
        <Container maxWidth="false" style={{ background: 'white', color: 'black' }}>
          <Toolbar disableGutters>
            {isLargeSize ? (
              <>
                {/* MENU DASHBOARD */}
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  href="/"
                >
                  <Image
                    alt="Logo"
                    src={`${process.env.NEXT_PUBLIC_BASE_IMG}logo02.png${process.env.NEXT_PUBLIC_KEY_IMG}`}
                    height={0}
                    width={0}
                    priority
                    sizes="100%"
                    style={{
                      height: '70px',
                      width: '263px',

                    }}
                  />{" "}
                </Typography>
                <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
                  {pages.map((page) => {
                    return (
                      <Link style={{ color: 'black', textDecoration: 'none' }} href={page.url} key={page.title} >
                        <Button
                          className={`${ isExtaLargeSize? "ui-medium" : "ui-small"} ${activeSection === page.label
                            ? 'active-header'
                            : ''
                            }`}

                          onClick={() => handleNavClick(page.label)}
                          sx={{ ...style, m: 2, color: 'black', display: 'block', width: 'min-content' }}
                        >
                          {page.title}
                        </Button>
                      </Link>
                    )
                  }
                  )}
                  <Tooltip title="Como trabajamos">
                    <Button
                      className={`${ isExtaLargeSize? "ui-medium" : "ui-small" } ${activeSection === 'como_trabajamos'
                        ? 'active-header'
                        : ''
                        }`}
                      onMouseOver={handleOpenUserMenu} sx={{ ...style, p: 0, m: 2, width: 'min-content', color: 'black', marginTop: '16px', marginBottom: '16px' }}
                    >
                      CÓMO TRABAJAMOS
                    </Button>
                  </Tooltip>

                  <Box sx={{ flexGrow: 0 }} className="ui-medium">
                    <Menu
                      sx={{ mt: '45px' }}
                      id="menu-appbar"
                      anchorEl={anchorElUser}
                      anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      open={Boolean(anchorElUser)}
                      onClose={handleCloseUserMenu}
                      onMouseLeave={handleCloseUserMenu}
                    >
                      {subMenu.map((setting) => (
                        <MenuItem key={setting.url} onClick={handleCloseUserMenu}>
                          <Typography textAlign="center" className="ui-medium">
                            <a href={setting.url} style={{ color: 'black', textDecoration: 'none' }}>
                              {setting.title}
                            </a>
                          </Typography>
                        </MenuItem>
                      ))}
                    </Menu>
                  </Box>
                </Box>
              </>
            ) : (
              <>
                {/*  MENU MOBILE */}
                <Box sx={{ flexGrow: 1, display: { xs: 'flex', sm: 'flex', md: 'none' } }}>
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                  >
                    <MenuIcon />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'left',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'left',
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{
                      display: { xs: 'block', lg: 'none', margin: 0 },
                    }}
                  >
                    {
                      pages.map((page) => (
                        <MenuItem key={page.title} onClick={handleCloseNavMenu}>
                          <Typography textAlign="center" className="ui-medium">
                            <a href={page.url} style={{ color: 'black', }}>
                              {page.title}
                            </a>
                          </Typography>
                        </MenuItem>
                      ))
                    }
                    <MenuItem onClick={handleOpenUserMenu}>
                      <Typography textAlign="center" className="ui-medium font-black" >
                        CÓMO TRABAJAMOS <FaChevronDown />
                      </Typography>
                    </MenuItem>

                    <Box sx={{ flexGrow: 0 }} >
                      <Menu
                        sx={{ mt: '45px', }}
                        id="menu-appbar"
                        anchorEl={anchorElUser}
                        anchorOrigin={{
                          vertical: 'top',
                          horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                          vertical: 'top',
                          horizontal: 'right',
                        }}
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseUserMenu}
                      >
                        {subMenu.map((setting) => (
                          <MenuItem key={setting.url} onClick={handleCloseUserMenu}>
                            <Typography textAlign="center" className="ui-medium">
                              <a href={setting.url} style={{ color: 'black', textDecoration: 'none' }}>
                                {setting.title}
                              </a>
                            </Typography>
                          </MenuItem>
                        ))}
                      </Menu>
                    </Box>
                  </Menu>
                </Box>
                <Typography
                  variant="h5"
                  noWrap
                  component="a"
                  href="/"
                  sx={{
                    mr: { xs: 0, lg: 2 },
                    display: { xs: 'flex', lg: 'none' },
                    /* flexGrow: 1, temporal mientras botones están desactivados */
                    color: 'inherit',
                  }}
                >
                  <Image
                    src={`${process.env.NEXT_PUBLIC_BASE_IMG}UDP_Logo_small.png${process.env.NEXT_PUBLIC_KEY_IMG}`}
                    height={0}
                    width={0}
                    alt="logo udp"
                    sizes="100%"
                    style={{
                      height: 'auto',
                      width: '100px',
                    }} />{" "}
                </Typography>

              </>
            )}
            {
              BOTON_RESERVAR ?
                <Box sx={{ flexGrow: 0, display: 'flex', alignItems: 'center' }}>
                  <ReserveBtn text={'Reservar'} bgColor={'#FABB00'} color={'#000'} />
                  <Link href="#" style={{ textDecoration: 'none', cursor: 'not-allowed' }} >
                    <FaUserCircle className={`btn-fa-user ${isMediumSize ? "btn-fa-user-mobile" : "btn-fa-user-desktop"}`} />
                  </Link>
                </Box>
                : ''
            }
          </Toolbar>
        </Container>
      </AppBar >
    </ThemeProvider>
  );
};

export default Header;
