import Image from 'next/image';
import React from 'react';
import Thresh from '../../../assets/images/senhor noxiano comum.jpg';

const FeedSection: React.FC = () => {
  return (
    <section className="flex flex-col">
      <div className="flex flex-col posts">
        <div className="flex flex-col border border-gray-600 rounded-md w-[28.125rem] post">
          <h3>Lucas Marques Leão @</h3>
          <Image
            className="flex self-center"
            src={Thresh}
            alt="Thresh"
            height={300}
            width={400}
          />
          <span>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit
            possimus sit voluptate maiores cum unde beatae. Hic explicabo fugiat
            perspiciatis modi sunt ipsa voluptate, perferendis illo sint. Ad,
            magni perspiciatis!
          </span>
          <textarea name="msg-box" id="1" cols={30} rows={10}></textarea>
        </div>
      </div>
    </section>
  );
};

export default FeedSection;
