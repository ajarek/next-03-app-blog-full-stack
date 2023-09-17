import Image from "next/image";

const Footer = () => {
  return (
    <div className='flex justify-between items-center px-10 h-10'>
      <div>©2023 Blogomania. Wszelkie prawa zastrzeżone.</div>
      <div className='flex gap-3'>
        <Image src="/1.png" width={20} height={15} className='' alt="@jarek dev" />
        <Image src="/2.png" width={20} height={15} className='' alt="@jarek dev" />
        <Image src="/3.png" width={20} height={15} className='' alt="@jarek dev" />
        <Image src="/4.png" width={20} height={15} className='' alt="@jarek dev" />
      </div>
    </div>
  );
};

export default Footer;
