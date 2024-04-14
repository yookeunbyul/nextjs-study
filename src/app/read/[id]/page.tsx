export default function Read({ params }: { parmas: { id: string } }) {
  return (
    <>
      <h2>Read</h2>
      paramters {params.id}
    </>
  );
}
