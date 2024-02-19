import React from 'react';
import { Typography, Box} from '@mui/material';

import Loader from './Loader';
import { ExcerciseItemType } from '../types';
import Scroller from './Scroller';

interface SimilarExercisesType{ 
    targetMuscleExercises:ExcerciseItemType[],
    // equipmentExercises:ExcerciseItemType[]
}

const SimilarExercises: React.FC<SimilarExercisesType> = ({
  targetMuscleExercises,
  // equipmentExercises
}) => (
  <Box sx={{ mt: { lg: '100px', xs: '0px' } }}>
    <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px' }} fontWeight={700} color="#000" mb="33px">
      Similar <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>Target Muscle</span> exercises
    </Typography>
    <Box  sx={{ p: 2, position: 'relative' }}>
      {targetMuscleExercises.length !== 0 ? <Scroller data={targetMuscleExercises} /> : <Loader />}
    </Box>
    {/* <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px', mt: { lg: '100px', xs: '60px' } }} fontWeight={700} color="#000" mb="33px">
      Similar <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>Equipment</span> exercises
    </Typography>
    <Box sx={{ p: 2, position: 'relative' }}>
      {equipmentExercises.length !== 0 ? <Scroller data={equipmentExercises} /> : <Loader />}
    </Box> */}
  </Box>
);

export default SimilarExercises;