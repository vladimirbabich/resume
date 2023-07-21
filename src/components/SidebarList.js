import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Box, Button, List, ListItem } from '@mui/material';

function SidebarList({ name, items }) {
  const btnRef = useRef(null);
  const [isOpen, setIsOpen] = useState(window.innerWidth < 600 ? false : true);
  const [isSmallAppWidth, setIsSmallAppWidth] = useState(
    window.innerWidth < 600 ? true : false
  );

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        btnRef.current &&
        !btnRef.current.contains(event.target) &&
        window.innerWidth < 600
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [btnRef]);

  useLayoutEffect(() => {
    function updateWidth() {
      if (window.innerWidth < 600) {
        setIsSmallAppWidth(true);
        setIsOpen(false);
      } else {
        setIsSmallAppWidth(false);
        setIsOpen(true);
      }
    }
    window.addEventListener('resize', updateWidth);
    updateWidth();
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  function handleClick(e) {
    setIsOpen((prev) => !prev);
  }

  return (
    <Box
      sx={{
        position: 'relative',
      }}
      ref={btnRef}>
      <Button
        m={2}
        mb={1}
        sx={{ width: '100%', padding: 0 }}
        texttransform="none"
        color="primary"
        variant="text"
        fontWeight="500"
        // disabled
        onClick={handleClick}>
        {name}
        {isOpen ? '▲' : '▼'}
      </Button>
      {isOpen && (
        <List
          sx={{
            zIndex: 300,
            display: 'flex',
            flexDirection: { xs: 'row', sm: 'column' },
            flexWrap: 'wrap',
            position: isSmallAppWidth ? 'absolute' : 'relative',
            top: isSmallAppWidth ? '36px' : 'none',
            bgcolor: { xs: '#fefefe' },
            border: { xs: '1px solid #e95656', sm: 'none' },
            boxSizing: 'border-box',
            width: { xs: '100%', sm: '100%', md: '100%' },
            paddingTop: 0,
            paddingBottom: 0,
          }}>
          {items.map((item) => {
            const itemColor =
              item.level === 'good'
                ? '#00db00'
                : item.level === 'mid'
                ? '#c6e302'
                : '#fc5b31';
            return (
              <ListItem
                sx={{
                  width: 'fit-content',
                }}
                key={item.name}>
                <span style={{ color: itemColor, marginRight: '3px' }}>•</span>
                {item.name}
              </ListItem>
            );
          })}
        </List>
      )}
    </Box>
  );
}

export default SidebarList;
