import SocialIcons from '../molecules/SocialIcons';

const Footer: React.FC = () => {
  return (
    <footer className="flex bg-gray-800 text-white p-4 w-full">
      {/* TODO: Social Networks Logo */}
      <div className="container mx-auto text-center">
        <SocialIcons />
        <p className="flex justify-start items-center">
          &copy; 2023 Lucas Marques
        </p>
      </div>
    </footer>
  );
};

export default Footer;
