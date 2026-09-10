import React from "react";
import { cn } from "@/lib/utils";

interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Logo({ className, ...props }: LogoProps) {
  return (
    <div className={cn("group flex flex-col items-center relative cursor-pointer select-none", className)} {...props}>
      <div className="w-24 h-auto relative z-10 transition-transform duration-300 group-hover:scale-105">
        <svg id="navic-dog" viewBox="0 0 200 250" xmlns="http://www.w3.org/2000/svg" className="w-full h-full overflow-visible">
          <style>
            {`
              .dog-fill { fill: #113693; }
              .dog-stroke { stroke: #113693; stroke-width: 6; stroke-linecap: round; stroke-linejoin: round; fill: none; }
              .dog-stroke-thin { stroke: #113693; stroke-width: 3; stroke-linecap: round; stroke-linejoin: round; fill: none; }
              .dog-stroke-med { stroke: #113693; stroke-width: 4.5; stroke-linecap: round; stroke-linejoin: round; fill: none; }
              
              .paw-anim {
                transform-origin: 90px 190px;
                animation: tapTap 2s infinite ease-in-out;
              }
              .group:hover .paw-anim {
                animation-duration: 1s;
              }
              
              @keyframes tapTap {
                  0%, 100% { transform: rotate(0deg) translateY(0); }
                  10% { transform: rotate(15deg) translateY(12px) scaleY(1.05); }
                  20% { transform: rotate(0deg) translateY(0); }
                  30% { transform: rotate(15deg) translateY(12px) scaleY(1.05); }
                  40%, 90% { transform: rotate(0deg) translateY(0); }
              }
            `}
          </style>

          {/* Tail */}
          <path className="dog-stroke" d="M55,180 C20,195 25,230 55,235" style={{ strokeWidth: 9 }} />
          <path className="dog-stroke-thin" d="M45,210 C35,215 35,225 45,225" />

          {/* Body */}
          <path className="dog-stroke" d="M75,235 L70,120 C68,80 85,55 110,55 C135,55 142,80 140,120 L135,235 Z" fill="#ffffff" />
          
          {/* Crosshatch shading */}
          <path className="dog-stroke-thin" d="M72,130 L80,135 M71,150 L79,155 M71,170 L80,175 M71,190 L81,195 M72,210 L82,215 M73,230 L83,232" />
          
          {/* Collar */}
          <path className="dog-stroke-med" d="M68,110 Q105,125 141,110" />
          <circle className="dog-fill" cx="105" cy="120" r="6" />
          <circle fill="#ffffff" cx="104" cy="119" r="2" />
          
          {/* Left Ear */}
          <path className="dog-fill" d="M75,65 C40,70 30,120 40,165 C45,195 55,160 55,130 C58,110 65,80 75,65 Z" />
          <path className="dog-stroke-med" d="M45,120 Q35,150 42,185" />
          <path className="dog-stroke-med" d="M35,110 Q25,140 32,165" />
          <path className="dog-stroke-med" d="M50,90 Q40,130 52,160" />
          <path className="dog-stroke-thin" d="M65,75 C45,100 45,140 55,170" />
          
          {/* Right Ear */}
          <path className="dog-fill" d="M135,65 C170,70 180,120 170,165 C165,195 155,160 155,130 C152,110 145,80 135,65 Z" />
          <path className="dog-stroke-med" d="M165,120 Q175,150 168,185" />
          <path className="dog-stroke-med" d="M175,110 Q185,140 178,165" />
          <path className="dog-stroke-med" d="M160,90 Q170,130 158,160" />
          <path className="dog-stroke-thin" d="M145,75 C165,100 165,140 155,170" />

          {/* Top head hair */}
          <path className="dog-stroke" d="M125,55 C140,30 155,35 170,50" />
          <path className="dog-stroke-med" d="M135,50 C145,35 155,40 160,45" />
          <path className="dog-stroke-thin" d="M110,55 C115,45 125,45 130,50" />
          
          {/* Eyes */}
          <circle className="dog-fill" cx="90" cy="75" r="5.5" />
          <circle fill="#ffffff" cx="91" cy="74" r="1.5" />
          
          <circle className="dog-fill" cx="120" cy="75" r="5.5" />
          <circle fill="#ffffff" cx="121" cy="74" r="1.5" />
          
          {/* Eyebrows */}
          <path className="dog-stroke-thin" d="M85,62 Q90,58 95,62" />
          <path className="dog-stroke-thin" d="M115,62 Q120,58 125,62" />
          
          {/* Nose */}
          <path className="dog-fill" d="M90,95 L120,95 C120,105 113,115 105,115 C97,115 90,105 90,95 Z" />
          <path fill="#ffffff" d="M96,98 C100,97 105,97 108,98 C108,100 100,100 96,98 Z" />
          
          {/* Mouth */}
          <path className="dog-stroke-med" d="M105,115 L105,140 C105,155 95,150 90,145" />
          <path className="dog-stroke-med" d="M105,140 C105,155 115,150 120,145" />

          {/* Whisker spots */}
          <circle className="dog-fill" cx="85" cy="130" r="1" />
          <circle className="dog-fill" cx="82" cy="136" r="1" />
          <circle className="dog-fill" cx="125" cy="130" r="1" />
          <circle className="dog-fill" cx="128" cy="136" r="1" />
          
          {/* Base Line */}
          <line className="dog-stroke" x1="45" y1="235" x2="165" y2="235" />

          {/* Static Right Paw */}
          <path className="dog-stroke" d="M125,235 L125,200" />
          <path className="dog-stroke-med" d="M125,235 Q130,235 130,230" />
          <path className="dog-stroke-thin" d="M120,235 L120,225" />
          <path className="dog-stroke-thin" d="M130,235 L130,225" />

          {/* Animated Left Paw */}
          <g className="paw-anim">
              <path className="dog-stroke" d="M90,190 L90,235" />
              <path className="dog-stroke-med" d="M90,235 Q85,235 85,230" />
              <path className="dog-stroke-thin" d="M85,235 L85,225" />
              <path className="dog-stroke-thin" d="M95,235 L95,225" />
          </g>
        </svg>
      </div>
      
      <div className="-mt-[2px] z-0">
        <h1 
          className="text-[2.2rem] font-bold text-primary m-0 tracking-tighter" 
          style={{ 
            fontFamily: "'Fredoka', 'Nunito', sans-serif",
            animation: "textBounce 2s infinite ease-in-out"
          }}
        >
          navic
        </h1>
        <style>
          {`
            @keyframes textBounce {
                0%, 100% { transform: translateY(0); }
                10% { transform: translateY(1.5px) rotate(-1deg); }
                20% { transform: translateY(0); }
                30% { transform: translateY(1.5px) rotate(-1deg); }
                40%, 90% { transform: translateY(0); }
            }
            .group:hover h1 {
              animation-duration: 1s;
            }
          `}
        </style>
      </div>
    </div>
  );
}
