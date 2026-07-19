import Grainient from "./Grainient";

export default function ThemeBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 opacity-[0.18]">
      <Grainient
        color1="#b3261e"
        color2="#d98f91"
        color3="#141414"
        timeSpeed={0.2}
        colorBalance={0}
        warpStrength={1}
        warpFrequency={5}
        warpSpeed={2}
        warpAmplitude={50}
        blendAngle={0}
        blendSoftness={0.05}
        rotationAmount={500}
        noiseScale={2}
        grainAmount={0.1}
        grainScale={2}
        grainAnimated={false}
        contrast={1.2}
        gamma={1}
        saturation={1}
        centerX={0}
        centerY={0}
        zoom={0.9}
      />
    </div>
  );
}
