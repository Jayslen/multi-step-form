import thanksIcon from '../assets/icon-thank-you.svg'
export function Confirm() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-1">
      <img src={thanksIcon} alt="" />
      <h1 className="font-bold text-4xl text-[#03295a]">Thanks You!</h1>
      <p className="text-center max-w-sm text-gray-500">
        Thanks for confirming your suscription!We hope you have fun using our
        platform. If you ever need suport, please feel free to email us at
        support@gmail.com
      </p>
    </div>
  )
}
