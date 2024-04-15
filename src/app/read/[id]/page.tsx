export default async function Read({ params }: { parmas: { id: string } }) {
  const resp = await fetch(`http://localhost:9999/topics/${params.id}`);
  const topic = await resp.json();
  return (
    <>
      <h2>{topic.title}</h2>
      {topic.body}
    </>
  );
}
