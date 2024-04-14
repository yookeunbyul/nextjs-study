export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <form>
      <h2>Create</h2>
      {children}
    </form>
  );
}
