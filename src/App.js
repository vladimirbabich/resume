import './App.scss';

import React from 'react';
import {
  Box,
  Container,
  createTheme,
  Grid,
  Link,
  List,
  ListItem,
  Typography,
} from '@mui/material';
import SidebarList from './components/SidebarList';
import { ThemeProvider } from '@emotion/react';
import projects, { about, skillSets } from './resumeData';
import Project from './components/Project';

const theme = createTheme({
  typography: {},
  listItemIcon: {},
  button: {
    color: 'red',
  },
});
export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container
        sx={{
          bgcolor: '#fefefe',
          pl: 0,
          m: '0 auto',
        }}
        disableGutters={true}
        className="main">
        <Grid container spacing={0}>
          <Grid
            item
            sx={{
              display: 'flex',
              flexDirection: { xs: 'row', sm: 'column' },
              width: { xs: 1, sm: '200px', md: '250px' },
            }}
            className="sidebar">
            <Box
              sx={{
                width: { xs: '200px', sm: '200px', md: '250px' },
                height: 'fit-content',
              }}>
              <img className="photo" src="/photo1.png" alt="logo" />
            </Box>
            <Box
              sx={{
                position: 'relative',
                width: { xs: 'calc(100% - 200px)', sm: '100%' },
              }}>
              {skillSets.map((skillSet) => (
                <SidebarList
                  key={skillSet.set}
                  name={skillSet.set}
                  items={skillSet.skills}
                />
              ))}
            </Box>
          </Grid>
          <Grid
            item
            sx={{
              width: {
                xs: '100%',
                sm: 'calc(100% - 200px)',
                md: 'calc(100% - 250px)',
              },
            }}>
            <Container className="content">
              <Typography
                textAlign="center"
                mt={4}
                variant="p"
                component="h4"
                fontWeight="400">
                Резюме Front-end/Back-end dev.
              </Typography>
              <Typography textAlign="center" variant="p" component="h2">
                Владимир Бабич
              </Typography>
              <Typography mt={2} component="p" fontWeight="500">
                Контакты:
              </Typography>
              <List className="contactsList">
                <ListItem>
                  <span className="contactsIcon">✆</span>+79092095729
                </ListItem>
                <ListItem>
                  <span className="contactsIcon">✉</span>
                  vladimirbabich18@gmail.com
                </ListItem>
              </List>
              <Typography mt={2} component="p" fontWeight="500">
                Проекты:
                <br />
              </Typography>
              {projects.length > 0 &&
                projects.map((project, index) => (
                  <Project key={index + 1} id={index + 1} project={project} />
                ))}
              <Typography
                mt={1}
                component="p"
                fontWeight="400"
                sx={{ textIndent: '16px' }}>
                P.S. Есть еще незавершённые проекты, которые, возможно, попадут
                в этот список позже. Среди них: браузерная онлайн-игра по
                мотивам змейки, судоку, парсер контактных данных пользователей.
                Часть из этих проектов доступна на
                <Link
                  sx={{
                    textDecoration: 'none',
                    '&:hover': { color: 'red', cursor: 'pointer' },
                  }}
                  href="https://github.com/vladimirbabich"
                  rel="noopener"
                  target="_blank">
                  {' '}
                  Гитхаб
                </Link>
                .
              </Typography>

              <Typography mt={2} mb={1} component="p" fontWeight="500">
                Обо мне:
                <br />
              </Typography>
              {about.map((line, i) => (
                <Typography
                  key={i}
                  component="p"
                  fontWeight="400"
                  sx={{ textIndent: '16px' }}>
                  {line}
                  <br />
                </Typography>
              ))}
              <Typography mt={2} component="p" fontWeight="500">
                Высшее образование:
                <br />
              </Typography>
              <Typography m={1} component="p">
                Харьковский национальный университет радиоэлектроники,
              </Typography>
              <Typography m={1} component="p">
                2011-2016гг - Специалист по информационным технологиям.
              </Typography>
            </Container>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}
