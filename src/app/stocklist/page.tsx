import StockList from "@/src/components/organisms/StockList";


export default function StockListPage() {
   return (
     <div className="p-6">
       <h1 className="mb-4 rounded-xl border border-red-100 border-t-orange-200 text-2xl font-bold text-red-500">
         Danh sách cổ phiếu
       </h1>
       <StockList />
     </div>
   );
 }
 