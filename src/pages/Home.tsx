
import { Box } from '@mui/material';

import Exercises from '../components/Exercises';
import SearchExercises from '../components/SearchExercises';
import Banner from '../components/Banner';



const Home = () => {
  return (
    <Box>
      <Banner />
      <SearchExercises />
      <Exercises  />
    </Box>
  );
};

export default Home;