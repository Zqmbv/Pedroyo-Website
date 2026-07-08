import { ImageWithFallback } from "./figma/ImageWithFallback";
import logoImg from "../../imports/PedroyoGames_logo.png";

/**
 * Modern Pedroyo Games logo utilizing the provided image asset.
 */
export function Logo({ compact = false, className }: { compact?: boolean; className?: string }) {
  return (
    <div className="flex items-center justify-center select-none">
      <ImageWithFallback 
        src={logoImg} 
        alt="Pedroyo Games Logo" 
        className={className || "h-10 w-auto object-contain"} 
      />
    </div>
  );
}
