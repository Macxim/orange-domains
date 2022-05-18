import LogoFull from './logo-full';


export default function Footer () {
  return (
    <footer className="relative z-10">
      <div className="taller:static tall:static sm:fixed sm:inset-x-0 sm:bottom-0 sm:mt-0">
        <div className="px-6 py-10 mx-auto sm:px-16 max-w-8xl">
          <div className="flex flex-wrap items-center lg:grid lg:grid-cols-3">
            <div className="flex items-center justify-center w-full lg:justify-between lg:w-auto">
              <LogoFull />
            </div>

            <div className="flex-shrink-0 w-full mx-auto mt-4 text-sm text-base font-semibold text-center text-od-black/90 lg:mt-0 sm:w-auto">
              Built on Stacks and Bitcoin.
            </div>

            <div className="flex-shrink-0 w-full mx-auto mt-4 text-sm text-center lg:mr-0 text-od-black/80 lg:mt-0 sm:w-auto">
              ©&nbsp;2022 Orange Domains. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

