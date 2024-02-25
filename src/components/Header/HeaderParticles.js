import React from 'react';
import Particles from 'react-tsparticles';
// import { loadFull } from 'tsparticles';

const HeaderParticles = () => {
  return (
    <>
       <Particles canvasClassName='canvas-part'
            params={{
                particles: {
                    number: {
                        value: 30,
                        density: {
                            enable: true,
                            value_area: 900
                        }
                    },
                    shape: {
                        type: "star",
                        stroke: {
                            width: 6,
                            color: "#f9ab00"
                        }
                    }
                }
            }}
            />
    </>
  )
}

export default HeaderParticles;