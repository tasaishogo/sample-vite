import { useState } from 'react'
import { InputLogs } from './components/InputLogs'
import { LogList } from './components/LogList'


export const LearningLog = () => {
  const [logTitle, setLogTitle] = useState('')
  const [logTime, setLogTime] = useState(0)

  const onChangeLogTitle = (e) => {
    setLogTitle(e.target.value)
  }

  const onChangeLogTime = (e) => {
    setLogTime(e.target.value)
  }

  const records = [
    { title: "勉強の記録1", time: 1 },
    { title: "勉強の記録2", time: 3 },
    { title: "勉強の記録3", time: 5 }
  ]
  return (
    <>
      <h1>学習記録</h1>
      <InputLogs
        logTitle={logTitle}
        logTime={logTime}
        onChangeLogTitle={onChangeLogTitle}
        onChangeLogTime={onChangeLogTime}
      />
      <LogList logs={records} />
    </>
  )
}
