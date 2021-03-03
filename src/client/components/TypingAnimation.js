import Typical from "react-typical";

const TypingAnimation =  React.memo(()=>{
    return <Typical
    loop={Infinity}
    wrapper="m"
    steps={
      [
          "React",
          1200,
          "Angular",
          1200,
          "React Native",
          1500,
          "Node",
          1200,
          "Firebase",
          1200,
          "Bootstrap",
          1200,
      ]
    }
   />
  },(props,prevProp)=> true ); // this line prevent re rendering

  export default TypingAnimation