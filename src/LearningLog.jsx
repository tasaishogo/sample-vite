import { useState } from 'react'
import { FormGroups } from './components/FormGroups'
import { PreviewList } from './components/PreviewList'
import { LogList } from './components/LogList'


export const LearningLog = () => {
  const [logTitle, setLogTitle] = useState('')
  const [logTime, setLogTime] = useState(0)
  const [records, setRecords] = useState([]);

  const onChangeLogTitle = (e) => {
    setLogTitle(e.target.value)
  }

  const onChangeLogTime = (e) => {
    setLogTime(e.target.value)
  }

  const InputItems = [
    { label: "学習項目", key: "title", type: "text", placeholder: "学習項目の概要を入力してください", value: logTitle, onChange: onChangeLogTitle },
    { label: "学習時間", key: "time", type: "number", placeholder: "学習時間を入力してください", value: logTime, onChange: onChangeLogTime }
  ]

  const addLearningLog = ({ records, title, time }) => {
    setRecords([...records, { title, time }])
    setLogTitle('')
    setLogTime(0)
  }

  return (
    <>
      <h1>学習記録</h1>
      <FormGroups items={InputItems} />
      <PreviewList items={InputItems} />
      <button onClick={() => addLearningLog({ records, title: logTitle, time: logTime })}>登録</button>
      <LogList logs={records} />
    </>
  )
}
