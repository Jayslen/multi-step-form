import { useState } from 'react'
import { Aside } from './components/Sidebar/Aside'
import { UserDataProvider } from './context/DataContext'
import { YourInfo } from './components/Personal-form/YourInfo'
import { Plan } from './components/Plan-form/Plan'
import { AddOns } from './components/Addons-form/AddOns'
import { Text } from './components/SectionDescription'
import { Summary } from './components/Summary/SummarySection'
import { Confirm } from './components/Confirm'
import { Section } from './components/Section'

function App() {
  const [step, setStep] = useState(1)

  const nextStep = () => {
    setStep((prevState) => ++prevState)
  }
  const previusStep = () => {
    setStep((prevState) => --prevState)
  }
  const element = () => {
    if (step === 1) {
      return <YourInfo prevStep={previusStep} nextStep={nextStep} />
    } else if (step === 2) {
      return <Plan prevStep={previusStep} nextStep={nextStep} />
    } else if (step === 3) {
      return <AddOns prevStep={previusStep} nextStep={nextStep} />
    } else if (step === 4) {
      return <Summary prevStep={previusStep} setStep={setStep} />
    } else {
      return <Confirm />
    }
  }
  return (
    <main className="w-screen h-full md:h-screen bg-blue-100 md:p-0 md:grid md:place-content-center font-Ubuntu">
      <section className=" w-full md:w-[700px] md:h-[500px] shadow-2xl md:p-3 md:bg-white flex flex-col items-center md:items-start md:flex-row relative rounded-md">
        <Aside currentStep={step} />
        <UserDataProvider>
          <Section />
        </UserDataProvider>
      </section>
    </main>
  )
}

export default App
// finish
