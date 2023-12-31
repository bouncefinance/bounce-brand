import { Box } from '@mui/material'
import React from 'react'
import Lottie from 'react-lottie'
import bounce_loading from './bounce-white-loading.json'

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: bounce_loading,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
}

const BounceAnime: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'grid',
        placeContent: 'center',
        width: 110,
        height: 110,
        margin: '0 auto'
      }}
    >
      <Lottie classwidth={100} height={100} options={defaultOptions} />
    </Box>
  )
}
export default BounceAnime
