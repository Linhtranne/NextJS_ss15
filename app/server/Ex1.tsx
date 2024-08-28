
async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!res.ok) {
    throw new Error('Error');
  }
  
  return res.json();
}
export default async function Page() {
  const data = await getData();

  return (
    <div>
      <h2><b>List of post</b></h2>
      {data.map((item:any) => (
        <p key={item.id}>{item.title}</p>
      ))}
    </div>
  );
}
