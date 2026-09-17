export function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative mx-auto w-full max-w-[240px]">
      <div className="relative rounded-[2.4rem] bg-brand-navy p-2.5 shadow-xl">
        <div className="absolute left-1/2 top-2.5 z-10 h-4 w-24 -translate-x-1/2 rounded-full bg-brand-navy" />
        <div className="overflow-hidden rounded-[1.7rem] bg-black">{children}</div>
        <div className="absolute bottom-1.5 left-1/2 h-1 w-16 -translate-x-1/2 rounded-full bg-white/40" />
      </div>
    </div>
  );
}
