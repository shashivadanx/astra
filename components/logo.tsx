import Image from "next/image";

interface LogoProps {
  variant?: "gold-on-navy" | "navy-on-white" | "icon-only";
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function Logo({
  variant = "navy-on-white",
  className = "",
  size = "md",
}: LogoProps) {
  const sizes = {
    sm: { height: 56, fontSize: "text-base", textSize: "text-sm" },
    md: { height: 100, fontSize: "text-xl", textSize: "text-base" },
    lg: { height: 86, fontSize: "text-3xl", textSize: "text-xl" },
  };

  const sizeConfig = sizes[size];

  // Icon-only emblem
  if (variant === "icon-only") {
    return (
      <div className={className}>
        <Image
          src=""
          alt="Logo"
          width={sizeConfig.height}
          height={sizeConfig.height}
        />
        dsfdsf
        <svg
          width={sizeConfig.height}
          height={sizeConfig.height}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Circle background */}
          <circle
            cx="24"
            cy="24"
            r="22"
            fill="#0A1A2F"
            stroke="#D4A347"
            strokeWidth="2"
          />
          {/* Stylized 'A' with star element */}
          <path
            d="M24 12L26.8 20.4L35.2 20.4L28.4 25.6L31.2 34L24 28.8L16.8 34L19.6 25.6L12.8 20.4L21.2 20.4L24 12Z"
            fill="#D4A347"
          />
        </svg>
      </div>
    );
  }

  // Gold on Navy variant
  if (variant === "gold-on-navy") {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        sdad
        <svg
          width={sizeConfig.height}
          height={sizeConfig.height}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="24"
            cy="24"
            r="22"
            fill="#0A1A2F"
            stroke="#D4A347"
            strokeWidth="2"
          />
          <path
            d="M24 12L26.8 20.4L35.2 20.4L28.4 25.6L31.2 34L24 28.8L16.8 34L19.6 25.6L12.8 20.4L21.2 20.4L24 12Z"
            fill="#D4A347"
          />
        </svg>
        <span
          className={`font-serif font-bold text-[#D4A347] ${sizeConfig.textSize}`}
        >
          Astra Math Circle
        </span>
      </div>
    );
  }

  // Navy on White variant (default)
  return (
    <div className={`flex items-center  ${className}`}>
      <Image
        src="/logo/logo.png"
        alt="Logo"
        width={sizeConfig.height}
        height={sizeConfig.height}
      />

      <span
        className={`font-serif font-bold text-primary ${sizeConfig.textSize}`}
      >
        Astra Math Circle
      </span>
    </div>
  );
}
