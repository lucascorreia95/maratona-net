export function Cointainer({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen max-w-7xl m-auto px-3">
      {children}
    </div>
  );
}
