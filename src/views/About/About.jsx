import { Box, Button, Container, Typography } from '@mui/material';
import React from 'react';
import image from "../../assets/fotoperfil.jpg";

function About() {
  return (
    <Container>
    <Box
      display="flex"
      alignItems="center"
      flexDirection={{ xs: 'column', sm: 'row' }}
      textAlign="center"
      p={2}
      my={4}
      mx="auto"
      maxWith="800px"
    >
      <img
        src={image}
        alt="Foto de perfil"
        style={{ maxWidth: '300px', height: 'auto', marginRight: '20px', borderRadius: '50%' }}
      />
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        textAlign="left"
        flexGrow={1}
        ml={{ xs: 0, sm: 3 }}
      >
        <Typography variant="h5" sx={{ mb: 2 }}>
        Un poco sobre mi...        
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Tengo una sólida formación académica y amplios conocimientos en el campo de la informática y el desarrollo web. Mi título de licenciado en informática representa el resultado de años de estudio y dedicación en áreas como la ciencia de la computación, sistemas de información, bases de datos, y programación.
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Como full stack developer, tengo la capacidad de trabajar tanto en el front-end como en el back-end de aplicaciones y sitios web. Esta versatilidad me permite abordar proyectos completos desde su concepción hasta su implementación, lo que encuentro muy gratificante en mi carrera profesional.
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          He trabajado con varias tecnologías como JavaScript, Reactjs, redux, postgres, sequelize, express, NodeJs, php, wordpress, woocommerce.
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Una de las partes más emocionantes de mi trabajo es resolver problemas complejos y encontrar soluciones eficientes para las necesidades de los clientes. Me enorgullece desarrollar aplicaciones que sean seguras, de alta calidad y que brinden una excelente experiencia de usuario.
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          A lo largo de mi carrera, he aprendido a trabajar en equipo y a liderar proyectos de desarrollo con éxito. Comunicarme efectivamente con colegas y clientes es fundamental para asegurarnos de que todos estemos alineados con los objetivos y requisitos del proyecto.
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Sé que el campo de la informática y el desarrollo web está en constante evolución, por lo que estoy siempre dispuesto a seguir aprendiendo y actualizando mis conocimientos para mantenerme al día con las últimas tendencias y tecnologías en la industria.
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          En resumen, mi pasión por la informática y el desarrollo web me ha llevado a obtener un título de licenciado en informática y a convertirme en un full stack developer competente y versátil. Estoy emocionado por seguir creciendo profesionalmente y enfrentar nuevos desafíos en este apasionante campo.
        </Typography>
        <Box display="flex" flexDirection={{ xs: 'column', sm: 'row' }} gap={1} mt={2}>
          <Button variant="contained" color="primary" target="_blank" href="https://drive.google.com/file/d/1vzmhquk08cxddZZYDak88gVLFDRlG4Yo/view?usp=sharing" download>
            Descargar mi CV
          </Button>
          <Button
            variant="outlined"
            color="primary"
            href="https://jotar81.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ir al Portfolio Web
          </Button>
        </Box>
        <Box display="flex" justifyContent={{ xs: 'center', sm: 'start' }} mt={1}>
          <Button
            variant="outlined"
            color="inherit"
            href="https://github.com/juancts"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Button>
          <Button
            variant="outlined"
            color="inherit"
            href="https://www.linkedin.com/in/jjrodriguez81/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ ml: 1 }}
          >
            LinkedIn
          </Button>
          <Button
            variant="outlined"
            color="inherit"
            href="https://twitter.com/jotar81"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ ml: 1 }}
          >
            Twitter
          </Button>
        </Box>
      </Box>
    </Box>
    </Container>
  );
}

export default About;