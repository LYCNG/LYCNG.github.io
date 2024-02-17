import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo-1.png';

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      <img src={Logo} alt="logo" style={{ width: '200px', height: '41px' }} />
    </Stack>
    <Typography variant="h6" sx={{ fontSize: { lg: '24px', xs: '18px' } }} mt="41px" textAlign="center" pb="40px">
      &copy; 2024 GrayShark ,Typescript & React, <a href="https://shark-page.vercel.app/">About Me</a>
      <Typography variant="body1"  textAlign="center">
         此網站僅為技術展示作品，並無任何商業行為
      </Typography>
    </Typography>
  </Box>
);

export default Footer;