import { SignIn } from '@clerk/nextjs'

const Page = () => {
  return (
    <div className="h-full bg-[#111827] flex items-center justify-center">
        <SignIn />
    </div>
    
  )
}

export default Page