import { ReactNode } from "react";

export function Emphas({ text }: { text: string }) {
    return <span className="text-[#328E6E] font-semibold">{text}</span>;
}

interface AdvantageProps {
    emoji: string;
    children: ReactNode;
    bottomMargin?: string;
}
export function Advantage({
    emoji,
    children,
    bottomMargin = 'mb-2 xl:mb-8',
}: AdvantageProps) {
    return (
        <div className={`flex flex-row ${bottomMargin}`}>
            <p className="text-[16px] md:text-3xl lg:text-4xl xl:text-[20px]">{emoji}</p>
            <p className="font-empha text-[16px] ml-2 mb-1 md:text-3xl md:mb-6 lg:text-4xl xl:text-[20px]">
                {children}
            </p>
        </div>
    );
}

interface SectionTitleProps {
    title: string;
    underlineClass: string; // Tailwind class string으로 직접 지정
    titleClass?: string;
    containerClass?: string;
  }
  
  export function SectionTitle({
    title,
    underlineClass,
    titleClass = '',
    containerClass = '',
  }: SectionTitleProps) {
    return (
      <div className={`flex flex-row items-center ${containerClass}`}>
        <p className={`font-subtitle text-xl md:text-4xl ${titleClass}`}>{title}</p>
        <span className={`ml-2 bg-black h-[1px] xl:h-[2px] ${underlineClass}`} />
      </div>
    );
  }

//프로젝트 부분
export function Title({ text }: { text: string }) {
    return (
        <div className="text-white bg-orange-300 w-fit p-1 font-bold mt-2 text-[17px] md:text-[26px] md:p-2">
            {text}
        </div>
    );
}

export function DesTitle({ text }: { text: string }) {
    return (
        <div className="text-orange-500 font-bold text-[18px] my-1 md:text-[27px]">
            {text}
        </div>
    );
}

export function ProjectIconTitle({ icon, text, className = '' }: { icon: string; text: string; className?: string }) {
    return (
      <p className={`mt-5 font-empha text-[20px] md:text-[30px] whitespace-nowrap mr-1 ${className}`}>
        {icon} {text}
      </p>
    );
  }

export function Overview({ text }: { text: string }) {
    return (
        <div className="font-bold text-[17px] text-[#328E6E] leading-5 md:text-[25px] md:leading-7">
            {text}
        </div>
    );
}

export function ProjectEmphas({ text }: { text: string }) {
    return (
        <span className="font-bold text-[#328E6E] text-[17px] md:text-[24px]">
            {text}
        </span>
    );
}

type ParagraphProps = {
    children: React.ReactNode;
    className?: string;
};

export function Preview({ children, className = "" }: ParagraphProps) {
    return (
        <div className={`flex items-start gap-2 ${className}`}>
            <span className="text-[14px] md:text-[24px] leading-tight xl:text-[20px]">•</span>
            <p className="text-[14px] md:text-[24px] leading-snug xl:text-[20px]">
                {children}
            </p>
        </div>
    );
}

export function Detail({ children, className = "" }: ParagraphProps) {
    return (
        <div className="flex items-start gap-2">
            <span className="text-[16px] md:text-[22px] leading-tight">•</span>
            <p className={`text-[16px] md:text-[22px] leading-snug ${className}`}>
                {children}
            </p>
        </div>
    );
}

export function Detail2({ children }: ParagraphProps) {
    return (
        <div className="flex items-start gap-2">
            &nbsp;&nbsp;
            <span className="text-[16px] md:text-[24px] leading-tight">•</span>
            <p className="text-[16px] md:text-[24px] leading-snug">
                {children}
            </p>
        </div>
    );
}

export function Paragraph({ children }: ParagraphProps) {
    return (
        <div className="md:text-[22px] text-[16px]">
            &nbsp;&nbsp;{children}
        </div>
    );
}
