"use client"; 
import React, { useState } from 'react';
import ChiSoTaiChinh from './chiSoTaiChinh';
import CanDoiKeToan from './canDoiKeToan';
import BaoCaoThuNhap from './baoCaoThuNhap';
import LuuChuyenTienTe from './luuChuyenTienTe';
import CustomSelect from '../../../../components/common/cusTomSelect';


const options_Quy_Nam: string[] = ['Quý', 'Năm'];
const label_Bao_Cao: string = 'Báo cáo';
const options_Sap_Xep: string[] = ['Mới nhất bên phải', 'Mới nhất bên trái'];
const label_Sap_Xep: string = 'Sắp xếp';
const options_Thoi_Gian: string[] = ['3 Năm', '5 Năm', '10 Năm'];
const label_Thoi_Gian: string = 'Thời gian';
const Hienthi = "Hiển Thị"
const options_slbc: string[] = ['3 Năm', '5 Năm', '10 Năm' , '15 Năm'];

export default function SoLieuTaiChinhPage() {
    const [activeTab, setActiveTab] = useState('chi-so-tai-chinh');
    const handleTabClick = (tab: string) => {
      setActiveTab(tab);
    };
    
    const ActiveBGChiSoTaiChinh = {backgroundColor : "#091420"}
    const ActiveTextChiSoTaiChinh = {color : "#006CEC"}
    return (
      <div className="w-full mx-auto" style={{padding :"0 44px" , marginBottom : "80px"}}> 
      {/* chiều rộng cao chung cho website */}
        <div className="" style={{minHeight : "650px"}}>
            <div className="flex items-center mb-4">
                <a href="/co-phieu">
                  <span className="font-sans text-xs leading-4 font-normal text-[#a7adb2]">Cổ phiếu</span>
                </a>
                <div className="flex items-center mx-2">
                  <svg className="mt-1" width="6" height="8" viewBox="0 0 6 8" stroke="#A7ADB2" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clipPath="url(#clip0_11760_17571)"> <path d="M1.5 1L4.5 4L3 5.5L1.5 7" strokeWidth="2" strokeLinecap="round"></path> </g> <defs> <clipPath id="clip0_11760_17571"> <rect width="6" height="8" fill="white"></rect> </clipPath> </defs> </svg>
                </div>
                <a href="/BII">
                  <span className="font-sans text-xs leading-4 font-normal text-[#a7adb2]">BII</span>
                </a>
                <div className="flex items-center mx-2">
                  <svg className="mt-1" width="6" height="8" viewBox="0 0 6 8" stroke="#A7ADB2" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clipPath="url(#clip0_11760_17571)"> <path d="M1.5 1L4.5 4L3 5.5L1.5 7" strokeWidth="2" strokeLinecap="round"></path> </g> <defs> <clipPath id="clip0_11760_17571"> <rect width="6" height="8" fill="white"></rect> </clipPath> </defs> </svg>
                </div>
                <a href="/co-phieu">
                  <span className="font-sans text-xs leading-4 font-normal text-[#a7adb2]">Số liệu tài chính</span>
                </a>
            </div>
            <div className="flex flex-wrap justify-between">
              <div className="relative min-h-[1px] flex-[1_1_33.33333333%] max-w-[33.33333333%]">
                <div className="mb-1.5 flex items-center">
                  <img src="https://cdn.simplize.vn/simplizevn/logo/BII.jpeg" style={{ width: "32px", height: "32px" }} alt="" className="block bg-white rounded-full object-contain border border-[#ffffff19]" />
                  <h2 className="text-text-content font-Inter text-[1.5rem] leading-[2.25rem] font-bold ml-2">BII</h2>
                  <h6 className="font-Inter text-[1rem] leading-[1.5rem] font-medium text-[#a7adb2] ml-1">(UPCOM)</h6>
                  <div className="w-[32px] h-[32px] flex items-center justify-center border border-[#3e3f3f] rounded-[8px] ml-2 cursor-pointer">
                    <svg width="14" height="14" viewBox="0 0 14 14" stroke="#999999" fill="none" xmlns="http://www.w3.org/2000/svg"> 
                      <path d="M6.09578 1.5821C6.45651 0.817964 7.54365 0.817965 7.90438 1.58211L8.92787 3.75019C9.07003 4.05132 9.35276 4.26194 9.68198 4.31195L12.0416 4.67041C12.848 4.79291 13.1764 5.7773 12.6052 6.35947L10.8424 8.15582C10.6192 8.38331 10.5178 8.70359 10.5694 9.01811L10.9778 11.5074C11.1128 12.3304 10.2402 12.9474 9.50928 12.5456L7.48175 11.4312C7.1818 11.2664 6.81836 11.2664 6.51841 11.4312L4.49088 12.5456C3.75995 12.9474 2.88738 12.3304 3.0224 11.5074L3.43078 9.01811C3.48238 8.70359 3.38096 8.38331 3.15773 8.15582L1.39498 6.35946C0.823713 5.7773 1.15216 4.79291 1.95855 4.67041L4.31818 4.31195C4.6474 4.26194 4.93013 4.05132 5.07229 3.75019L6.09578 1.5821Z" /> 
                    </svg>
                  </div>
                  <button className="rounded-[8px] font-medium cursor-pointer select-none bg-center border-[#3e3f3f] transition-background duration-700 w-fit border p-[6px] ml-2">
                    <div className="overflow-hidden flex items-center justify-center">
                      <div className="w-[20px] h-[20px] mr-2">
                        <svg className="w-full h-full" width="16" height="16" viewBox="0 0 16 16" fill="#999999" xmlns="http://www.w3.org/2000/svg"> 
                          <path d="M14.095 8.3369C14.6093 7.76648 14.6096 6.89976 14.0958 6.32894L11.0376 2.93161C10.4245 2.25048 9.29439 2.68421 9.29439 3.60065V5.03485C6.64737 5.28664 2.17024 6.98722 1.43635 12.9235C1.37472 13.422 2.08543 13.6805 2.43945 13.3241C3.99548 11.7577 6.62245 9.98058 9.29439 9.70368V11.0591C9.29439 11.9752 10.4237 12.4091 11.0371 11.7287L14.095 8.3369Z" /> 
                        </svg>
                      </div>
                      <div className="w-auto font-Inter text-[0.875rem] leading-[1.25rem] font-normal text-[#006cec]">
                        <span className="font-Inter text-[0.875rem] leading-[1.25rem] font-normal text-[#a7adb2]">Chia sẻ</span>
                      </div>
                    </div>
                  </button>
                </div>
                <div className="mb-2">
                  <h1 className="font-Inter text-base leading-6 font-normal text-text-content">CTCP Đầu tư và Phát triển Công nghiệp Bảo Thư</h1>
                </div>
                <a className="cursor-pointer px-2 py-1 bg-[#006cec19] rounded-sm inline-flex mr-2.5" href="/co-phieu/nganh/bat-dong-san">
                  <span className="font-Inter text-xs leading-4 font-normal text-text-content">Bất động sản</span>
                </a>
                <a className="cursor-pointer px-2 py-1 bg-[#006cec19] rounded-sm inline-flex mr-2.5" href="/co-phieu/nganh/bat-dong-san">
                  <span className="font-Inter text-xs leading-4 font-normal text-text-content">Quản lý và phát triển bất động sản</span>
                </a>
                <div className="mt-4 mb-4 mr-4 flex flex-wrap">
                  <div className="relative overflow-hidden break-words">
                    <div className="font-normal text-xs leading-4 text-[#a7adb2]">
                      <p> 
                        Công ty Cổ phần Đầu tư và Phát triển Công nghiệp Bảo Thư (BII) được thành lập từ năm 2008. 
                        Lĩnh vực hoạt động chính của công ty là kinh doanh bất động sản dân dụng, bất động sản công nghiệp, khai thác cát trắng và sản xuất vật liệu xây dựng. 
                        Hiện tại, BII đang đầu tư và khai thác 3 Cụm công nghiệp bao gồm Cụm công nghiệp Trị An (Đồng Nai), Cụm công nghiệp Thắng Hải và Cụm công nghiệp Tân Bình (Bình Thuận). 
                        Ở mảng bất động sản dân dụng, BII đã thực hiện các dự án Khu an sinh xã hội Định Thành, Louis Trade Center và Louis Seaview. 
                        Năm 2014, BII chính thức được niêm yết tại Sở Giao dịch Chứng khoán Hà Nội (HNX).
                      </p>
                    </div>
                  </div>
                </div>
                <a className="cursor-pointer px-2 py-1 bg-[#006cec19] rounded-sm inline-flex mr-2.5" href="/co-phieu/nganh/bat-dong-san">
                  <span className="font-Inter text-xs leading-4 font-normal text-text-content">Website Công ty</span>
                </a>
                <a className="cursor-pointer px-2 py-1 bg-[#006cec19] rounded-sm inline-flex mr-2.5" href="/co-phieu/nganh/bat-dong-san">
                  <span className="font-Inter text-xs leading-4 font-normal text-text-content">Lịch sử trả cổ tức</span>
                </a>
                <br />
                <a className="cursor-pointer px-2 py-1 bg-[#006cec19] rounded-sm inline-flex mr-2.5" href="/co-phieu/nganh/bat-dong-san">
                  <span className="font-Inter text-xs leading-4 font-normal text-text-content">Xem ghi chú</span>
                </a>
              </div>
              <div className="relative min-h-[1px] flex-[1_1_66.66666667%] max-w-[66.66666667%]">
                  <div className="gap-0 border-b border-white/10 pb-5 mb-5 flex flex-wrap">
                      <div className="flex-1 relative min-h-[1px]">
                        <div>
                            <div className="gap-0 items-center flex flex-wrap">
                              <p className="font-[Inter, sans-serif] text-4xl leading-[3.375rem] font-bold mr-2 text-text-content">700</p>
                              <p className="font-[Inter, sans-serif] text-[2.25rem] leading-[3.375rem] font-bold text-[#24c9b1] mr-2">-100</p>
                              <div className="gap-0 p-1 rounded-lg bg-[#24c9b1] print-color-adjust flex items-center">
                                  <svg width="8" height="5" viewBox="0 0 8 5" fill="#fff" xmlns="http://www.w3.org/2000/svg" > <path d="M4.28823 4.70046C4.13087 4.86399 3.86913 4.86399 3.71177 4.70046L0.321654 1.17735C0.077125 0.923228 0.25722 0.499999 0.609884 0.499999L7.39012 0.5C7.74278 0.5 7.92288 0.923229 7.67835 1.17735L4.28823 4.70046Z" /> </svg>
                                  <span className="font-[Inter, sans-serif] text-base leading-[1.5rem] font-normal text-[#f4f4f5]">12.50%</span>
                              </div>

                            </div>
                        </div>
                        <div className="max-w-[350px]">
                          <div className="gap-0 flex flex-wrap">
                              <div className="flex-1 relative min-h-[1px]">
                                <div className="gap-0 justify-between flex flex-wrap">
                                  <span className="font-[Inter, sans-serif] text-[0.75rem] leading-[1.125rem] font-normal text-[#a7adb2]">Giá thấp nhất</span>
                                  <span className="font-[Inter, sans-serif] text-[0.75rem] leading-[1.125rem] font-normal text-[#a7adb2]">Giá cao nhất</span>
                                </div>
                                <div className="gap-0 items-center justify-between flex flex-wrap">
                                   <span className="text-text-content font-[Inter, sans-serif] text-[0.75rem] leading-[1.125rem] font-semibold min-w-[48px]">700</span>
                                   <div className="gap-0 w-[140px] flex flex-wrap">
                                        <div className="flex-none relative h-[4px] rounded-full bg-[#999] min-h-[1px]">
                                        <div className="absolute top-[calc(100%+2px)] right-[-5px] w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-b-[6px] border-b-[#999]"></div>
                                        </div>
                                        <div className="flex-1 h-[4px] rounded-full overflow-hidden bg-[#ffffff19] relative min-h-[1px]"></div>
                                   </div>
                                   <span className="text-text-content font-[Inter, sans-serif] text-[0.75rem] leading-[1.125rem] font-semibold min-w-[48px] text-right">800</span>
                                </div>
                              </div>
                              <div className="relative min-h-[1px] ml-2 flex-none basis-[24px]">
                                <div className="gap-0 h-full mt-1.25 flex items-end flex-wrap">
                                    <div className="min-w-[74px] bg-[#ffffff19] rounded-lg box-border m-0 p-0 text-[#000000d9] text-sm font-variant-numeric-tabular-nums leading-[1.5715] list-none relative inline-block cursor-pointer">
                                        <div className="px-[16px] h-fit bg-transparent relative rounded-sm transition-all duration-300 ease-[cubic-bezier(.645,.045,.355,1)] w-full flex">
                                          <span className="absolute right-[25px] top-0 bottom-0 left-[11px]"></span>
                                          <span className="pr-[18px] relative select-none p-0 leading-[30px] transition-all duration-300 text-[#a7adb2] font-normal text-[0.75rem] flex-[1_1_auto] overflow-hidden whitespace-nowrap text-ellipsis">24h</span>
                                        </div>
                                        <span className="select-none right-4 inline-block not-italic normal-case align-[-0.125em] [text-rendering:optimizelegibility] [webkit-font-smoothing:antialiased] [moz-osx-font-smoothing:grayscale] absolute top-1/2 w-3 h-3 -mt-1.5 text-[rgba(0,0,0,0.25)] text-[12px] leading-none text-center pointer-events-none">
                                          <svg className="fill-none inline-block w-[10px] h-[6px]" viewBox="0 0 14 9" xmlns="http://www.w3.org/2000/svg"> <path d="M6.6038 8.48532C6.80395 8.74532 7.19605 8.74532 7.3962 8.48532L13.3085 0.804996C13.5616 0.476213 13.3272 0 12.9123 0H1.08769C0.672767 0 0.438385 0.476213 0.691484 0.804997L6.6038 8.48532Z" fill="#999999" /> </svg>
                                        </span>
                                    </div>
                                </div> 
                              </div>
                          </div>
                        </div>
                      </div>
                      <div className="pl-4 block flex-none basis-[41.66666667%] max-w-[41.66666667%] relative min-h-[1px]">
                        <div className="flex flex-col items-end">
                          <a className="cursor-pointer" href="/de-xuat-tu-chuyen-gia">
                            <button className="not-italic font-medium cursor-pointer border-none select-none bg-center transition-[background] duration-[0.7s] w-fit text-[1rem] px-4 py-[6px] rounded-[8px] bg-[#ec8000] visible">
                              <div className="overflow-hidden flex items-center justify-center text-white">
                                  <h6 className="text-white font-inter text-[0.875rem] leading-[1.25rem] font-semibold">Để xuất từ chuyên gia</h6>
                              </div>
                            </button>
                          </a>
                          <div className="mt-2 text-right ">
                              <div className="font-inter text-[0.75rem] leading-[1.125rem] font-normal text-[#a7adb2]">
                                Giúp bạn đầu tư với lãi kép lên đến 
                                <span className="text-[#25b770]">+50%</span>
                                /năm  
                              </div>
                          </div>
                        </div>
                      </div>
                  </div>
                  <div className="gap-0 flex flex-wrap">
                      <div className="block flex-[0_0_58.33333333%] max-w-[58.33333333%] relative min-h-[1px]">
                          <div>
                              <div className="flex mt-0">
                                <div className="w-[45%]">
                                  <div className="flex items-center">
                                      <div className="font-inter text-[0.75rem] leading-[1.125rem] font-normal text-[#a7adb2] mr-1">Vốn hóa</div>
                                      <svg className="w-3 h-3 stroke-[#999999] fill-none" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"> <circle cx="6" cy="6" r="5.5" /> <path d="M6 5.5L6 8.5" strokeLinecap="round" /> <path d="M6.75 3.75C6.75 4.16421 6.41421 4.5 6 4.5C5.58579 4.5 5.25 4.16421 5.25 3.75C5.25 3.33579 5.58579 3 6 3C6.41421 3 6.75 3.33579 6.75 3.75Z" /> </svg>
                                  </div>
                                  <div className="text-text-content font-inter text-[0.75rem] leading-[1.125rem] font-semibold">
                                    40T
                                  </div>
                                </div>
                                <div className="w-[25%]">
                                  <div className="flex items-center">
                                      <div className="font-inter text-[0.75rem] leading-[1.125rem] font-normal text-[#a7adb2] mr-1">P/E</div>
                                      <svg className="w-3 h-3 stroke-[#999999] fill-none" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"> <circle cx="6" cy="6" r="5.5" /> <path d="M6 5.5L6 8.5" strokeLinecap="round" /> <path d="M6.75 3.75C6.75 4.16421 6.41421 4.5 6 4.5C5.58579 4.5 5.25 4.16421 5.25 3.75C5.25 3.33579 5.58579 3 6 3C6.41421 3 6.75 3.33579 6.75 3.75Z" /> </svg>
                                  </div>
                                  <div className="text-text-content font-inter text-[0.75rem] leading-[1.125rem] font-semibold">
                                    -23.39
                                  </div>
                                </div>
                                <div className="w-[25%]">
                                  <div className="flex items-center">
                                      <div className="font-inter text-[0.75rem] leading-[1.125rem] font-normal text-[#a7adb2] mr-1">EPS</div>
                                      <svg className="w-3 h-3 stroke-[#999999] fill-none" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"> <circle cx="6" cy="6" r="5.5" /> <path d="M6 5.5L6 8.5" strokeLinecap="round" /> <path d="M6.75 3.75C6.75 4.16421 6.41421 4.5 6 4.5C5.58579 4.5 5.25 4.16421 5.25 3.75C5.25 3.33579 5.58579 3 6 3C6.41421 3 6.75 3.33579 6.75 3.75Z" /> </svg>
                                  </div>
                                  <div className="text-text-content font-inter text-[0.75rem] leading-[1.125rem] font-semibold">
                                    -29
                                  </div>
                                </div>
                              </div>
                              <div className="flex mt-5">
                                <div className="w-[45%]">
                                  <div className="flex items-center">
                                      <div className="font-inter text-[0.75rem] leading-[1.125rem] font-normal text-[#a7adb2] mr-1">Khối lượng giao dịch</div>
                                      <svg className="w-3 h-3 stroke-[#999999] fill-none" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"> <circle cx="6" cy="6" r="5.5" /> <path d="M6 5.5L6 8.5" strokeLinecap="round" /> <path d="M6.75 3.75C6.75 4.16421 6.41421 4.5 6 4.5C5.58579 4.5 5.25 4.16421 5.25 3.75C5.25 3.33579 5.58579 3 6 3C6.41421 3 6.75 3.33579 6.75 3.75Z" /> </svg>
                                  </div>
                                  <div className="text-text-content font-inter text-[0.75rem] leading-[1.125rem] font-semibold">
                                  70,500
                                  </div>
                                </div>
                                <div className="w-[25%]">
                                  <div className="flex items-center">
                                      <div className="font-inter text-[0.75rem] leading-[1.125rem] font-normal text-[#a7adb2] mr-1">P/B</div>
                                      <svg className="w-3 h-3 stroke-[#999999] fill-none" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"> <circle cx="6" cy="6" r="5.5" /> <path d="M6 5.5L6 8.5" strokeLinecap="round" /> <path d="M6.75 3.75C6.75 4.16421 6.41421 4.5 6 4.5C5.58579 4.5 5.25 4.16421 5.25 3.75C5.25 3.33579 5.58579 3 6 3C6.41421 3 6.75 3.33579 6.75 3.75Z" /> </svg>
                                  </div>
                                  <div className="text-text-content font-inter text-[0.75rem] leading-[1.125rem] font-semibold">
                                  0.08
                                  </div>
                                </div>
                                <div className="w-[25%]">
                                  <div className="flex items-center">
                                      <div className="font-inter text-[0.75rem] leading-[1.125rem] font-normal text-[#a7adb2] mr-1">Giá trị sổ sách</div>
                                      <svg className="w-3 h-3 stroke-[#999999] fill-none" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"> <circle cx="6" cy="6" r="5.5" /> <path d="M6 5.5L6 8.5" strokeLinecap="round" /> <path d="M6.75 3.75C6.75 4.16421 6.41421 4.5 6 4.5C5.58579 4.5 5.25 4.16421 5.25 3.75C5.25 3.33579 5.58579 3 6 3C6.41421 3 6.75 3.33579 6.75 3.75Z" /> </svg>
                                  </div>
                                  <div className="text-text-content font-inter text-[0.75rem] leading-[1.125rem] font-semibold">
                                    8,969
                                  </div>
                                </div>
                              </div>
                              <div className="flex mt-5">
                                <div className="w-[45%]">
                                  <div className="flex items-center">
                                      <div className="font-inter text-[0.75rem] leading-[1.125rem] font-normal text-[#a7adb2] mr-1">Số lượng cổ phiếu lưu hành</div>
                                      <svg className="w-3 h-3 stroke-[#999999] fill-none" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"> <circle cx="6" cy="6" r="5.5" /> <path d="M6 5.5L6 8.5" strokeLinecap="round" /> <path d="M6.75 3.75C6.75 4.16421 6.41421 4.5 6 4.5C5.58579 4.5 5.25 4.16421 5.25 3.75C5.25 3.33579 5.58579 3 6 3C6.41421 3 6.75 3.33579 6.75 3.75Z" /> </svg>
                                  </div>
                                  <div className="text-text-content font-inter text-[0.75rem] leading-[1.125rem] font-semibold">
                                    57,680,000
                                  </div>
                                </div>
                                <div className="w-[25%]">
                                  <div className="flex items-center">
                                      <div className="font-inter text-[0.75rem] leading-[1.125rem] font-normal text-[#a7adb2] mr-1">EV/EBITDA</div>
                                      <svg className="w-3 h-3 stroke-[#999999] fill-none" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"> <circle cx="6" cy="6" r="5.5" /> <path d="M6 5.5L6 8.5" strokeLinecap="round" /> <path d="M6.75 3.75C6.75 4.16421 6.41421 4.5 6 4.5C5.58579 4.5 5.25 4.16421 5.25 3.75C5.25 3.33579 5.58579 3 6 3C6.41421 3 6.75 3.33579 6.75 3.75Z" /> </svg>
                                  </div>
                                  <div className="text-text-content font-inter text-[0.75rem] leading-[1.125rem] font-semibold">
                                    37.9
                                  </div>
                                </div>
                                
                              </div>
                              
                          </div>
                      </div>
                      <div className="pl-4 border-l border-[#ffffff19] block flex-[0_0_25%] max-w-[25%] relative min-h-[1px]">
                          <div className="flex flex-col h-full flex-wrap">
                            <div className="gap-y-0 flex flex-col mb-4 flex-wrap">
                              <div className="gap-y-0 items-center flex flex-wrap">
                                  <span className="font-inter text-[0.75rem] leading-[1.125rem] font-normal text-[#a7adb2] mr-1">Chất lượng doanh nghiệp</span>
                                  <svg className="w-3 h-3 stroke-[#999999] fill-none" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="6" r="5.5" /><path d="M6 5.5L6 8.5" strokeLinecap="round" /><path d="M6.75 3.75C6.75 4.16421 6.41421 4.5 6 4.5C5.58579 4.5 5.25 4.16421 5.25 3.75C5.25 3.33579 5.58579 3 6 3C6.41421 3 6.75 3.33579 6.75 3.75Z" /></svg>
                              </div>
                              <span className="font-inter text-[0.75rem] leading-[1.125rem] font-semibold text-[#ffc701]">Trung bình</span>
                            </div>
                            <div className="gap-y-0 flex flex-col mb-4 flex-wrap">
                              <div className="gap-y-0 items-center flex flex-wrap">
                                  <span className="font-inter text-[0.75rem] leading-[1.125rem] font-normal text-[#a7adb2] mr-1">Rủi ro</span>
                                  <svg className="w-3 h-3 stroke-[#999999] fill-none" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="6" r="5.5" /><path d="M6 5.5L6 8.5" strokeLinecap="round" /><path d="M6.75 3.75C6.75 4.16421 6.41421 4.5 6 4.5C5.58579 4.5 5.25 4.16421 5.25 3.75C5.25 3.33579 5.58579 3 6 3C6.41421 3 6.75 3.33579 6.75 3.75Z" /></svg>
                              </div>
                              <span className="font-inter text-[0.75rem] leading-[1.125rem] font-semibold text-[#e14040]">Rất cao</span>
                            </div>                          
                            <div className="flex flex-col justify-end flex-wrap">
                              <span className="text-[#f4f4f5] font-inter text-[0.75rem] leading-[1.125rem] font-semibold">
                                <a className="cursor-pointer text-[#006cec] no-underline" href="">
                                  <div className="flex flex-wrap items-center gap-y-0">
                                    <span className="font-inter text-[0.75rem] leading-[1.125rem] font-semibold text-[#006cec]">Chi tiết </span>
                                      <svg className="w-1.5 h-2 ml-1" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 1L4.5 4L3 5.5L1.5 7" stroke="#006CEC" strokeWidth="2" strokeLinecap="round" /></svg>
                                  </div>
                                </a>
                              </span>
                            </div>
                          </div>
                      </div>
                      <div className="">
                        <div className="gap-y-0 flex flex-col mb-4 flex-wrap">
                          <div className="gap-y-0 items-center flex flex-wrap">
                              <span className="font-inter text-[0.75rem] leading-[1.125rem] font-normal text-[#a7adb2] mr-1">Định giá</span>
                              <svg className="w-3 h-3 stroke-[#999999] fill-none" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="6" r="5.5" /><path d="M6 5.5L6 8.5" strokeLinecap="round" /><path d="M6.75 3.75C6.75 4.16421 6.41421 4.5 6 4.5C5.58579 4.5 5.25 4.16421 5.25 3.75C5.25 3.33579 5.58579 3 6 3C6.41421 3 6.75 3.33579 6.75 3.75Z" /></svg>
                          </div>
                          <span className="font-inter text-[0.75rem] leading-[1.125rem] font-semibold text-mauxanh">Hấp dẫn</span>
                        </div>
                      </div>
                  </div>
              </div>

            </div>
            <div className="border-b border-[#ffffff19] border-t pt-4 pb-4 mt-5">
                <div className="w-full mx-auto px-11">
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-0">
                        <a className="no-underline text-[#006cec] cursor-pointer py-0.5 px-1 rounded-[8px] mr-4" href="">
                            <h6 className="no-underline text-text-content cursor-pointer py-0.5 px-1 rounded-[8px] hover:bg-[#07274D] animate-ease-in-out duration-300">
                                Tổng quan
                            </h6>
                        </a>
                        <a className="no-underline text-[#006cec] cursor-pointer py-0.5 px-1 rounded-[8px] mr-4" href="">
                            <h6 className="no-underline text-text-content cursor-pointer py-0.5 px-1 rounded-[8px] hover:bg-[#07274D] animate-ease-in-out duration-300">
                                Tin tức & sự kiện
                            </h6>
                        </a>
                        <a className="no-underline text-[#006cec] cursor-pointer py-0.5 px-1 rounded-[8px] mr-4" href="">
                            <h6 className="no-underline text-text-content cursor-pointer py-0.5 px-1 rounded-[8px] hover:bg-[#07274D] animate-ease-in-out duration-300">
                                Phân tích 360
                            </h6>
                        </a>
                        <a className="no-underline text-[#006cec] cursor-pointer py-0.5 px-1 rounded-[8px] mr-4" href="">
                            <h6 className="no-underline text-text-content cursor-pointer py-0.5 px-1 rounded-[8px] hover:bg-[#07274D] animate-ease-in-out duration-300">
                                So sánh
                            </h6>
                        </a>
                        <a className="no-underline text-[#006cec] cursor-pointer py-0.5 px-1 rounded-[8px] mr-4 bg-[#006cec]" href="">
                            <h6 className="no-underline text-text-content cursor-pointer py-0.5 px-1 rounded-[8px]">
                                Số liệu tài chính
                            </h6>
                        </a>
                        <a className="no-underline text-[#006cec] cursor-pointer py-0.5 px-1 rounded-[8px] mr-4" href="">
                            <h6 className="no-underline text-text-content cursor-pointer py-0.5 px-1 rounded-[8px] hover:bg-[#07274D] animate-ease-in-out duration-300">
                                Tải báo cáo
                            </h6>
                        </a>
                        <a className="no-underline text-[#006cec] cursor-pointer py-0.5 px-1 rounded-[8px] mr-4" href="">
                            <h6 className="no-underline text-text-content cursor-pointer py-0.5 px-1 rounded-[8px] hover:bg-[#07274D] animate-ease-in-out duration-300">
                                Hồ sơ doanh nghiệp
                            </h6>
                        </a>
                        <a className="no-underline text-[#006cec] cursor-pointer py-0.5 px-1 rounded-[8px] mr-4" href="">
                            <h6 className="no-underline text-text-content cursor-pointer py-0.5 px-1 rounded-[8px] hover:bg-[#07274D] animate-ease-in-out duration-300">
                                Lịch sử giá
                            </h6>
                        </a>
                    </div>
                </div>
            </div>
            {/* Số liệu tài chính */}
            <div className="w-full mx-auto">
                <div className="gap-0 min-h-screen flex-1 pt-6 pb-[100px] rounded-tl-[4px] rounded-br-[4px] relative flex flex-wrap">
                  <div className="w-full">
                    {/* div navigation chỉ số tài chính Cân đối kế toán Báo cáo thu nhập Lưu chuyển tiền tệ */}
                    <div className="gap-0 mb-8 justify-start flex flex-wrap">
                      <div className="flex">
                        <div  className="ml-0 px-4 py-1.5 rounded-lg cursor-pointer bg-transparent select-none text-white print-color-adjust-[exact] hover:bg-[#091420]" onClick={() => handleTabClick('chi-so-tai-chinh')} style={activeTab === 'chi-so-tai-chinh' ? ActiveBGChiSoTaiChinh : {}} >
                              <span  className="font-inter text-xs leading-4 font-medium text-[#a7adb2]" style={activeTab === 'chi-so-tai-chinh' ? ActiveTextChiSoTaiChinh : {}} >
                                Chỉ số tài chính
                              </span>
                          </div>
                        <div className="ml-0 px-4 py-1.5 rounded-lg cursor-pointer bg-transparent select-none text-white print-color-adjust-[exact] hover:bg-[#091420]"  onClick={() => handleTabClick('can-doi-ke-toan')} style={activeTab === 'can-doi-ke-toan' ? ActiveBGChiSoTaiChinh : {}}>
                              <span className="font-inter text-xs leading-4 font-medium text-[#a7adb2]"  style={activeTab === 'can-doi-ke-toan' ? ActiveTextChiSoTaiChinh : {}} >
                              Cân đối kế toán
                              </span>
                        </div>
                        <div className="ml-0 px-4 py-1.5 rounded-lg cursor-pointer bg-transparent select-none text-white print-color-adjust-[exact] hover:bg-[#091420]"  onClick={() => handleTabClick('bao-cao-thu-nhap')} style={activeTab === 'bao-cao-thu-nhap' ? ActiveBGChiSoTaiChinh : {}}>
                              <span className="font-inter text-xs leading-4 font-medium text-[#a7adb2]"  style={activeTab === 'bao-cao-thu-nhap' ? ActiveTextChiSoTaiChinh : {}}>
                                  Báo cáo thu nhập
                              </span>
                        </div>
                        <div className="ml-0 px-4 py-1.5 rounded-lg cursor-pointer bg-transparent select-none text-white print-color-adjust-[exact] hover:bg-[#091420]"  onClick={() => handleTabClick('luu-chuyen-tien-te')} style={activeTab === 'luu-chuyen-tien-te' ? ActiveBGChiSoTaiChinh : {}}>
                              <span className="font-inter text-xs leading-4 font-medium text-[#a7adb2]"  style={activeTab === 'luu-chuyen-tien-te' ? ActiveTextChiSoTaiChinh : {}}>
                                Lưu chuyển tiền tệ
                              </span>
                        </div>
                      </div>
                    </div>
                    <div className="gap-0 filter-none flex flex-wrap">
                        <div className="w-full">
                            <div className="w-full bg-[#0a0a0a] sticky top-14 z-[999]">
                                <div className="pt-6 bg-[#0a0a0a] sticky top-14 z-[1]">
                                  {/* Chon du lieu     */}
                                  <div className="gap-0 justify-between flex flex-wrap">
                                    <div className="relative max-w-full min-h-[1px]"> 
                                        <div className="flex flex-wrap">
                                            <CustomSelect options={options_Quy_Nam} label={label_Bao_Cao} />
                                            <div className="ml-8">
                                            <CustomSelect options={options_Sap_Xep} label={label_Sap_Xep} />
                                            </div>
                                            <div className="ml-8">
                                            <CustomSelect options={options_Thoi_Gian} label={label_Thoi_Gian} />
                                            </div>
                                            <div className="ml-8">
                                            <CustomSelect options={options_slbc} label={Hienthi} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="block">
                                        <div className="relative max-w-full min-h-[1px]">
                                            <div className="gap-0 relative flex flex-wrap">
                                                <button className="gap-2 rounded-lg bg-blue-500 font-normal font-medium cursor-pointer border-none select-none bg-center transition-[background] duration-700 w-fit text-base px-6 py-1.5">
                                                    <div className="overflow-hidden flex items-center justify-center">
                                                        <h6 className="font-sans text-sm leading-5 font-semibold text-white">Xuất dữ liệu</h6>
                                                    </div>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                  </div>
                                  {/* Tieu de table */}
                                  <div className="pt-6">
                                  <div className="flex flex-wrap gap-0 p-5 rounded items-center justify-between" style={{ background: "linear-gradient(180deg, hsla(0, 0%, 100%, .07), hsla(0, 0%, 100%, .03))", }} >
                                          <div className='flex-none basis-[350px] relative max-w-full min-h-[1px]'>
                                              <span className="font-inter text-xs leading-4 font-medium select-none text-[#a7adb2]">Bảng {activeTab}</span>
                                          </div>
                                          <div className='flex flex-1 min-w-0 relative max-w-full min-h-[1px]'>
                                            <div className="relative max-w-full min-h-[1px] pl-4" style={{ minWidth: 'calc(11.1111%)' }}>
                                                <div className="flex flex-wrap gap-0 items-center justify-end">
                                                  <span className="font-inter text-xs leading-4 font-medium select-none text-[#a7adb2]">Q1/2024</span>  
                                                </div>      
                                            </div>
                                            <div className="relative max-w-full min-h-[1px]" style={{ minWidth: 'calc(11.1111%)' }}>
                                                <div className="flex flex-wrap gap-0 justify-end">
                                                  <span  className="font-inter text-xs leading-4 font-medium select-none text-[#a7adb2]"> Q4/2023</span>
                                                </div>
                                            </div>
                                            <div className="relative max-w-full min-h-[1px]" style={{ minWidth: 'calc(11.1111%)' }}>
                                                <div className="flex flex-wrap gap-0 justify-end">
                                                  <span  className="font-inter text-xs leading-4 font-medium select-none text-[#a7adb2]"> Q3/2023</span>
                                                </div>
                                            </div>
                                            <div className="relative max-w-full min-h-[1px]" style={{ minWidth: 'calc(11.1111%)' }}>
                                                <div className="flex flex-wrap gap-0 justify-end">
                                                  <span  className="font-inter text-xs leading-4 font-medium select-none text-[#a7adb2]"> Q2/2023</span>
                                                </div>
                                            </div>
                                            <div className="relative max-w-full min-h-[1px]" style={{ minWidth: 'calc(11.1111%)' }}>
                                                <div className="flex flex-wrap gap-0 justify-end">
                                                  <span  className="font-inter text-xs leading-4 font-medium select-none text-[#a7adb2]"> Q1/2023</span>
                                                </div>
                                            </div>
                                            <div className="relative max-w-full min-h-[1px]" style={{ minWidth: 'calc(11.1111%)' }}>
                                                <div className="flex flex-wrap gap-0 justify-end">
                                                  <span  className="font-inter text-xs leading-4 font-medium select-none text-[#a7adb2]"> Q4/2022</span>
                                                </div>
                                            </div>
                                            <div className="relative max-w-full min-h-[1px]" style={{ minWidth: 'calc(11.1111%)' }}>
                                                <div className="flex flex-wrap gap-0 justify-end">
                                                  <span  className="font-inter text-xs leading-4 font-medium select-none text-[#a7adb2]"> Q3/2022</span>
                                                </div>
                                            </div>
                                            <div className="relative max-w-full min-h-[1px]" style={{ minWidth: 'calc(11.1111%)' }}>
                                                <div className="flex flex-wrap gap-0 justify-end">
                                                  <span  className="font-inter text-xs leading-4 font-medium select-none text-[#a7adb2]"> Q2/2022</span>
                                                </div>
                                            </div>
                                            <div className="relative max-w-full min-h-[1px]" style={{ minWidth: 'calc(11.1111%)' }}>
                                                <div className="flex flex-wrap gap-0 justify-end">
                                                  <span  className="font-inter text-xs leading-4 font-medium select-none text-[#a7adb2]"> Q1/2022</span>
                                                </div>
                                            </div>
                                          </div>
                                      </div>
                                  </div>
                                </div>
                            </div>
                            {activeTab === 'chi-so-tai-chinh' && <ChiSoTaiChinh />}
                            {activeTab === 'can-doi-ke-toan' && <CanDoiKeToan />}
                            {activeTab === 'bao-cao-thu-nhap' && <BaoCaoThuNhap />}
                            {activeTab === 'luu-chuyen-tien-te' && <LuuChuyenTienTe />}
                        </div>
                    </div>
                  </div>
                </div>
            </div>

        </div>
      </div>
    );
  }
  