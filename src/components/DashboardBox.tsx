
import  { ReactNode } from 'react'

interface DashboardBoxProps {
    text: string
    value: number
    icon : ReactNode
}

function DashboardBox({ text, value, icon }: DashboardBoxProps) {
  return (
      <div className="w-full bg-white w-60 shadow-md m-3">
          <div className="p-3 flex gap-3">
              {icon}
              <div className="flex flex-col">
                  <div>{text}</div>
                  <div>{value}</div>
              </div>
          </div>
      </div>
  )
}

export default DashboardBox