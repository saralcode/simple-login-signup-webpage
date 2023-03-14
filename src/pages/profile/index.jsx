import { useAuthContext } from "@/lib/firebase/auth_context";
import SmallTitle from "@/lib/pagecomponents/custom/smalltitle";
import Link from "next/link";
export default function Profile() {
  const { user } = useAuthContext();
  return (
    <div className="max-w-6xl p-2 md:p-0 mx-auto">
      <SmallTitle>Profile</SmallTitle>
      <div className="flex item-center place-items-center  flex-col w-full">
        <h2 className="inline-block">You&apos;re logged in as {user ? user.displayName : ""}! </h2>

        <Link href="/logout" className="transition-all hover:scale-110" >Logout</Link>

      </div>
    </div>
  );
}
