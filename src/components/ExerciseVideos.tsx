import { Typography, Box, Stack, Modal } from '@mui/material';
import Loader from './Loader';
import { VideoType } from '../types';
import { useState } from 'react';

interface ExerciseVideosType { 
  exerciseVideos: VideoType[];
  name:string
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  boxShadow: 24,
};

const ExerciseVideos: React.FC<ExerciseVideosType> = ({ exerciseVideos, name }) => {
  const [showVideo, setShowVideo] = useState<string>('');
  
  if (!exerciseVideos.length) return <Loader />;

  return (
    <Box sx={{ marginTop: { lg: '203px', xs: '20px' } }} p="20px">
      <Modal
        open={showVideo!==''}
        onClose={()=>setShowVideo('')}
      >
        <Box sx={style}>
          <iframe
              loading="lazy"
              width="800"
              height="500"
              src={showVideo}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
        </Box>
      </Modal>
      <Typography sx={{ fontSize: { lg: '44px', xs: '25px' } }} fontWeight={700} color="#000" mb="33px">
        Watch <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>{name}</span> exercise videos
      </Typography>
      <Stack sx={{ flexDirection: { lg: 'row' }, gap: { lg: '110px', xs: '0px' } }} justifyContent="flex-start" flexWrap="wrap" alignItems="center">
        {exerciseVideos?.slice(0, 3)?.map((item, index) => (
          <a
            key={index}
            className="exercise-video"
            onClick={()=>setShowVideo(`https://www.youtube.com/embed/${item.video.videoId}`)}
            //href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            <img style={{ borderTopLeftRadius: '20px' }} src={item.video.thumbnails[0].url} alt={item.video.title} />
            <Box>
              <Typography sx={{ fontSize: { lg: '28px', xs: '18px' } }} fontWeight={600} color="#000">
                {item.video.title}
              </Typography>
              <Typography fontSize="14px" color="#000">
                {item.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;