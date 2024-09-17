import React, { useState } from "react"

const TrTextConTent = ({label, data1 , data2 , data3 ,data4 ,data5 ,data6 ,data7 ,data8 , data9})=>{

   return (
      <div  className="border-b" style={{ borderColor: '#ffffff19', borderBottomWidth: '1px' }}>
            <div className="flex flex-wrap gap-0 p-2.5 px-4 justify-between">
               <div className="flex-none basis-[350px] relative max-w-full min-h-[1px]">
                  <div className="flex flex-wrap gap-0 pr-7.5 items-center justify-between flex-nowrap">
                     <div className="flex-1 min-w-0 relative max-w-full min-h-[1px]">
                           <div className="flex flex-nowrap items-center gap-0">
                                 <div className="mr-2 cursor-pointer select-none h-[14px] min-w-[14px]">
                                    <svg className="w-3.5 h-3.5" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"> <rect width="14" height="14" rx="4" fill="white" fillOpacity="0.1"></rect> <path d="M4 7L10 7" stroke="#999999" strokeLinecap="round"></path> <path d="M7 4L7 10" stroke="#999999" strokeLinecap="round"></path> </svg>
                                 </div>
                                 <h6 className="font-inter text-sm leading-5 font-medium text-[#e9ebec]">{label}</h6>
                           </div>
                     </div>
                     <div className="text-text-content">Biểu đồ Mini or Bỏ</div>
                  </div>
               </div>
               <div className="flex-1 relative max-w-full min-h-[1px]">
                  <div className="flex flex-nowrap items-center justify-between gap-0 h-full">
                        <div className="relative max-w-full min-h-[1px]" style={{ minWidth: 'calc(11.1111%)' }}>
                           <div className="flex flex-wrap gap-0 pl-2 justify-end">
                              <h6 className="font-inter text-sm leading-5 font-medium text-[#e9ebec]">{data1}</h6>
                           </div>
                        </div>
                        <div className="relative max-w-full min-h-[1px]" style={{ minWidth: 'calc(11.1111%)' }}>
                           <div className="flex flex-wrap gap-0 pl-2 justify-end">
                              <h6 className="font-inter text-sm leading-5 font-medium text-[#e9ebec]">{data2}</h6>
                           </div>
                        </div>
                        <div className="relative max-w-full min-h-[1px]" style={{ minWidth: 'calc(11.1111%)' }}>
                           <div className="flex flex-wrap gap-0 pl-2 justify-end">
                              <h6 className="font-inter text-sm leading-5 font-medium text-[#e9ebec]">{data3}</h6>
                           </div>
                        </div>
                        <div className="relative max-w-full min-h-[1px]" style={{ minWidth: 'calc(11.1111%)' }}>
                           <div className="flex flex-wrap gap-0 pl-2 justify-end">
                              <h6 className="font-inter text-sm leading-5 font-medium text-[#e9ebec]">{data4}</h6>
                           </div>
                        </div>
                        <div className="relative max-w-full min-h-[1px]" style={{ minWidth: 'calc(11.1111%)' }}>
                           <div className="flex flex-wrap gap-0 pl-2 justify-end">
                              <h6 className="font-inter text-sm leading-5 font-medium text-[#e9ebec]">{data5}</h6>
                           </div>
                        </div>
                        <div className="relative max-w-full min-h-[1px]" style={{ minWidth: 'calc(11.1111%)' }}>
                           <div className="flex flex-wrap gap-0 pl-2 justify-end">
                              <h6 className="font-inter text-sm leading-5 font-medium text-[#e9ebec]">{data6}</h6>
                           </div>
                        </div>
                        <div className="relative max-w-full min-h-[1px]" style={{ minWidth: 'calc(11.1111%)' }}>
                           <div className="flex flex-wrap gap-0 pl-2 justify-end">
                              <h6 className="font-inter text-sm leading-5 font-medium text-[#e9ebec]">{data7}</h6>
                           </div>
                        </div>
                        <div className="relative max-w-full min-h-[1px]" style={{ minWidth: 'calc(11.1111%)' }}>
                           <div className="flex flex-wrap gap-0 pl-2 justify-end">
                              <h6 className="font-inter text-sm leading-5 font-medium text-[#e9ebec]">{data8}</h6>
                           </div>
                        </div>
                        <div className="relative max-w-full min-h-[1px]" style={{ minWidth: 'calc(11.1111%)' }}>
                           <div className="flex flex-wrap gap-0 pl-2 justify-end">
                              <h6 className="font-inter text-sm leading-5 font-medium text-[#e9ebec]">{data9}</h6>
                           </div>
                        </div>
                  </div>
               </div>
            </div>
      </div>
   )
}

const TieuDeBaoCao = ({label, onClick })=> {
   return (
      <div>
          <div className="p-4 pb-4 border-b border-[#ffffff19] cursor-pointer" onClick={onClick}>
            <h6 className="font-inter text-sm leading-5 font-medium text-[#ec8000] flex items-center">
               <svg className="w-3.5 h-3.5 mr-2" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"> <rect width="14" height="14" rx="4" fill="white" fillOpacity="0.1"></rect> <path d="M4 7L10 7" stroke="#999999" strokeLinecap="round"></path> </svg>
                {label}
            </h6>
          </div>
      </div>
   )
}

