import { Box, styled } from '@mui/material'
import logo from '../assets/imgs/coin.svg'
import { AnimateStep } from '../App'
const CircleBlock = styled(Box)(({ theme }) => ({
  '&.wrap': {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate3d(-50%, -50%, 0)',
    width: '482px',
    height: '482px',
    margin: '0 auto',
    display: 'flex',
    [theme.breakpoints.down('md')]: {
      transform: 'translate3d(-50%, -50%, 0)',
      top: '45%',
      width: '120px',
      height: '120px'
    }
  },
  '& .circle-wrap': {
    width: '241px',
    height: '482px',
    margin: '0 auto',
    overflow: 'hidden',
    position: 'relative',
    [theme.breakpoints.down('md')]: {
      width: '60px',
      height: '120px'
    }
  },
  '& .warp-all': {
    width: '482px',
    height: '482px',
    border: '1px solid transparent',
    borderRadius: '50%',
    position: 'absolute',
    top: 0,
    transitionTimingFunction: 'linear',
    [theme.breakpoints.down('md')]: {
      width: '120px',
      height: '120px'
    }
  },
  '& .left': {
    left: 0,
    borderBottom: '1px solid #5B5B5B',
    borderLeft: '1px solid #5B5B5B',
    transform: 'rotate(-135deg)',
    animationName: 'left',
    animationDuration: '2s',
    animationIterationCount: 1,
    animationFillMode: 'forwards'
  },
  '& .right': {
    right: 0,
    borderTop: '1px solid #5B5B5B',
    borderRight: '1px solid #5B5B5B',
    transform: 'rotate(-135deg)',
    transitionDuration: '0',
    animationName: 'right',
    animationDuration: '2s',
    animationIterationCount: 1,
    animationFillMode: 'forwards'
  },
  '& .logo': {
    position: 'absolute',
    top: '50%',
    left: '50%',
    opacity: 0,
    transform: 'translate3d(-50%, 50%, 0)',
    width: '78px',
    animationName: 'imgEnter',
    animationDelay: '1s',
    animationDuration: '2s',
    animationIterationCount: 1,
    animationFillMode: 'forwards',
    [theme.breakpoints.down('md')]: {
      width: '50px'
    }
  },
  '&.done': {
    top: '74px',
    left: '50%',
    transform: 'translate3d(-50%, 0, 0)',
    width: '82px',
    height: '82px',
    transition: '1.6s',
    ' circle-wrap': {
      width: '41px',
      height: '82px',
      transition: '1.6s'
    },
    '.warp-all': {
      width: '82px',
      height: '82px',
      transition: '1.6s'
    },
    '.logo': {
      width: '34px',
      transition: '1.6s'
    },
    [theme.breakpoints.down('md')]: {
      width: '33px',
      height: '33px',
      ' circle-wrap': {
        width: '17px',
        height: '33px'
      },
      '.warp-all': { width: '33px', height: '33px' },
      '.logo': {
        width: '14px'
      },
      top: '100px'
    }
  },
  '@keyframes right': {
    '0%': {
      transform: 'rotate(-135deg)'
    },
    '50%,100%': {
      transform: 'rotate(45deg)'
    }
  },
  '@keyframes left': {
    '0%,50%': {
      transform: 'rotate(-135deg)'
    },
    '100%': {
      transform: 'rotate(45deg)'
    }
  },
  '@keyframes imgEnter': {
    '0%': {
      opacity: 0,
      transform: 'translate3d(-50%, 50%, 0)'
    },
    '100%': {
      opacity: 1,
      transform: 'translate3d(-50%, -50%, 0)'
    }
  }
}))
const CircleLogo = ({ animateStep }: { animateStep: AnimateStep }) => {
  if (animateStep < AnimateStep.circleEnter) {
    return <></>
  }
  return (
    <CircleBlock
      className={animateStep >= AnimateStep.allLeave ? 'wrap done' : 'wrap'}
    >
      <div className="circle-wrap">
        <div className="left warp-all"></div>
      </div>
      <img className="logo" src={logo} alt="" />
      <div className="circle-wrap">
        <div className="right warp-all"></div>
      </div>
    </CircleBlock>
  )
}
export default CircleLogo
