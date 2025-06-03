import { useRef, useState } from "react";

// eslint-disable-next-line react/prop-types
const TiltCard = ({children, className=''}) => {
  const itemRef = useRef();
  const [transformStyle, setTransformStyle] = useState("");

  const handleMouseMove = (e) => {
    if (!itemRef.current) return;
    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();
    const relativeX = (e.clientX - left) / width;
    const relativeY = (e.clientY - top) / height;
    console.log(relativeX, relativeY);
    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    const newTransform = `perspective(500px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };
  return (
    <div
      ref={itemRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle, border:'5px solid red' }}
    >
      {children}
    </div>
  );
}

export default TiltCard