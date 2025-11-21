import imgSee51 from "../assets/05a1133ac841e857a354dced99bf96c2cd765870.png";

interface LogoProps {
  size?: "small" | "medium" | "large";
  className?: string;
}

export default function Logo({ size = "medium", className = "" }: LogoProps) {
  const sizeClasses = {
    small: "h-8",
    medium: "h-10 sm:h-12",
    large: "h-14 sm:h-16",
  };

  return (
    <img
      src={imgSee51}
      alt="Seeket"
      className={`${sizeClasses[size]} w-auto object-contain ${className}`}
    />
  );
}
