import {Html, useProgress} from '@react-three/drei';

const Loader = () => {
  const progress = useProgress();

  const formattedProgress = typeof progress === 'number' ? progress.toFixed(2) : 'Loading...';
  return (
    <Html
      as='div'
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <span className='canvas-loader'></span>
      <p
        style={{
          fontSize: 14,
          color: "#F1F1F1",
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        <div>{formattedProgress}%</div>
      </p>
    </Html>
  );
};

export default Loader