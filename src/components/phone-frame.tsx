interface IPhoneFrameProps {
  src: string;
  alt: string;
  title: string;
  description: string;
}

export default function PhoneFrame({
  src,
  alt,
  title,
  description,
}: IPhoneFrameProps) {
  return (
    <div className="group relative">
      <div className="mx-auto w-[200px] sm:w-[220px] md:w-[240px]">
        <div className="relative rounded-[28px] border-[3px] border-brand-border bg-brand-bg p-2 shadow-glass-lg">
          <div className="relative overflow-hidden rounded-[20px] bg-brand-secondary">
            <div className="absolute inset-x-0 top-0 z-10 flex h-6 items-center justify-center">
              <div className="h-[5px] w-[60px] rounded-full bg-brand-border" />
            </div>
            <div className="relative aspect-[9/19.5] overflow-hidden rounded-[20px]">
              <img
                src={src}
                alt={alt}
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="absolute inset-x-0 bottom-1 z-10 flex justify-center">
              <div className="h-[4px] w-[80px] rounded-full bg-brand-border" />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-3 text-center">
        <p className="text-sm font-medium text-brand-text-primary">
          {title}
        </p>
        <p className="text-xs text-brand-text-secondary mt-1 line-clamp-2 mx-auto max-w-[260px]">
          {description}
        </p>
      </div>
    </div>
  );
}