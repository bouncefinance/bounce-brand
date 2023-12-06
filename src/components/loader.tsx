import { Box } from '@mui/material'
import BounceAnime from './bounceAnime'

export default function Loader() {
  return (
    <Box
      sx={{
        position: 'fixed',
        width: '100vw',
        height: '100vh',
        background: '#000',
        overflow: 'hidden',
        zIndex: 999,
        display: 'flex'
      }}
    >
      <BallBase className={'loader'} />
    </Box>
  )
}

export function BallBase(props: any) {
  return (
    <Box margin="auto auto">
      <BounceAnime />
      {/* <Typography
        sx={{ color: '#ffffff', fontWeight: 700 }}
        mt={1}
        mb={3}
        textAlign={'center'}
      >
        Loading
      </Typography> */}
    </Box>
  )
}
