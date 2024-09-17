export default function Sidebar(){
   return (
       <>
        <div className="fixed top-0 h-[100vh] w-[56px] bg-background shadow-[5px_0_10px_#0000004d] border-r border-[#ffffff19] flex flex-col select-none transition-all duration-300 z-[1000]">
            <div className="h-[300px]">
                <div className="flex items-center justify-center relative cursor-pointer m-1 w-12 h-12 rounded-lg hover:bg-zinc-800">
                    <div className="inline-flex items-center cursor-pointer ">
                        <div className="relative bg-button rounded-full w-8 h-8 ">
                            <img src="https://tse4.mm.bing.net/th?id=OIP.UFnjPOpdMILsRPtbhHj_wwHaEK&pid=Api&P=0&h=180" alt="" className="absolute rounded-full object-cover w-full h-full"/>
                            <div className="w-full absolute top-full left-0 transform -translate-y-1/2">
                                <div className="font-inter font-medium text-[8px] leading-[9.68px] text-center px-1 py-[1px] rounded bg-slate-500 text-text-content">Quyền</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center relative w-14 h-14 cursor-pointer mr-0 hover:bg-zinc-800">
                    <div className="flex items-center justify-center w-full h-full">
                        <svg  className="font-light fill-current text-text-content" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"  > <path d="M19 13.586V10c0-3.217-2.185-5.927-5.145-6.742C13.562 2.52 12.846 2 12 2s-1.562.52-1.855 1.258C7.185 4.074 5 6.783 5 10v3.586l-1.707 1.707A.996.996 0 0 0 3 16v2a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-2a.996.996 0 0 0-.293-.707L19 13.586zM19 17H5v-.586l1.707-1.707A.996.996 0 0 0 7 14v-4c0-2.757 2.243-5 5-5s5 2.243 5 5v4c0 .266.105.52.293.707L19 16.414V17zm-7 5a2.98 2.98 0 0 0 2.818-2H9.182A2.98 2.98 0 0 0 12 22z" /> </svg>
                    </div>
                </div>
                <div>
                    <a href="#">
                        <div className="flex items-center justify-center relative w-14 h-14 cursor-pointer mr-0 hover:bg-zinc-800"> 
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current text-text-content" > <path d="m6.516 14.323-1.49 6.452a.998.998 0 0 0 1.529 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082a1 1 0 0 0-.59-1.74l-5.701-.454-2.467-5.461a.998.998 0 0 0-1.822 0L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.214 4.107zm2.853-4.326a.998.998 0 0 0 .832-.586L12 5.43l1.799 3.981a.998.998 0 0 0 .832.586l3.972.315-3.271 2.944c-.284.256-.397.65-.293 1.018l1.253 4.385-3.736-2.491a.995.995 0 0 0-1.109 0l-3.904 2.603 1.05-4.546a1 1 0 0 0-.276-.94l-3.038-2.962 4.09-.326z" /> </svg> 
                        </div>
                    </a>
                </div>
                <a href="#" className="cursor-pointer"> 
                    <div className="flex items-center justify-center relative w-14 h-14 cursor-pointer mr-0 hover:bg-zinc-800">
                         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current text-text-content"> <path d="M20.937 7.53C19.227 4.119 15.803 2 12 2 6.486 2 2 6.486 2 12s4.486 10 10 10c3.803 0 7.227-2.119 8.937-5.53a1 1 0 0 0-.397-1.316L15.017 12l5.522-3.153c.461-.264.636-.842.398-1.317zm-8.433 3.602a.999.999 0 0 0 0 1.736l6.173 3.525A7.949 7.949 0 0 1 12 20c-4.411 0-8-3.589-8-8s3.589-8 8-8a7.95 7.95 0 0 1 6.677 3.606l-6.173 3.526z" /> <circle cx="11.5" cy="7.5" r="1.5" /> </svg>
                        <div className="absolute top-3 left-4 w-[42px] h-[18px] bg-primary rounded-md flex items-center justify-center transform translate-x-1/2 -translate-y-1/2">
                            <div className="font-inter text-xs leading-4 font-medium text-text-content">mới</div>
                        </div>
                    </div>
                </a>
                <a href="#" className="cursor-pointer"> 
                    <div className="flex items-center justify-center relative w-14 h-14 cursor-pointer mr-0 hover:bg-zinc-800">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current text-text-content"><path d="M18.5 9.51a4.22 4.22 0 0 1-1.91-1.34A5.77 5.77 0 0 0 12 6a4.72 4.72 0 0 0-5 4 3.23 3.23 0 0 1 3.5-1.49 4.32 4.32 0 0 1 1.91 1.35A5.77 5.77 0 0 0 17 12a4.72 4.72 0 0 0 5-4 3.2 3.2 0 0 1-3.5 1.51zm-13 4.98a4.22 4.22 0 0 1 1.91 1.34A5.77 5.77 0 0 0 12 18a4.72 4.72 0 0 0 5-4 3.23 3.23 0 0 1-3.5 1.49 4.32 4.32 0 0 1-1.91-1.35A5.8 5.8 0 0 0 7 12a4.72 4.72 0 0 0-5 4 3.2 3.2 0 0 1 3.5-1.51z" /></svg>
                    </div>
                </a>
                <a href="#" className="cursor-pointer"> 
                    <div className="flex items-center justify-center relative w-14 h-14 cursor-pointer mr-0 hover:bg-zinc-800">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current text-text-content"> <path d="M19 2H6c-1.206 0-3 .799-3 3v14c0 2.201 1.794 3 3 3h15v-2H6.012C5.55 19.988 5 19.806 5 19s.55-.988 1.012-1H21V4c0-1.103-.897-2-2-2zm0 14H5V5c0-.806.55-.988 1-1h13v12z" /></svg>
                    </div>
                </a>
            </div>
            <div className="relative pb-12 flex flex-row flex-wrap items-end justify-center" style={{ height: 'calc(100vh - 300px)' }}  title="sáng tối">
                <div className="flex items-center justify-center relative w-14 h-14 cursor-pointer mr-0 hover:bg-zinc-800">
                    <div className="flex items-center justify-center w-full h-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current text-text-content" > <path d="M6.993 12c0 2.761 2.246 5.007 5.007 5.007s5.007-2.246 5.007-5.007S14.761 6.993 12 6.993 6.993 9.239 6.993 12zM12 8.993c1.658 0 3.007 1.349 3.007 3.007S13.658 15.007 12 15.007 8.993 13.658 8.993 12 10.342 8.993 12 8.993zM10.998 19h2v3h-2zm0-17h2v3h-2zm-9 9h3v2h-3zm17 0h3v2h-3zM4.219 18.363l2.12-2.122 1.415 1.414-2.12 2.122zM16.24 6.344l2.122-2.122 1.414 1.414-2.122 2.122zM6.342 7.759 4.22 5.637l1.415-1.414 2.12 2.122zm13.434 10.605-1.414 1.414-2.122-2.122 1.414-1.414z" /> </svg>
                    </div>
                </div>
            </div>

        </div>
       </>
   )
}