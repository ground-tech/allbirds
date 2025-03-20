import { useState } from "react"


export const Newsletter = () => {
  
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
    
      if (!email || !/\S+@\S+\.\S+/.test(email)) {
        setMessage("Please enter a valid email address.");
        return;
      }
  
      
      setTimeout(() => {
        setMessage("Thank you for subscribing!");
        setEmail(""); // Clear input
      }, 1000);
    };

  return (
    <section id='newsletter' className='flex items-center justify-center bg-[#F1F1F1] min-h-[427px]'>
    <div className='max-w-3xl'>
         <div className='flex w-full flex-col text-black items-center justify-center gap-4 py-10 text-center sm:gap-6 px-6 sm:p-12 '>
            <div className='richtext'>
                <h2 className='text-4xl font-bold mb-8'>Want First Dibs?</h2>
                <p className='m-0'>Join our email list and be the first to know about new limited edition products, material innovations, and lots of other fun updates. </p>
            </div>
            <form onSubmit={handleSubmit} className="w-full max-w-xl flex gap-2 sm:flex-row">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Your Email Address"
          className="p-2 w-full bg-white border-b-2 outline-hidden"
          required
        />
        <button
          type="submit"
          className="flex h-12 uppercase cursor-pointer items-center justify-center whitespace-pre px-4 py-3 bg-black text-white hover:bg-white hover:text-black tracking-[2px] transition"
        >
          Sign Up
        </button>
      </form>
        <div className="w-full">
            <span className="text-sm">
            Note: You can opt-out at any time. See our 
            <a className="font-bold underline" href="/">Privacy Policy</a>
            &nbsp;and&nbsp; 
            <a className="font-bold underline" href="/">Terms</a>
            </span>
        </div>
         </div>
    </div>
    
    </section>
  )
}
