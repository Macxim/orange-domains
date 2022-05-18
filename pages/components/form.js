import { useRouter } from 'next/router';


export default function Form({ status }) {
  const router = useRouter();

  const handleFocus = () => {
    if (router.query.signup == 'success'){
      router.replace('/', undefined, { shallow: true });
    }
  };

  return (
    <div className="mt-12">
      {status?.signup == "success" ? (
        <div className="w-full max-w-xs mx-auto mb-6 overflow-hidden rounded-md shadow-sm pointer-events-auto bg-od-peach ring-1 ring-od-navy/20 ring-opacity-20">
          <div className="flex items-start p-2">
            <div className="flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-od-navy" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="flex-1 w-0 ml-3">
              <p className="text-sm font-medium text-od-navy">Perfect! We will be in touch shortly.</p>
            </div>
          </div>
        </div>
      ) : null}
      <p className="text-base font-medium text-center text-od-navy/90 sm:text-base">Sign up and be the first to hear when we launch</p>
      <form className="w-full mt-4 sm:max-w-lg sm:mx-auto sm:px-12" method="post" action="/api/subscribe">
        <label htmlFor="email" className="sr-only">
          Email address
        </label>
        <div className="flex flex-col">
          <input
            type="email"
            name="email"
            id="email"
            autoComplete="email"
            className="block w-full h-12 border-0 border-transparent bg-white/40 hover:bg-white/50 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#FF6700]/5 text-od-navy/80 base sm:text-sm placeholder:text-od-black/50 rounded-md text-center"
            placeholder="Enter your email address"
            required
            onFocus={handleFocus}
          />
          <button
            type="submit"
            className="h-12 mt-2 w-full inline-flex justify-center items-center px-[2.25rem] py-[0.875rem] text-[0.9375rem] font-medium bg-od-navy border border-transparent text-white hover:bg-[#181251] focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-[#181251] rounded-md"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  )
}

