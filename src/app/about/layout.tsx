export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <b>About Section</b>
      {children}
    </>
  );
}
