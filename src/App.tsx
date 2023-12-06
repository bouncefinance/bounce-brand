import { useState, useEffect, useMemo } from 'react'
import logo from './assets/imgs/logo.svg'
import { Box, Typography } from '@mui/material'
import CircleLogo from './components/circleLogo'
import Loader from './components/loader'
import useBreakpoint from './hooks/useBreakpoint'
import Cards from './components/cards'

export enum AnimateStep {
  'default' = 0,
  'textEnter' = 1,
  'textScale' = 2,
  'circleEnter' = 3,
  'allLeave' = 4,
  'cardEnter' = 5
}

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [animateStep, setAnimateStep] = useState<AnimateStep>(
    AnimateStep.default
  )
  const isDownMd = useBreakpoint('md')
  useEffect(() => {
    if (!isLoading) {
      setTimeout(() => {
        setAnimateStep(AnimateStep.textEnter)
      }, 1000)
      setTimeout(() => {
        setAnimateStep(AnimateStep.textScale)
      }, 3000)
      setTimeout(() => {
        setAnimateStep(AnimateStep.circleEnter)
      }, 5500)
      setTimeout(() => {
        setAnimateStep(AnimateStep.allLeave)
      }, 8500)
    }
    return () => {}
  }, [isLoading])
  const restartAnimation = () => {
    window.location.reload()
  }
  const videoLoadHandle = () => {
    setIsLoading(false)
  }
  const leftTextStyle = useMemo(() => {
    if (animateStep === AnimateStep.default) {
      return {
        color: '#fff',
        fontSize: isDownMd ? '100px' : '200px',
        position: 'absolute',
        top: isDownMd ? '50%' : '50%',
        right: '50%',
        transform: isDownMd
          ? `translate3D(50%, -50%, 0) scale(80%)`
          : `translate3D(50%, -50%, 0)`
      }
    } else if (animateStep === AnimateStep.textEnter) {
      return {
        color: '#fff',
        fontSize: isDownMd ? '100px' : '200px',
        position: 'absolute',
        top: isDownMd ? '20%' : '50%',
        right: '50%',
        transform: isDownMd
          ? `translate3D( 50%, 0, 0) scale(80%)`
          : 'translate3D(0, -50%, 0)'
      }
    } else if (animateStep === AnimateStep.textScale) {
      return {
        color: '#fff',
        fontSize: isDownMd ? '100px' : '100px',
        position: 'absolute',
        top: isDownMd ? '20%' : '50%',
        right: isDownMd ? '50%' : '50%',
        transform: isDownMd
          ? `translate3D(50%, 0, 0) scale(50%)`
          : `translate3D(-${241}px, -50%, 0)`
      }
    } else if (animateStep === AnimateStep.circleEnter) {
      return {
        color: '#fff',
        fontSize: isDownMd ? '100px' : '100px',
        position: 'absolute',
        top: isDownMd ? '20%' : '50%',
        right: '50%',
        transform: isDownMd
          ? `translate3D( 50%, 0, 0) scale(50%)`
          : `translate3D(-${134}px,-50%, 0)`
      }
    } else if (animateStep === AnimateStep.allLeave) {
      return {
        top: isDownMd ? '40px' : '88px',
        color: '#fff',
        fontSize: isDownMd ? '100px' : '40px',
        position: 'absolute',
        right: '50%',
        transform: isDownMd
          ? `translate3D(100px, 0, 0) scale(20%)`
          : `translate3D(-${68}px, 0, 0)`
      }
    }
    return {
      color: '#fff',
      fontSize: isDownMd ? '100px' : '200px',
      position: 'absolute',
      top: isDownMd ? '10%' : '50%',
      right: '50%',
      transform: isDownMd
        ? `translate3D(50%, -50%, 0) scale(80%)`
        : 'translate3D(50%, -50%, 0)'
    }
  }, [animateStep, isDownMd])

  const rightTextStyle = useMemo(() => {
    if (animateStep === AnimateStep.default) {
      return {
        color: '#fff',
        fontSize: isDownMd ? '100px' : '200px',
        position: 'absolute',
        top: isDownMd ? '70%' : '50%',
        left: '50%',
        transform: isDownMd
          ? 'translate3D(-50%, 50vh, 0) scale(80%)'
          : 'translate3D(50vw, -50%, 0)'
      }
    } else if (animateStep === AnimateStep.textEnter) {
      return {
        color: '#fff',
        fontSize: isDownMd ? '100px' : '200px',
        position: 'absolute',
        top: isDownMd ? '50%' : '50%',
        left: '50%',
        transform: isDownMd
          ? 'translate3D(-50%, 0, 0) scale(80%)'
          : 'translate3D(50px, -50%, 0)'
      }
    } else if (animateStep === AnimateStep.textScale) {
      return {
        color: '#fff',
        fontSize: isDownMd ? '100px' : '100px',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: isDownMd
          ? 'translate3D(-50%, 0, 0) scale(40%)'
          : `translate3D(${241}px, -50%, 0)`
      }
    } else if (animateStep === AnimateStep.circleEnter) {
      return {
        color: '#fff',
        fontSize: isDownMd ? '100px' : '100px',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: isDownMd
          ? 'translate3D(-50%, 0, 0) scale(40%)'
          : `translate3D(${134}px,-50%, 0)`
      }
    } else if (animateStep === AnimateStep.allLeave) {
      return {
        top: isDownMd ? '40px' : '88px',
        color: '#fff',
        fontSize: isDownMd ? '100px' : '40px',
        position: 'absolute',
        left: '50%',
        transform: isDownMd
          ? `translate3D(${-71}px, 0, 0) scale(20%)`
          : `translate3D(${68}px, 0, 0)`
      }
    }
    return {
      color: '#fff',
      fontSize: isDownMd ? '100px' : '200px',
      position: 'absolute',
      top: isDownMd ? '70%' : '50%',
      left: '50%',
      transform: isDownMd
        ? 'translate3D(-50%, -50vh, 0) scale(80%)'
        : 'translate3D(50vw, -50%, 0)'
    }
  }, [animateStep, isDownMd])

  return (
    <>
      {isLoading && <Loader />}
      <Box
        sx={{
          position: 'relative',
          width: '100vw',
          height: '100vh',
          background: '#000',
          overflow: 'hidden'
        }}
      >
        {/* Header */}
        <Box
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            zIndex: 3
          }}
        >
          <Box
            sx={{
              width: '100%',
              maxWidth: '1440px',
              margin: '0 auto',
              height: '73px',
              padding: '43px 43px 0',
              display: 'flex',
              flexFlow: 'row nowrap',
              justifyContent: 'flex-start',
              alignItems: 'flex-end'
            }}
          >
            <img
              src={logo}
              style={{
                width: '140px',
                cursor: 'pointer'
              }}
              alt="logo"
              onClick={restartAnimation}
            />
          </Box>
        </Box>
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            height: '100vh'
          }}
        >
          {/* video bg */}
          <video
            style={{
              position: 'relative',
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
            onLoadedData={videoLoadHandle}
            controls={false}
            loop={true}
            src="https://images-v3.bounce.finance/landingpage/background-v2.mp4"
            autoPlay
            muted
          ></video>
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'rgba(0, 0, 0, 0.6)',
              zIndex: 1
            }}
          ></Box>
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              zIndex: 2
            }}
          >
            <Typography
              sx={{
                transition: 'all 2s',
                ...leftTextStyle
              }}
            >
              Bounce
            </Typography>
            <Typography
              sx={{
                opacity: animateStep > AnimateStep.default ? 1 : 0,
                transition: 'all 2s',
                ...rightTextStyle
              }}
            >
              Brand
            </Typography>
            <CircleLogo animateStep={animateStep} />
            <Cards animateStep={animateStep} />
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default App
