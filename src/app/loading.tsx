import Image from "next/image";
import spinner from "../../public/spinner.png";

export default function Loading() {
  return (
    <div className="animate-spin m-auto">
      <Image src={spinner} alt="loading..." height={78} width={78} />
    </div>
  );
}
