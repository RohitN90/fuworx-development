import Image from 'next/image';

interface PartnerCardProps {
  logoUrl: string;
  logoAlt: string;
  description: string;
  hasArrow?: boolean;
  customBg?: string;
}

export default function PartnerCard({ logoUrl, logoAlt, description, hasArrow, customBg = "bg-white" }: PartnerCardProps) {
  return (
    <div 
      className={`relative flex flex-col justify-between border border-gray-200 rounded-xl p-6 min-h-[220px] ${customBg}`}
    >
      {/* Optional Green Arrow Icon */}
      {hasArrow && (
        <div className="absolute top-4 right-4 bg-[#63C15D] rounded-full w-8 h-8 flex items-center justify-center shadow-sm">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-4 w-4 text-white" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
          </svg>
        </div>
      )}

      {/* Logo Section */}
      <div className="mt-4 mb-8">
        <div className="relative h-12 w-32">
          {/* Note: Update the width/height to best match your actual logo asset dimensions */}
          <Image 
            src={logoUrl} 
            alt={logoAlt} 
            fill
            className="object-contain object-left"
          />
        </div>
      </div>

      {/* Description Text */}
      <p className="text-slate-700 font-medium text-[15px] leading-relaxed max-w-[95%]">
        {description}
      </p>
    </div>
  );
}