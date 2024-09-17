export default function Header() {
    return (
        <header className="header" style={{ rowGap: '0px' }}>
            <div className="h-[56px] m-auto px-[44px] py-0 flex items-center justify-between">
                <div className="relative max-w-full min-h-[1px]">
                   <div className="flex items-center" style={{ rowGap: '0px' }}>
                        <a href="/" className="cursor-pointer">
                            <div style={{ rowGap: '0px' }} className="flex">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current text-text-content" > <path d="m20.665 3.717-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z" /> </svg>
                                <div className="text-text-content font-bold">FiinTown</div>
                            </div>
                        </a>
                        <div style={{ rowGap: '0px' }} className="flex">
                                <div className="h-full items-center flex">
                                        <ul className="flex ml-8">
                                            <li className="relative rounded-[16px] px-4 py-1.5 select-none cursor-unset hover:bg-zinc-800">
                                                <a href="#" className="cursor-pointer">
                                                    <h6 className="text-sm leading-5 font-semibold text-text-content">Thị trường</h6>
                                                </a>
                                            </li>
                                            <li className="relative rounded-[16px] px-4 py-1.5 select-none cursor-unset hover:bg-zinc-800">
                                                <a href="#" className="cursor-pointer">
                                                    <h6 className="text-sm leading-5 font-semibold text-text-content hover:bg-zinc-800">Biểu đồ kỹ thuật</h6>
                                                </a>
                                            </li>
                                            <li className="relative rounded-[16px] px-4 py-1.5 select-none cursor-unset hover:bg-zinc-800">
                                                <a href="#" className="cursor-pointer">
                                                    <h6 className="text-sm leading-5 font-semibold text-text-content hover:bg-zinc-800">Ý tưởng đầu tư</h6>
                                                </a>
                                            </li>
                                            <li className="relative rounded-[16px] px-4 py-1.5 select-none cursor-unset hover:bg-zinc-800">
                                                <a href="#" className="cursor-pointer">
                                                    <h6 className="text-sm leading-5 font-semibold text-text-content">Công cụ</h6>
                                                </a>
                                            </li>
                                        </ul>
                                </div>
                                <div className="ml-4 px-4 py-1.5 rounded-lg relative max-w-full min-h-[1px] bg-primary">
                                    <h6 className="text-sm leading-5 font-semibold text-text-content">Nâng cấp hội viên</h6>
                                </div>
                        </div>
                   </div>
                </div>
                <div className="relative max-w-full min-h-[1px]">
                    <div className="flex" style={{ rowGap: '0px' }}>
                        <div className="header_search">
                            <div className="header_search_icons"><svg width="16" height="16" viewBox="0 0 16 16" fill="#999999" xmlns="http://www.w3.org/2000/svg" > <path fillRule="evenodd" clipRule="evenodd" d="M2.4375 6.75C2.4375 4.36827 4.36827 2.4375 6.75 2.4375C9.13173 2.4375 11.0625 4.36827 11.0625 6.75C11.0625 9.13173 9.13173 11.0625 6.75 11.0625C4.36827 11.0625 2.4375 9.13173 2.4375 6.75ZM6.75 1C3.57436 1 1 3.57436 1 6.75C1 9.92564 3.57436 12.5 6.75 12.5C8.06958 12.5 9.28534 12.0555 10.2557 11.308L13.7686 14.8209C14.0347 15.0871 14.5101 15.0433 14.7762 14.7771C15.0424 14.5109 15.0879 14.0339 14.8217 13.7678L11.3087 10.2548C12.0558 9.28459 12.5 8.06918 12.5 6.75C12.5 3.57436 9.92564 1 6.75 1Z" /> </svg></div>
                            <span className="header_search_text">Đây là nội dung thứ nhất</span>
                        </div>
                   </div>
                </div>
            </div>
        </header>
    );
}
