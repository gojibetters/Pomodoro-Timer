import { Play } from 'phosphor-react'
import { CountdownContainer, HomeContainer, Separator } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <form id="pomodoroForm" action="/">
        <label htmlFor="task">Vou trabalhar em</label>
        <input id="task" type="text" />

        <label htmlFor="minutesAmount">durante</label>
        <input id="minutesAmount" type="number" />

        <span>minutos.</span>
      </form>

      <CountdownContainer>
        <span>0</span>
        <span>0</span>
        <Separator>:</Separator>
        <span>0</span>
        <span>0</span>
      </CountdownContainer>

      <button type="submit" form="pomodoroForm">
        <Play size={24} />
        Começar
      </button>
    </HomeContainer>
  )
}
