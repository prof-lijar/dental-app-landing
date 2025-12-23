import Image from "next/image";

interface AppScreenshotProps {
  alt: string;
  src: string;
  bgColor: string;
  rotation: string;
  hoverRotation: string;
}

export default function AppScreenshot({ alt, src, bgColor, rotation, hoverRotation }: AppScreenshotProps) {
  const useObjectContain = ["creative.png", "chat.png", "mypage.png"].some((name) => src.includes(name));

  return (
    <div className="relative group">
      <div className={`absolute inset-0 ${bgColor} rounded-[3rem] transform ${rotation} scale-95 group-hover:${hoverRotation} group-hover:scale-100 transition-all duration-300`}></div>
      <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl overflow-hidden">
        <div className={`rounded-[2rem] overflow-hidden w-full h-full bg-white dark:bg-slate-900 ${useObjectContain ? "flex items-center justify-center" : ""}`}>
          <Image 
            alt={alt} 
            src={src} 
            width={300} 
            height={600} 
            className={`w-full h-full ${useObjectContain ? "object-contain" : "object-cover"}`} 
          />
        </div>
      </div>
    </div>
  );
}

