export function TechTag({ children }: { children: React.ReactNode }) {
  return (
      <div className="inline-flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium leading-5 text-accent gap-x-2">
        {children}
      </div>
  );
}

