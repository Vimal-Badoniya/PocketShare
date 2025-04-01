"use client";
import { useRouter } from "next/navigation";
import { IoReturnDownBack } from "react-icons/io5";

export default function BackButton() {
  const router = useRouter();

  console.log(router);

  return (
    <div
      className="backButtonWrapper"
      onClick={() => {
        router.back();
      }}
    >
      <IoReturnDownBack className="backButtonIcon" />
    </div>
  );
}
