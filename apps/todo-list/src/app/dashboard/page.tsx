import Link from 'next/link';
import React from 'react';
import FeedSection from '../../components/organisms/dashboard/FeedSection';

const Home: React.FC = () => {
  return (
    <main className="flex flex-col w-full h-full">
      <h1 className="flex">Home</h1>
      <h2 className="text-blue-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quasi
        recusandae, nisi incidunt id libero vitae rerum tempore officiis?
        Nesciunt aperiam asperiores neque qui explicabo aut voluptatibus,
        distinctio fugit quae!
      </h2>
      <h2 className="text-blue-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quasi
        recusandae, nisi incidunt id libero vitae rerum tempore officiis?
        Nesciunt aperiam asperiores neque qui explicabo aut voluptatibus,
        distinctio fugit quae!
      </h2>
      <h2 className="text-blue-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quasi
        recusandae, nisi incidunt id libero vitae rerum tempore officiis?
        Nesciunt aperiam asperiores neque qui explicabo aut voluptatibus,
        distinctio fugit quae!
      </h2>
      <h2 className="text-blue-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quasi
        recusandae, nisi incidunt id libero vitae rerum tempore officiis?
        Nesciunt aperiam asperiores neque qui explicabo aut voluptatibus,
        distinctio fugit quae!
      </h2>
      <h2 className="text-blue-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quasi
        recusandae, nisi incidunt id libero vitae rerum tempore officiis?
        Nesciunt aperiam asperiores neque qui explicabo aut voluptatibus,
        distinctio fugit quae!
      </h2>
      <h2 className="text-blue-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quasi
        recusandae, nisi incidunt id libero vitae rerum tempore officiis?
        Nesciunt aperiam asperiores neque qui explicabo aut voluptatibus,
        distinctio fugit quae!
      </h2>
      <h2 className="text-blue-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quasi
        recusandae, nisi incidunt id libero vitae rerum tempore officiis?
        Nesciunt aperiam asperiores neque qui explicabo aut voluptatibus,
        distinctio fugit quae!
      </h2>
      <FeedSection />
      <Link
        className="flex self-center border border-blue-800 hover:bg-blue-500 hover:text-white transition-all rounded-md p-4 w-fit"
        href="/auth/register"
      >
        Navegação ajuda devs
      </Link>
    </main>
  );
};

export default Home;
