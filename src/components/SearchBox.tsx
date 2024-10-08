'use client';

import { useRouter } from 'next/navigation';
import { ChangeEvent, FormEvent, useState } from 'react';

function SearchBox() {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const router = useRouter();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    //     router.push(`/search/${encodeURIComponent(searchTerm.trim())}`);
    //encodeURIComponent(...): Esta función de JavaScript codifica un componente de URI. Lo que hace es reemplazar caracteres especiales en el término de búsqueda por una representación que sea segura para incluir en una URL. Por ejemplo, caracteres como espacios, signos de puntuación y otros caracteres especiales se convierten en una secuencia de caracteres que son válidos en URLs.

    router.push(`/search/${searchTerm}`);
    setSearchTerm('');

    console.log(searchTerm);
  }

  return (
    <>
      <form
        className='flex w-full justify-between items-center 
      text-gray-500 mx-auto px-5 max-w-6xl
      '
        onSubmit={(e) => handleSubmit(e)}
      >
        <input
          className='w-full text-gray-500 placeholder-gray-500  bg-transparent outline-none h-14 rounded-md flex-1'
          type='text'
          name='searchTerm'
          value={searchTerm}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setSearchTerm(e.target.value)
          }
          placeholder='Search Keywords...'
        />
        <button
          className='text-amber-500 disabled:text-gray-400'
          disabled={searchTerm === ''}
          type='submit'
        >
          Search
        </button>
      </form>
    </>
  );
}

export default SearchBox;
