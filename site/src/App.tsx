export default function App() {
  const NOTICE_TEXT = "正在开发中..."
  const EXPECTED_DATE_TEXT = "预期上线时间 - xxxx年xx月xx日"

  return (
    <div className="w-screen h-screen">
      <div className="flex justify-center items-center h-full">
        <div className="flex flex-col text-center gap-4">
          <span>{NOTICE_TEXT}</span>
          <span className="text-sm">{EXPECTED_DATE_TEXT}</span>
        </div>
      </div>
    </div>
  )
}
