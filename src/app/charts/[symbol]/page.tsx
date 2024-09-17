"use client"
import Chart from "./chart";
export default function ChiTietSymbol() {
   return (
    <div className="flex justify-between min-h-[300px] h-[calc(100vh-56px)] border-t-4 border-l-4 border-white/10">
        <div className="flex flex-row h-full overflow-hidden w-full">
           <div className="" style={{ flex: '80 1 0px', overflow: 'hidden' }}>
              <Chart/>
          </div>
          <div className="w-full" style={{ display: 'block' , width : "332px"}}>
          </div>
        </div>
    </div>
   );
 }