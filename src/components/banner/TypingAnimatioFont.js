import React from 'react'
import { TypeAnimation } from 'react-type-animation';

const TypingAnimatioFont = (props) => {
  return (
    <div style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
      <TypeAnimation
        sequence={props.sequence}
        wrapper="span"
        speed={50}
        style={{
          display: 'flex',
          textAlign: 'center',
          background: 'linear-gradient(45deg, #2786d7, #5df9fd)',
          color: 'transparent',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          fontFamily: 'Catamaran'
        }}
        repeat={Infinity}
      />
    </div>
  )
}


export default TypingAnimatioFont