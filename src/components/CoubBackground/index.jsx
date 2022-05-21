import React from 'react';
// import Video from 'react-native-video';
// import video from '../../assets/Comp.mov';
import './style.css';
import BigCoube from '../../assets/RoundCube-Black-big.png';
import MiddleCoube from '../../assets/RoundCube-Black-middle.png';
import Small_1 from '../../assets/RoundCube-Black-small-1.png';
import Small_2 from '../../assets/RoundCube-Black-small-2.png';
import Small_3 from '../../assets/RoundCube-Black-small-3.png';
import Vector_Group from '../../assets/Vector-group-1.svg';
import Vector_Group_2 from '../../assets/Vector-group-2.svg';
import videoprew1 from '../../assets/VideoPrew1.png';
import videoprew2 from '../../assets/VideoPrew2.png';
import videoprew3 from '../../assets/VideoPrew3.png';
import videoprew4 from '../../assets/VideoPrew4.png';
import videoprew5 from '../../assets/VideoPrew5.png';
import ThreeScene from '../ThreeScene';

// const VideoComponent = ()=> {
//   return (
//     <Video
//         source={video}                  // the video file
//         paused={false}                  // make it start
//         // style={styles.backgroundVideo}  // any style you want
//         repeat={true}                   // make it a loop
//         // className="videoprew-1"
//     />
// )
// }

export default function CoubBack() {
  return (
    <div className='background'>
      <div className='big-coube'>
        <ThreeScene />
      </div>

      {/* <img src={BigCoube} alt="" className="big-coube" /> */}
      {/* <VideoComponent/> */}
      <img src={videoprew1} alt='' className='videoprew-1' />
      <img src={videoprew2} alt='' className='videoprew-2' />
      <img src={videoprew3} alt='' className='videoprew-3' />
      <img src={videoprew4} alt='' className='videoprew-4' />
      <img src={videoprew5} alt='' className='videoprew-5' />
      <img src={Vector_Group} alt='' className='Vector-group' />
      <img src={Vector_Group_2} alt='' className='Vector-group-2' />
      <img src={Small_1} alt='' className='small-coube' />
      <img src={Small_2} alt='' className='small-2-coube' />
      <img src={Small_3} alt='' className='small-3-coube' />
      <img src={MiddleCoube} alt='' className='middle-coube' />
    </div>
  );
}
