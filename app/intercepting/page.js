import Link from 'next/link';

export default function Home() {
  const photos = Array.from({ length: 9 }, (_, i) => i);
  console.info('photos', photos);

  return (
    <main className="container mx-auto">
      <h1 className="text-center text-4xl font-bold m-10">NextGram</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 auto-rows-max	 gap-6 m-10">
        {photos.map((id) => (
          <Link key={id} href={`/intercepting/photos/${id}`}>
            <div
              className={
                'w-full h-[100px] bg-green-400 box-center'
              }
            >
              <p className={'text-white'}>Photo {id}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
