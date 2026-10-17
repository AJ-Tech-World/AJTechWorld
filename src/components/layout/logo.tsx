import Link from "next/link";


interface LogoProps {
  className?: string;
  iconOnly?: boolean;
}

export function Logo({ className = "", iconOnly = false }: LogoProps) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2.5 group transition-opacity hover:opacity-90 ${className}`}
      aria-label="AJ Tech World - Home"
    >
      {/* Monogram Badge */}
      
      <div className=" w-44 flex items-center justify-center">
        <img src="/AJ Tech World Monogram Logo.png" alt="AJ Tech World Logo" className="w-full h-full object-contain" />        
      </div>

      {/* {!iconOnly && (
        <span className="font-bold text-gray-900 tracking-tight text-lg group-hover:text-black transition-colors">
          AJ Tech World
        </span>
      )} */}
    </Link>
  );
}

