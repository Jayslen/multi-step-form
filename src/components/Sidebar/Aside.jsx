import ilustrationMobile from '../../assets/bg-sidebar-mobile.svg'
import ilustrationDesktop from '../../assets/bg-sidebar-desktop.svg'
import { AsideList } from './AsideList'

export function Aside({ currentStep }) {
  const isMobileViewport = document.body.scrollWidth >= 720
  return (
    <aside
      className="h-36 w-full md:w-52 md:h-full rounded-none md:p-4 text-white bg-cover md:static md:rounded-md"
      style={{
        backgroundImage: `url(${
          isMobileViewport ? ilustrationDesktop : ilustrationMobile
        })`,
      }}
    >
      <AsideList currentStep={currentStep} />
    </aside>
  )
}