const ChiSoTaiChinh = () => {
   const [visibleSections, setVisibleSections] =  useState({'Chi tiêu Báo cáo kết quả kinh doanh (Tỷ đồng)': true , "Tiêu đề khácb" : true});
   const handleToggle = (label) => {
     setVisibleSections(prevSections => ({
       ...prevSections,
       [label]: !prevSections[label]
     }));
   };
   return (
     <div>
       <TieuDeBaoCao
         label="Chi tiêu Báo cáo kết quả kinh doanh (Tỷ đồng)"
         onClick={() => handleToggle("Chi tiêu Báo cáo kết quả kinh doanh (Tỷ đồng)")}
       />
       {visibleSections["Chi tiêu Báo cáo kết quả kinh doanh (Tỷ đồng)"] && (
         <>
           <TrTextConTent label="Doanh Thu Thuần" data1="-" data2="-" data3="-" data4="-" data5="-" data6="-" data7="-" data8="-" data9="-" />
           <TrTextConTent label="Doanh Thu Thuần" data1="-" data2="-" data3="-" data4="-" data5="-" data6="-" data7="-" data8="-" data9="-" />
           <TrTextConTent label="Doanh Thu Thuần" data1="-" data2="-" data3="-" data4="-" data5="-" data6="-" data7="-" data8="-" data9="-" />
           <TrTextConTent label="Doanh Thu Thuần" data1="-" data2="-" data3="-" data4="-" data5="-" data6="-" data7="-" data8="-" data9="-" />
           <TrTextConTent label="Doanh Thu Thuần" data1="-" data2="-" data3="-" data4="-" data5="-" data6="-" data7="-" data8="-" data9="-" />
         </>
       )}
       <TieuDeBaoCao
         label="Tiêu đề khác"
         onClick={() => handleToggle("Tiêu đề khácb")}
       />
       {visibleSections["Tiêu đề khácb"] && (
         <>
           <TrTextConTent label="Doanh Thu Thuần" data1="-" data2="-" data3="-" data4="-" data5="-" data6="-" data7="-" data8="-" data9="-" />
           <TrTextConTent label="Doanh Thu Thuần" data1="-" data2="-" data3="-" data4="-" data5="-" data6="-" data7="-" data8="-" data9="-" />
           <TrTextConTent label="Doanh Thu Thuần" data1="-" data2="-" data3="-" data4="-" data5="-" data6="-" data7="-" data8="-" data9="-" />
           <TrTextConTent label="Doanh Thu Thuần" data1="-" data2="-" data3="-" data4="-" data5="-" data6="-" data7="-" data8="-" data9="-" />
         </>
       )}
       <TieuDeBaoCao label={"Day la tieu de 3"}
       onClick={()=>{handleToggle('babyday')}}
       />
      {visibleSections["babyday"] && (
            <>
            <TrTextConTent label="Doanh Thu Thuần" data1="-" data2="-" data3="-" data4="-" data5="-" data6="-" data7="-" data8="-" data9="-" />
            <TrTextConTent label="Doanh Thu Thuần" data1="-" data2="-" data3="-" data4="-" data5="-" data6="-" data7="-" data8="-" data9="-" />
            <TrTextConTent label="Doanh Thu Thuần" data1="-" data2="-" data3="-" data4="-" data5="-" data6="-" data7="-" data8="-" data9="-" />
            <TrTextConTent label="Doanh Thu Thuần" data1="-" data2="-" data3="-" data4="-" data5="-" data6="-" data7="-" data8="-" data9="-" />
            <TrTextConTent label="Doanh Thu Thuần" data1="-" data2="-" data3="-" data4="-" data5="-" data6="-" data7="-" data8="-" data9="-" />
            <TrTextConTent label="Doanh Thu Thuần" data1="-" data2="-" data3="-" data4="-" data5="-" data6="-" data7="-" data8="-" data9="-" />
            <TrTextConTent label="Doanh Thu Thuần" data1="-" data2="-" data3="-" data4="-" data5="-" data6="-" data7="-" data8="-" data9="-" />
            <TrTextConTent label="Doanh Thu Thuần" data1="-" data2="-" data3="-" data4="-" data5="-" data6="-" data7="-" data8="-" data9="-" />
            <TrTextConTent label="Doanh Thu Thuần" data1="-" data2="-" data3="-" data4="-" data5="-" data6="-" data7="-" data8="-" data9="-" />
            <TrTextConTent label="Doanh Thu Thuần" data1="-" data2="-" data3="-" data4="-" data5="-" data6="-" data7="-" data8="-" data9="-" />
            <TrTextConTent label="Doanh Thu Thuần" data1="Data1" data2="-" data3="-" data4="-" data5="-" data6="-" data7="-" data8="-" data9="Kim Hùng" />
            </>
         )}
     </div>
   );
};
 
export default ChiSoTaiChinh;