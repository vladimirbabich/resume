import '../App.scss';
import React from 'react';
import { Link, List, ListItem, ListItemIcon, Typography } from '@mui/material';

function Project({ project, id }) {
  return (
    <>
      <Link
        sx={{
          m: 1,
          mt: 0,
          mr: 0,
          mb: 0,
          p: 1,
          '&:before': {
            color: 'black',
            content: `"${id}. "`,
          },
        }}
        className="projLink"
        rel="noopener"
        target="_blank"
        href={project.url}>
        {project.name}
      </Link>
      <Typography ml={0} mt={1} component="span">
        — {project.desc}
      </Typography>
      <Typography ml={2} mt={2} mb={1} component="p">
        Статус: {project.status}
      </Typography>
      {project.descriptionRows && (
        <Typography ml={2} mt={2} mb={1} component="p">
          Функционал:
        </Typography>
      )}
      {project.descriptionRows &&
        project.descriptionRows.map((el, i) => {
          if (el.includes('link||')) {
            const [text, link] = el.split('link||');
            return (
              <Typography
                key={i}
                ml={2}
                variant="body1"
                component={Link}
                sx={{
                  textDecoration: 'none',
                  '&:hover': { color: 'red', cursor: 'pointer' },
                }}
                href={link}
                rel="noopener"
                target="_blank">
                {text}
                <br />
              </Typography>
            );
          } else
            return (
              <Typography
                key={i}
                // mt={0}
                variant="body1"
                style={{ textIndent: '16px' }}>
                {el}
                <br />
              </Typography>
            );
        })}
      <Typography ml={2} mt={2} component="p">
        Технологии:
      </Typography>
      <List sx={{ marginLeft: `16px` }}>
        {project.technologies.map((el, i) => {
          return (
            <ListItem className="techList" key={i}>
              <ListItemIcon sx={{ minWidth: '20px', width: '20px' }}>
                •
              </ListItemIcon>
              <span
                style={{ margin: 0 }}
                dangerouslySetInnerHTML={{ __html: el }}
              />
              <br />
            </ListItem>
          );
        })}
      </List>
      <Typography align="center" fontSize="30px" padding={0}>
        &#183; &#183; &#183;
      </Typography>
    </>
  );
}

export default Project;
