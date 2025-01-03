import { useState } from 'react'
import { LogList } from './components/LogList'


export const LearningLog = () => {
  const records = [
    { title: "勉強の記録1", time: 1 },
    { title: "勉強の記録2", time: 3 },
    { title: "勉強の記録3", time: 5 }
  ]
  return (
    <>
      <h1>学習記録</h1>
      <LogList logs={records} />
    </>
  )
}
