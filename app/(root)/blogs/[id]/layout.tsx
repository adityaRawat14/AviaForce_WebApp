
function layout({children}:{children:React.ReactNode}) {
  return (
    <div className="overflow-y-auto h-[150vh] bg-blue-100 thin-scrollbar ">{children}</div>
  )
}

export default layout



