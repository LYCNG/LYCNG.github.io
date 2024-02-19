import  { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import { exerciseOptions, fetchData, youtubeOptions } from '../services/fetch';
import Detail from '../components/Detail';

import { ExcerciseItemType, VideoType, initialExcerciseItem } from '../types';

import SimilarExercises from '../components/SimiliarExercise';
import ExerciseVideos from '../components/ExerciseVideos';

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState<ExcerciseItemType>(initialExcerciseItem);
  const [exerciseVideos, setExerciseVideos] = useState<VideoType[]>([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState<ExcerciseItemType[]>([]);
  // const [equipmentExercises, setEquipmentExercises] = useState<ExcerciseItemType[]>([]);
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const fetchExercisesData = async () => {
      const exerciseDbUrl = 'https://zuka.p.rapidapi.com';
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';
      try {
        const response  = await fetchData(`${exerciseDbUrl}/exercices/id/${id}`, exerciseOptions);
        const exerciseDetailData:ExcerciseItemType = response.exercice[0];
        setExerciseDetail(exerciseDetailData);

        const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name} exercise`, youtubeOptions);
        setExerciseVideos(exerciseVideosData.contents);

        const targetMuscleExercisesData = await fetchData(`${exerciseDbUrl}/exercices/muscle/${exerciseDetailData.target}`, exerciseOptions);
        setTargetMuscleExercises(targetMuscleExercisesData.exercice);

        // const equimentExercisesData = await fetchData(`${exerciseDbUrl}/exercices/eq/${exerciseDetailData.equipment}`, exerciseOptions);
        // setEquipmentExercises(equimentExercisesData.exercice);
       } catch (err) {
        console.log(err)
      }
      
    };

    fetchExercisesData();
  }, [id]);

  if (!exerciseDetail) return <div>No Data</div>;

  return (
    <Box sx={{ mt: { lg: '96px', xs: '60px' } }}>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
      <SimilarExercises
        targetMuscleExercises={targetMuscleExercises}
        // equipmentExercises={equipmentExercises}
      />
    </Box>
  );
};

export default ExerciseDetail;