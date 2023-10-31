import Image from "next/image";

const Logo = ({ text }: { text: true | false }) => {
  return (
    <div className="flex items-center">
      <Image
        src="/logo.png"
        width={50}
        height={50}
        alt="logo"
        className=" lg:-my-4 lg:-ml-2"
      />
      <p className={`${text ? "" : " hidden lg:inline"} text-sm font-bold`}>
        Snaptweet
      </p>
    </div>
  );
};
export default Logo;