import { SignUp } from "@clerk/nextjs";
 
export default function Page() {
  return (
    <div className="h-full bg-[#111827] flex items-center justify-center">
      <SignUp />
    </div>
  )
}