import React, { useState, useEffect } from "react";
import { Container, Typography, Grid, Card, CardContent, CardMedia, Button, CardActionArea } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { createTheme, ThemeProvider ,useTheme } from '@mui/material/styles';

const HomePage = () => {
  // const theme = useTheme();

  const theme = createTheme({
    typography: {
      allVariants: {
        color: '#2e7d32', // Verde
      },
    },
  })

  const primaryColor = "#2e7d32"; // Color más suave y acogedor

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const cardsData = [
    { id: 1, title: 'Monitorización remota', description: 'Supervisión de estancias en tiempo real.', image: '/img/p1.jpg' },
    { id: 2, title: 'Envío de fotografías', description: 'Recibe imágenes en tu correo en casos especiales.', image: '/img/p2.jpg' },
    { id: 3, title: 'Detección de gas y humo', description: 'Alerta temprana por fuga de gas o humo.', image: '/img/p3.jpg' },
    { id: 4, title: 'Aviso por caída', description: 'Notificación inmediata ante caídas.', image: '/img/p4.jpg' },
    { id: 5, title: 'Control de braseros y estufas', description: 'Supervisión de elementos calefactores.', image: '/img/p5.jpg' },
    { id: 6, title: 'Control de accesos', description: 'Gestión de puertas y entradas seguras.', image: '/img/p6.jpg' },
    { id: 7, title: 'Compartimentos de medicinas', description: 'Control de accesos a medicación.', image: '/img/p7.jpg' },
    { id: 8, title: 'Consumo de agua', description: 'Supervisión del uso y posibles fugas.', image: '/img/p8.jpg' },
    { id: 9, title: 'Iluminación y clima', description: 'Automatización de luces y temperatura.', image: '/img/p9.jpg' },
    { id: 10, title: 'Persianas automáticas', description: 'Control de persianas desde el sistema.', image: '/img/p10.jpg' },
    { id: 11, title: 'Cama inteligente', description: 'Monitorización de posición y movimientos.', image: '/img/p11.jpg' },
    { id: 12, title: 'Puertas y frigorífico', description: 'Alertas por apertura de puertas o nevera.', image: '/img/p12.jpg' },
    { id: 13, title: 'Detección de intrusión', description: 'Protección frente a robos o accesos no autorizados.', image: '/img/p13.jpg' },
    { id: 14, title: 'TV asistida', description: 'Cambio de canal o volumen remotamente.', image: '/img/p14.jpg' },
  ];

  const [selectedGroup, setSelectedGroup] = useState('');
  const [selectedSector, setSelectedSector] = useState('');
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    sessionStorage.setItem('selectedGroup', selectedGroup);
  }, [selectedGroup]);

  useEffect(() => {
    sessionStorage.setItem('selectedSector', selectedSector);
  }, [selectedSector]);

  useEffect(() => {
    sessionStorage.setItem('searchText', searchText);
  }, [searchText]);

  const handleButtonClick = () => {
    // Aquí puedes redirigir o mostrar más info si quieres.
  };

  return (
    <div>
      <Container sx={{ py: 4 }}></Container>

      <Slider {...carouselSettings}>
        {cardsData.slice(0, 4).map((card) => (
          <div key={card.id}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                height: '400px',
                border: '1px solid',
                borderColor: primaryColor,
                borderRadius: '8px',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  flex: 1,
                  padding: '20px 40px',
                  height: '100%',
                  background: `linear-gradient(to right, ${primaryColor}, transparent)`,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  textAlign: 'left',
                }}
              >
                <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'white', mb: 1 }}>
                  {card.title}
                </Typography>
                <Typography variant="body1" sx={{ color: 'white', mb: 2 }}>
                  {card.description}
                </Typography>
                <Button variant="contained" color="secondary" onClick={handleButtonClick}>
                  Saber más
                </Button>
              </div>

              <div style={{ flex: 1, height: '100%', minWidth: '50%' }}>
                <img
                  src={card.image}
                  alt={card.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>

      <Container sx={{ py: 4 }}>
        <Typography variant="h3" align="center" gutterBottom>
          Ayuda para Personas Mayores o Dependientes
        </Typography>
        <Typography variant="subtitle1" align="center"  paragraph>
          Nuestro sistema inteligente permite el cuidado y asistencia remota de personas mayores o con dependencia mediante tecnología avanzada.
        </Typography>
      </Container>

      <Container sx={{ py: 4 }}>
        <Grid container spacing={4}>
          {cardsData.map((card) => (
            <Grid item key={card.id} xs={12} sm={6} md={3}>
              <Card
                sx={{
                  position: 'relative',
                  height: '100%',
                  border: '1px solid',
                  borderColor: primaryColor,
                  borderRadius: '8px',
                  overflow: 'hidden',
                  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: 6,
                  },
                }}
              >
                <CardActionArea sx={{ height: '100%' }} onClick={handleButtonClick}>
                  <CardMedia
                    component="img"
                    height="100%"
                    image={card.image}
                    alt={card.title}
                    sx={{ width: '100%', objectFit: 'cover', objectPosition: 'top' }}
                  />

                  <div
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      background: `linear-gradient(to top, ${primaryColor}, transparent 60%)`,
                    }}
                  />

                  <CardContent
                    sx={{
                      position: 'absolute',
                      bottom: 5,
                      left: 15,
                      right: 15,
                      textAlign: 'left',
                      color: 'white',
                      padding: '10px 0',
                    }}
                  >
                    <Typography variant="body2" color="white" sx={{ fontSize: '0.8rem' }}>
                      {card.description}
                    </Typography>
                    <Typography gutterBottom variant="h5" color="white" sx={{ fontWeight: 'bold', fontSize: '1rem' }}>
                      {card.title}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default HomePage;
