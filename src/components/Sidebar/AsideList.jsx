function AsideLi({ step, stepName, isSelected }) {
  return (
    <li className="flex items-center gap-3">
      <p
        className={`rounded-full md:w-10 md:h-10 w-7 h-7 grid place-content-center font-bold text-md transition-colors ${
          isSelected === step ? 'bg-blue-400 text-black' : 'border'
        }`}
      >
        {step}
      </p>
      <div className="hidden md:block">
        <span className="font-medium uppercase text-[hsl(229,24%,87%)] text-xs">
          Step {step}
        </span>
        <h3 className="uppercase font-bold text-sm">{stepName}</h3>
      </div>
    </li>
  )
}

export function AsideList({ currentStep }) {
  return (
    <ul className="pt-4 flex justify-center md:justify-start md:flex-col gap-6 md:py-2 md:pt-0">
      <AsideLi step={1} stepName={'Your Info'} isSelected={currentStep} />
      <AsideLi step={2} stepName={'Select Plan'} isSelected={currentStep} />
      <AsideLi step={3} stepName={'Add-ons'} isSelected={currentStep} />
      <AsideLi step={4} stepName={'Summary'} isSelected={currentStep} />
    </ul>
  )
}
