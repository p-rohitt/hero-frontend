import Carousel from "@/components/Carousel";
import {
  UserButton,
  SignInButton,
  SignIn,
  SignedIn,
  SignedOut,
  UserProfile,
  useUser,
  SignOutButton,
} from "@clerk/nextjs";

export default function Home() {
  const items = [
    {
      img: "/bg.jpg", // Replace '/path/to/image1.jpg' with the actual path to your image file
      desc: "Trusted Warranty Improvisation",
      buttonIcon: "/Hero-logo.svg", // Replace '/path/to/icon1.png' with the actual path to your icon file
    },
    {
      img: "/bg.png",
      desc: "Manage all your vehicles",
      buttonIcon: "/Hero-logo.svg",
    },
    {
      img: "/img3.jpg",
      desc: "Reliable",
      buttonIcon: "/Hero-logo.svg",
    },
    {
      img: "/bg.png",
      desc: "Description for item 4",
      buttonIcon: "/Hero-logo.svg",
    },
    // Add more items as needed
  ];

  return (
    <div className=" w-[100vw] min-h-screen flex items-center justify-center ">
      <Carousel items={items} />
    </div>
  );
}
