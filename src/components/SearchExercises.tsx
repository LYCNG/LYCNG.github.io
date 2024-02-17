import React, {useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { useExcercises } from '../hooks/useExercise';
import Scroller from './Scroller';


const SearchExercises = () => {

  const { bodyParts,onSearch} = useExcercises();
  const [search, setSearch] = useState('');

  const handleSearch = () => onSearch(search);
  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="49px" textAlign="center">
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          sx={{ input: { fontWeight: '700', border: 'none', borderRadius: '4px' }, width: { lg: '1170px', xs: '350px' }, backgroundColor: '#fff', borderRadius: '40px' }}
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        />
        <Button
          className="search-btn"
          sx={{ bgcolor: '#FF2625', color: '#fff', textTransform: 'none', width: { lg: '173px', xs: '80px' }, height: '56px', position: 'absolute', right: '0px', fontSize: { lg: '20px', xs: '14px' } }}
          onClick={handleSearch}>
          Search
        </Button>
      </Box>
      <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
        <Scroller data={bodyParts} maxview={4}/>
      </Box>
    </Stack>
  );
};

export default SearchExercises;