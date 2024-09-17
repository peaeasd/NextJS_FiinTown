"use client";
import React, { useState  } from "react";
import dynamic from 'next/dynamic';
import StockPrice from './stockPrice'
import BieuDoThiTruong from './bieuDoThiTruong'
export default function HomePage() {
  return (
    <div className="w-full mx-auto" style={{padding :"0 44px" , marginBottom : "80px"}}> 
      {/* chiều rộng cao chung cho website */}
      <div className="" style={{minHeight : "650px"}}>
          {/* chỉ số giá stosk */}
          <StockPrice/>
          {/* Tiêu đề thị trường */}
          <div className="flex justify-between mt-12" style={{ rowGap: '0px' }}>
              <div className="relative max-w-full min-h-[1px]">
                  <div className="flex items-center">
                      <a href="/thi-truong" className="cursor-pointer block">
                          <h1 className="font-inter text-4xl leading-[3.375rem] font-bold mr-2 text-text-content">Thị trường</h1>
                      </a>
                      <a href="" className="cursor-pointer block" style={{marginBottom : "-6px"}}>
                          <svg className="w-[13px] h-[22px] transform rotate-180" xmlns="http://www.w3.org/2000/svg" width="19" height="32" viewBox="0 0 19 32" fill="none"> <path d="M16 3L4 16L16 29" stroke="#999999" strokeWidth="5" strokeLinecap="round" /></svg>
                      </a>
                  </div>
              </div>
              <div className="flex items-center">
                  <div className="relative max-w-full min-h-[1px]">
                      <div className="flex items-center h-full" style={{ rowGap: '0px' }}>
                          <div className="ml-auto">
                              <a href="#" className="cursor-pointer">
                                  <button className="bg-background-chart  px-8 py-2.5 text-base rounded-lg font-medium cursor-pointer border-none transition-all duration-300 select-none">
                                      <div className="overflow-hidden flex items-center justify-center">
                                          <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#999999" style={{ overflow: 'hidden', backgroundPosition: 'center', transition: 'all 0.3s' }} > <mask id="path-1-inside-1_4625_136630" fill="white"> <path fillRule="evenodd" clipRule="evenodd" d="M2.95902 3.14319C3.34245 2.74532 3.97735 2.82803 4.31659 3.26419L7.82818 7.77909C7.94057 7.92359 8.09047 8.03447 8.26154 8.09964L13.6085 10.1366C14.1247 10.3332 14.3896 10.9159 14.1211 11.3986C12.9258 13.5467 10.6326 15 8 15C4.13401 15 1 11.866 1 8.00001C1 6.11385 1.74599 4.40193 2.95902 3.14319Z" /> </mask> <path d="M14.1211 11.3986L13.2472 10.9124L14.1211 11.3986ZM7.82818 7.77909L8.61753 7.16515L7.82818 7.77909ZM8.26154 8.09964L7.90554 9.03413L8.26154 8.09964ZM2.95902 3.14319L2.23897 2.44928L2.95902 3.14319ZM3.52723 3.87813L7.03883 8.39303L8.61753 7.16515L5.10594 2.65025L3.52723 3.87813ZM7.90554 9.03413L13.2525 11.0711L13.9645 9.2021L8.61753 7.16515L7.90554 9.03413ZM13.2472 10.9124C12.2213 12.7562 10.2552 14 8 14V16C11.0101 16 13.6304 14.3372 14.9949 11.8848L13.2472 10.9124ZM8 14C4.68629 14 2 11.3137 2 8.00001H0C0 12.4183 3.58172 16 8 16V14ZM2 8.00001C2 6.3829 2.63842 4.91698 3.67908 3.8371L2.23897 2.44928C0.853568 3.88687 0 5.8448 0 8.00001H2ZM13.2525 11.0711C13.257 11.0728 13.2471 11.0713 13.2376 11.0487C13.2323 11.0361 13.2265 11.0149 13.2276 10.9867C13.2288 10.9567 13.2373 10.9302 13.2472 10.9124L14.9949 11.8848C15.6076 10.7837 14.9541 9.57909 13.9645 9.2021L13.2525 11.0711ZM7.03883 8.39303C7.2636 8.68203 7.5634 8.90379 7.90554 9.03413L8.61753 7.16515V7.16515L7.03883 8.39303ZM5.10594 2.65025C4.45532 1.81374 3.11261 1.54272 2.23897 2.44928L3.67908 3.8371C3.6651 3.85162 3.64238 3.86742 3.61429 3.87721C3.58789 3.88641 3.56619 3.88712 3.55267 3.88574C3.52854 3.88328 3.52425 3.87429 3.52723 3.87813L5.10594 2.65025Z" mask="url(#path-1-inside-1_4625_136630)" /> <mask id="path-3-inside-2_4625_136630" fill="white"> <path fillRule="evenodd" clipRule="evenodd" d="M12.4106 4.00073C12.8534 3.64097 12.9094 2.97791 12.4706 2.61332C11.258 1.60582 9.69973 1 7.99998 1C7.04662 1 6.13777 1.19059 5.30946 1.53574C4.76335 1.7633 4.63922 2.44746 4.9986 2.91742L7.72436 6.48188C8.06686 6.92976 8.71172 7.00609 9.14931 6.65054L12.4106 4.00073Z" /> </mask> <path d="M12.4106 4.00073L13.0412 4.77684L12.4106 4.00073ZM7.99998 2C9.45777 2 10.7918 2.51862 11.8315 3.38247L13.1096 1.84416C11.7241 0.693021 9.94168 0 7.99998 0V2ZM5.69409 2.45881C6.40269 2.16354 7.18097 2 7.99998 2V0C6.91227 0 5.87285 0.217633 4.92482 0.612672L5.69409 2.45881ZM4.20424 3.52487L6.93 7.08933L8.51872 5.87443L5.79295 2.30997L4.20424 3.52487ZM9.7799 7.42666L13.0412 4.77684L11.78 3.22461L8.51872 5.87443L9.7799 7.42666ZM6.93 7.08933C7.615 7.9851 8.90471 8.13775 9.7799 7.42666L8.51872 5.87443L8.51872 5.87443L6.93 7.08933ZM4.92482 0.612672C3.66656 1.13698 3.51956 2.62952 4.20424 3.52487L5.79295 2.30997C5.78972 2.30574 5.79882 2.31412 5.79301 2.34173C5.78977 2.35714 5.78105 2.38097 5.76071 2.40638C5.7389 2.43364 5.71296 2.45095 5.69409 2.45881L4.92482 0.612672ZM11.8315 3.38247C11.8159 3.36954 11.7976 3.34694 11.7853 3.31751C11.7739 3.28996 11.772 3.26683 11.7728 3.25239C11.7743 3.22658 11.7839 3.22145 11.78 3.22461L13.0412 4.77684C13.8882 4.08864 14.1138 2.67844 13.1096 1.84416L11.8315 3.38247Z" mask="url(#path-3-inside-2_4625_136630)" /> <mask id="path-5-inside-3_4625_136630" fill="white"> <path fillRule="evenodd" clipRule="evenodd" d="M13.7004 9.59459C14.2458 9.80667 14.8626 9.50647 14.9393 8.9264C14.9793 8.62329 15 8.31405 15 7.99999C15 6.77076 14.6832 5.61554 14.1267 4.61152C13.8547 4.1207 13.2067 4.04462 12.7685 4.39518L10.055 6.56603C9.45332 7.04736 9.59912 7.99964 10.3172 8.2789L13.7004 9.59459Z" /> </mask> <path d="M10.055 6.56603L9.43028 5.78516L10.055 6.56603ZM14.1267 4.61152L13.2521 5.09629L14.1267 4.61152ZM12.7685 4.39518L12.1438 3.61431L12.7685 4.39518ZM13.7004 9.59459L13.338 10.5266L13.7004 9.59459ZM14 7.99999C14 8.2701 13.9822 8.53555 13.9479 8.79532L15.9306 9.05748C15.9764 8.71102 16 8.35801 16 7.99999H14ZM13.2521 5.09629C13.7284 5.95575 14 6.94465 14 7.99999H16C16 6.59687 15.6379 5.27532 15.0014 4.12675L13.2521 5.09629ZM12.1438 3.61431L9.43028 5.78516L10.6797 7.3469L13.3932 5.17605L12.1438 3.61431ZM9.95478 9.21091L13.338 10.5266L14.0629 8.66259L10.6797 7.3469L9.95478 9.21091ZM9.43028 5.78516C8.22697 6.74781 8.51857 8.65238 9.95478 9.21091L10.6797 7.3469L10.6797 7.3469L9.43028 5.78516ZM15.0014 4.12675C14.3798 3.00538 12.9829 2.94305 12.1438 3.61431L13.3932 5.17605C13.3971 5.17294 13.3905 5.18099 13.3657 5.17738C13.3518 5.17535 13.3301 5.16909 13.306 5.153C13.2803 5.13583 13.2619 5.11408 13.2521 5.09629L15.0014 4.12675ZM13.9479 8.79532C13.9506 8.77506 13.9604 8.74603 13.9804 8.71843C13.9991 8.69265 14.0192 8.67816 14.0329 8.67101C14.0575 8.6582 14.0678 8.66449 14.0629 8.66259L13.338 10.5266C14.3782 10.9311 15.7542 10.3917 15.9306 9.05748L13.9479 8.79532Z" mask="url(#path-5-inside-3_4625_136630)" /> </svg>
                                          <h6 className="font-inter text-[14px] leading-[1.25rem] font-semibold ml-[10px]" style={{color : "#a7adb2"}}>Danh mục đầu tư</h6>
                                      </div>
                                  </button>
                              </a>
                              <a href="#" className="cursor-pointer ml-[16px]">
                                  <button className="bg-background-chart  px-8 py-2.5 text-base rounded-lg font-medium cursor-pointer border-none transition-all duration-300 select-none"> 
                                      <div className="overflow-hidden flex items-center justify-center">
                                          <svg className="css-1rxe8v1" width="16" fill="#999999" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" > <mask id="path-1-inside-1_4625_136630" fill="white"> <path fillRule="evenodd" clipRule="evenodd" d="M2.95902 3.14319C3.34245 2.74532 3.97735 2.82803 4.31659 3.26419L7.82818 7.77909C7.94057 7.92359 8.09047 8.03447 8.26154 8.09964L13.6085 10.1366C14.1247 10.3332 14.3896 10.9159 14.1211 11.3986C12.9258 13.5467 10.6326 15 8 15C4.13401 15 1 11.866 1 8.00001C1 6.11385 1.74599 4.40193 2.95902 3.14319Z" /> </mask> <path d="M14.1211 11.3986L13.2472 10.9124L14.1211 11.3986ZM7.82818 7.77909L8.61753 7.16515L7.82818 7.77909ZM8.26154 8.09964L7.90554 9.03413L8.26154 8.09964ZM2.95902 3.14319L2.23897 2.44928L2.95902 3.14319ZM3.52723 3.87813L7.03883 8.39303L8.61753 7.16515L5.10594 2.65025L3.52723 3.87813ZM7.90554 9.03413L13.2525 11.0711L13.9645 9.2021L8.61753 7.16515L7.90554 9.03413ZM13.2472 10.9124C12.2213 12.7562 10.2552 14 8 14V16C11.0101 16 13.6304 14.3372 14.9949 11.8848L13.2472 10.9124ZM8 14C4.68629 14 2 11.3137 2 8.00001H0C0 12.4183 3.58172 16 8 16V14ZM2 8.00001C2 6.3829 2.63842 4.91698 3.67908 3.8371L2.23897 2.44928C0.853568 3.88687 0 5.8448 0 8.00001H2ZM13.2525 11.0711C13.257 11.0728 13.2471 11.0713 13.2376 11.0487C13.2323 11.0361 13.2265 11.0149 13.2276 10.9867C13.2288 10.9567 13.2373 10.9302 13.2472 10.9124L14.9949 11.8848C15.6076 10.7837 14.9541 9.57909 13.9645 9.2021L13.2525 11.0711ZM7.03883 8.39303C7.2636 8.68203 7.5634 8.90379 7.90554 9.03413L8.61753 7.16515V7.16515L7.03883 8.39303ZM5.10594 2.65025C4.45532 1.81374 3.11261 1.54272 2.23897 2.44928L3.67908 3.8371C3.6651 3.85162 3.64238 3.86742 3.61429 3.87721C3.58789 3.88641 3.56619 3.88712 3.55267 3.88574C3.52854 3.88328 3.52425 3.87429 3.52723 3.87813L5.10594 2.65025Z" mask="url(#path-1-inside-1_4625_136630)" /> <mask id="path-3-inside-2_4625_136630" fill="white"> <path  fillRule="evenodd" clipRule="evenodd" d="M12.4106 4.00073C12.8534 3.64097 12.9094 2.97791 12.4706 2.61332C11.258 1.60582 9.69973 1 7.99998 1C7.04662 1 6.13777 1.19059 5.30946 1.53574C4.76335 1.7633 4.63922 2.44746 4.9986 2.91742L7.72436 6.48188C8.06686 6.92976 8.71172 7.00609 9.14931 6.65054L12.4106 4.00073Z" /> </mask> <path d="M12.4106 4.00073L13.0412 4.77684L12.4106 4.00073ZM7.99998 2C9.45777 2 10.7918 2.51862 11.8315 3.38247L13.1096 1.84416C11.7241 0.693021 9.94168 0 7.99998 0V2ZM5.69409 2.45881C6.40269 2.16354 7.18097 2 7.99998 2V0C6.91227 0 5.87285 0.217633 4.92482 0.612672L5.69409 2.45881ZM4.20424 3.52487L6.93 7.08933L8.51872 5.87443L5.79295 2.30997L4.20424 3.52487ZM9.7799 7.42666L13.0412 4.77684L11.78 3.22461L8.51872 5.87443L9.7799 7.42666ZM6.93 7.08933C7.615 7.9851 8.90471 8.13775 9.7799 7.42666L8.51872 5.87443L8.51872 5.87443L6.93 7.08933ZM4.92482 0.612672C3.66656 1.13698 3.51956 2.62952 4.20424 3.52487L5.79295 2.30997C5.78972 2.30574 5.79882 2.31412 5.79301 2.34173C5.78977 2.35714 5.78105 2.38097 5.76071 2.40638C5.7389 2.43364 5.71296 2.45095 5.69409 2.45881L4.92482 0.612672ZM11.8315 3.38247C11.8159 3.36954 11.7976 3.34694 11.7853 3.31751C11.7739 3.28996 11.772 3.26683 11.7728 3.25239C11.7743 3.22658 11.7839 3.22145 11.78 3.22461L13.0412 4.77684C13.8882 4.08864 14.1138 2.67844 13.1096 1.84416L11.8315 3.38247Z" mask="url(#path-3-inside-2_4625_136630)" /> <mask id="path-5-inside-3_4625_136630" fill="white"> <path fillRule="evenodd" clipRule="evenodd" d="M13.7004 9.59459C14.2458 9.80667 14.8626 9.50647 14.9393 8.9264C14.9793 8.62329 15 8.31405 15 7.99999C15 6.77076 14.6832 5.61554 14.1267 4.61152C13.8547 4.1207 13.2067 4.04462 12.7685 4.39518L10.055 6.56603C9.45332 7.04736 9.59912 7.99964 10.3172 8.2789L13.7004 9.59459Z" /> </mask> <path d="M10.055 6.56603L9.43028 5.78516L10.055 6.56603ZM14.1267 4.61152L13.2521 5.09629L14.1267 4.61152ZM12.7685 4.39518L12.1438 3.61431L12.7685 4.39518ZM13.7004 9.59459L13.338 10.5266L13.7004 9.59459ZM14 7.99999C14 8.2701 13.9822 8.53555 13.9479 8.79532L15.9306 9.05748C15.9764 8.71102 16 8.35801 16 7.99999H14ZM13.2521 5.09629C13.7284 5.95575 14 6.94465 14 7.99999H16C16 6.59687 15.6379 5.27532 15.0014 4.12675L13.2521 5.09629ZM12.1438 3.61431L9.43028 5.78516L10.6797 7.3469L13.3932 5.17605L12.1438 3.61431ZM9.95478 9.21091L13.338 10.5266L14.0629 8.66259L10.6797 7.3469L9.95478 9.21091ZM9.43028 5.78516C8.22697 6.74781 8.51857 8.65238 9.95478 9.21091L10.6797 7.3469L10.6797 7.3469L9.43028 5.78516ZM15.0014 4.12675C14.3798 3.00538 12.9829 2.94305 12.1438 3.61431L13.3932 5.17605C13.3971 5.17294 13.3905 5.18099 13.3657 5.17738C13.3518 5.17535 13.3301 5.16909 13.306 5.153C13.2803 5.13583 13.2619 5.11408 13.2521 5.09629L15.0014 4.12675ZM13.9479 8.79532C13.9506 8.77506 13.9604 8.74603 13.9804 8.71843C13.9991 8.69265 14.0192 8.67816 14.0329 8.67101C14.0575 8.6582 14.0678 8.66449 14.0629 8.66259L13.338 10.5266C14.3782 10.9311 15.7542 10.3917 15.9306 9.05748L13.9479 8.79532Z" mask="url(#path-5-inside-3_4625_136630)" /> </svg>
                                          <h6 className="font-inter text-[14px] leading-[1.25rem] font-semibold ml-[10px]" style={{color : "#a7adb2"}}>Danh sách theo dõi</h6>
                                      </div>
                                  </button>
                              </a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          {/* chi  tiết stosk và biểu đồ */}
          <div className="flex justify-between mt-6 flex-nowrap" style={{minHeight : "548px"}}>
              <div className="flex-auto relative max-w-full mr-8 w-full">
                  <div className="relative max-w-full min-h-px">
                      <div className="flex items-center justify-between">
                          <div className="">
                              <div className="flex items-center">
                                  <h2 className="font-inter text-3xl leading-9 font-bold mr-2 text-text-content">1,281.44</h2>
                                  <h2 className="font-inter text-3xl leading-9 font-bold text-mauxanh">0.80</h2>
                                  <div className="p-0.5 px-1.5 rounded-md flex items-center bg-neutral ml-8">
                                      <svg className="font-light fill-current mr-1 text-white" style={{marginRight : "2px"}}width="8" height="5" viewBox="0 0 8 5" xmlns="http://www.w3.org/2000/svg"> <path d="M4.28823 0.299539C4.13087 0.136006 3.86913 0.136005 3.71177 0.299538L0.321654 3.82265C0.077125 4.07677 0.25722 4.5 0.609884 4.5L7.39012 4.5C7.74278 4.5 7.92287 4.07677 7.67835 3.82265L4.28823 0.299539Z"></path> </svg>
                                      <h6 className="font-inter text-sm leading-5 font-semibold text-white">0.06%</h6>
                                  </div>
                              </div>
                              <h6 className="font-inter text-sm leading-5 font-medium" style={{color : "#a7adb2"}}>Chỉ số VNINDEX</h6>
                          </div>
                          <div className="mt-4 pb-6">
                              <h2 className="text-mauxanh font-inter text-2xl leading-8 font-semibold">Booming</h2>
                              <div className="font-inter text-sm leading-5 font-medium" style={{ color :"#a7adb2"}}>Chu kỳ thị trường Việt Nam hiện tại
                                <svg width="16" height="16" className="cursor-pointer ml-2 inline" viewBox="0 0 12 12" stroke="#999999" fill="none" xmlns="http://www.w3.org/2000/svg" > <circle cx="6" cy="6" r="5.5" /> <path d="M6 5.5L6 8.5" strokeLinecap="round" /> <path d="M6.75 3.75C6.75 4.16421 6.41421 4.5 6 4.5C5.58579 4.5 5.25 4.16421 5.25 3.75C5.25 3.33579 5.58579 3 6 3C6.41421 3 6.75 3.33579 6.75 3.75Z" /> </svg>
                              </div>
                          </div>
                          <div className="-mb-8 flex">
                              <h6 className="font-inter text-sm leading-5 font-medium mr-1 inline cursor-pointer text-link"> Xem chi tiết</h6>
                              <svg style={{marginTop :"6px"}} width="6" height="8" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg" > <path d="M1.5 1L4.5 4L3 5.5L1.5 7" stroke="#006CEC" strokeWidth="2" strokeLinecap="round" /> </svg>
                          </div>
                      </div>
                  </div>
                  <div className="block">
                      <div className="select-none w-fit rounded-lg mt-3 px-6 m-0 text-sm tabular-nums leading-[1.5715] list-none [font-feature-settings:'tnum'] flex bg-background-chart " style={{color : "#a7adb2"}}>
                          <div className="m-0 relative flex flex-none items-center">
                              <div className="relative flex flex-auto self-stretch overflow-hidden whitespace-nowrap translate-x-0">
                                <div className="relative flex transition-transform duration-300" style={{transform : "translate(0px, 0px)"}}>
                                      <button className=" relative inline-flex items-center py-1.5 text-sm bg-transparent border-0 outline-none cursor-pointer">
                                        <div className="outline-none transition-all duration-300 font-semibold" style={{color : "#a7adb2"}}>1M</div>
                                      </button>
                                      <button className="m-0 ml-8 relative inline-flex items-center py-1.5 text-sm bg-transparent border-0 outline-none cursor-pointer">
                                        <div className="outline-none transition-all duration-300 font-semibold" style={{color : "#a7adb2"}}>3M</div>
                                      </button>
                                      <button className="m-0 ml-8 relative inline-flex items-center py-1.5 text-sm bg-transparent border-0 outline-none cursor-pointer">
                                        <div className="outline-none transition-all duration-300 font-semibold" style={{color : "#a7adb2"}}>1Y</div>
                                      </button>
                                      <button className="m-0 ml-8 relative inline-flex items-center py-1.5 text-sm bg-transparent border-0 outline-none cursor-pointer">
                                        <div className="outline-none transition-all duration-300 font-semibold fiintown-active-tabs-tab" style={{color : "#a7adb2"}}>5Y</div>
                                      </button>
                                      <button className="m-0 ml-8 relative inline-flex items-center py-1.5 text-sm bg-transparent border-0 outline-none cursor-pointer">
                                        <div className="outline-none transition-all duration-300 font-semibold " style={{color : "#a7adb2"}}>Tất cả</div>
                                      </button>   
                                </div>
                              </div>
                          </div>
                          <div className="flex-auto min-w-0 min-h-0"></div>
                      </div>
                  </div>
                  {/*  Đây là nơi hiển thị biểu đô  */}
                  <div className="flex flex-wrap items-center mt-4 w-full max-w-full">
                        <BieuDoThiTruong/>
                  </div>
              </div>
              <div className="relative max-w-full" style={{ flex: '0 0 392px' }}>
                <div className="block">
                    <div className="w-full">
                        <div className="mb-6 flex items-center">
                            <h2 className="text-text-content font-inter text-2xl leading-9 font-bold mr-0">Đề xuất từ chuyên gia</h2>
                            <svg width="16" height="16" className="cursor-pointer ml-2 inline" viewBox="0 0 12 12" stroke="#999999" fill="none" xmlns="http://www.w3.org/2000/svg" > <circle cx="6" cy="6" r="5.5" /> <path d="M6 5.5L6 8.5" strokeLinecap="round" /> <path d="M6.75 3.75C6.75 4.16421 6.41421 4.5 6 4.5C5.58579 4.5 5.25 4.16421 5.25 3.75C5.25 3.33579 5.58579 3 6 3C6.41421 3 6.75 3.33579 6.75 3.75Z" /> </svg>
                        </div>
                        <div className="block">
                            <div className="mb-6">
                                <a href="" className="cursor-pointer">
                                    <div className="p-6 cursor-pointer rounded-xl bg-background-chart shadow-[0px_0px_10px_0px_#00000019]">
                                        <div className="flex justify-between">
                                            <div className="flex items-center">
                                                <div className="relative w-12 h-12 bg-white rounded-full overflow-hidden border border-[#e6e6e6]">
                                                    <img src="https://cdn.simplize.vn/simplizevn/logo/HPG.jpeg" alt="" className="absolute w-full h-full object-contain"/>
                                                </div>
                                                <div className="ml-4">
                                                    <h3 className="font-inter text-xl leading-7 font-bold text-text-content">HPG</h3>
                                                    <div className="flex">
                                                        <span className="font-inter text-xs leading-4 font-semibold text-text-content">25,500</span>
                                                        <div className="bg-[#e14040] px-1 py-0.5 rounded-sm ml-1 flex items-center flex-nowrap">
                                                            <svg className="mr-0.5" width="8" height="5" viewBox="0 0 8 5" fill="#fff" > <path d="M4.28823 4.70046C4.13087 4.86399 3.86913 4.86399 3.71177 4.70046L0.321654 1.17735C0.077125 0.923228 0.25722 0.499999 0.609884 0.499999L7.39012 0.5C7.74278 0.5 7.92288 0.923229 7.67835 1.17735L4.28823 4.70046Z" /> </svg>
                                                            <span className="font-inter text-xs leading-4 font-medium text-text-content">0.39%</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex items-center">
                                                <div className="flex justify-end">
                                                    <div className="bg-[#ffffff0c] leading-[80px] flex justify-center items-center text-center w-auto h-8 px-3 py-1 rounded-lg mb-0">
                                                        <h3 className="font-inter leading-7 text-text-content font-semibold text-base flex">
                                                            <div className="w-fit cursor-pointer flex items-center">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 32 32" fill="none"> <path  fillRule="evenodd"  clipRule="evenodd"  d="M11.1657 5.89319C10.2913 6.93421 10 8.19467 10 9V14H22V9C22 8.19467 21.7087 6.93421 20.8343 5.89319C19.9926 4.89115 18.5342 4 16 4C13.4658 4 12.0074 4.89115 11.1657 5.89319ZM24 14H26C27.1046 14 28 14.8954 28 16V28C28 29.1046 27.1046 30 26 30H6C4.89543 30 4 29.1046 4 28V16C4 14.8954 4.89543 14 6 14H8V9C8 7.80533 8.40875 6.06579 9.63429 4.60681C10.8926 3.10885 12.9342 2 16 2C19.0658 2 21.1074 3.10885 22.3657 4.60681C23.5913 6.06579 24 7.80533 24 9V14ZM6 16L6 28H26V16H6ZM16 19C15.4477 19 15 19.4477 15 20C15 20.5523 15.4477 21 16 21C16.5523 21 17 20.5523 17 20C17 19.4477 16.5523 19 16 19ZM17 22.8293C18.1652 22.4175 19 21.3062 19 20C19 18.3431 17.6569 17 16 17C14.3431 17 13 18.3431 13 20C13 21.3062 13.8348 22.4175 15 22.8293V26C15 26.5523 15.4477 27 16 27C16.5523 27 17 26.5523 17 26V22.8293Z"  fill="#999999"  /> </svg>
                                                            </div>
                                                            <span className="font-inter text-sm leading-5 font-medium text-[#a7adb2] ml-1.5">Lệnh Mua/Bán</span>
                                                        </h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex justify-between mt-1 border-b border-[#ffffff19] pb-4 items-center">
                                            <div>
                                                <div className="flex items-center flex-nowrap">
                                                    <h2 className="font-inter text-2xl leading-9 font-bold text-mauxanh">48.4%</h2>
                                                </div>
                                                <span className="font-inter text-xs leading-4 font-medium text-[#a7adb2]">Tổng lợi nhuận</span>
                                            </div>
                                            <div>
                                                <div className="h-14 gap-1.5 flex justify-center flex-col">
                                                    <h2 className="font-inter text-xl leading-9 font-bold text-[#f4f4f5] ml-auto">
                                                        <div className="w-fit cursor-pointer flex items-center">
                                                         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32" fill="none"> <path  fillRule="evenodd"  clipRule="evenodd"  d="M11.1657 5.89319C10.2913 6.93421 10 8.19467 10 9V14H22V9C22 8.19467 21.7087 6.93421 20.8343 5.89319C19.9926 4.89115 18.5342 4 16 4C13.4658 4 12.0074 4.89115 11.1657 5.89319ZM24 14H26C27.1046 14 28 14.8954 28 16V28C28 29.1046 27.1046 30 26 30H6C4.89543 30 4 29.1046 4 28V16C4 14.8954 4.89543 14 6 14H8V9C8 7.80533 8.40875 6.06579 9.63429 4.60681C10.8926 3.10885 12.9342 2 16 2C19.0658 2 21.1074 3.10885 22.3657 4.60681C23.5913 6.06579 24 7.80533 24 9V14ZM6 16L6 28H26V16H6ZM16 19C15.4477 19 15 19.4477 15 20C15 20.5523 15.4477 21 16 21C16.5523 21 17 20.5523 17 20C17 19.4477 16.5523 19 16 19ZM17 22.8293C18.1652 22.4175 19 21.3062 19 20C19 18.3431 17.6569 17 16 17C14.3431 17 13 18.3431 13 20C13 21.3062 13.8348 22.4175 15 22.8293V26C15 26.5523 15.4477 27 16 27C16.5523 27 17 26.5523 17 26V22.8293Z"  fill="#999999"  /> </svg>
                                                        </div>
                                                    </h2>
                                                    <span className="font-inter text-xs leading-4 font-medium text-[#a7adb2]">Số lượng cổ phiếu</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex justify-between mt-4">
                                            <div>
                                                <div className="flex flex-row-reverse justify-end">
                                                    <div className="flex items-center flex-nowrap flex-row gap-y-0">
                                                        <span className="font-inter text-xs leading-4 font-normal text-mauxanh">21.9%</span>
                                                    </div>
                                                    <span className="font-inter text-xs leading-4 font-normal text-[#a7adb2] pr-1.5">Tỷ lệ lãi bình quân</span>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="flex flex-row-reverse justify-end">
                                                    <div className="flex items-center flex-nowrap flex-row gap-y-0">
                                                        <span className="font-inter text-xs leading-4 font-normal text-maudo">21.9%</span>
                                                    </div>
                                                    <span className="font-inter text-xs leading-4 font-normal text-[#a7adb2] pr-1.5">Tỷ lệ lãi bình quân</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                
                                
                                {/* <p className="text-text-content">noi dung tai day</p> */}
                            </div>
                        </div>
                        <div className="block">
                            <div className="mb-6">
                                <a href="" className="cursor-pointer">
                                    <div className="p-6 cursor-pointer rounded-xl bg-background-chart shadow-[0px_0px_10px_0px_#00000019]">
                                        <div className="flex justify-between">
                                            <div className="flex items-center">
                                                <div className="relative w-12 h-12 bg-white rounded-full overflow-hidden border border-[#e6e6e6]">
                                                    <img src="https://cdn.simplize.vn/simplizevn/logo/HPG.jpeg" alt="" className="absolute w-full h-full object-contain"/>
                                                </div>
                                                <div className="ml-4">
                                                    <h3 className="font-inter text-xl leading-7 font-bold text-text-content">HPG</h3>
                                                    <div className="flex">
                                                        <span className="font-inter text-xs leading-4 font-semibold text-text-content">25,500</span>
                                                        <div className="bg-[#e14040] px-1 py-0.5 rounded-sm ml-1 flex items-center flex-nowrap">
                                                            <svg className="mr-0.5" width="8" height="5" viewBox="0 0 8 5" fill="#fff" > <path d="M4.28823 4.70046C4.13087 4.86399 3.86913 4.86399 3.71177 4.70046L0.321654 1.17735C0.077125 0.923228 0.25722 0.499999 0.609884 0.499999L7.39012 0.5C7.74278 0.5 7.92288 0.923229 7.67835 1.17735L4.28823 4.70046Z" /> </svg>
                                                            <span className="font-inter text-xs leading-4 font-medium text-text-content">0.39%</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex items-center">
                                                <div className="flex justify-end">
                                                    <div className="bg-[#ffffff0c] leading-[80px] flex justify-center items-center text-center w-auto h-8 px-3 py-1 rounded-lg mb-0">
                                                        <h3 className="font-inter leading-7 text-text-content font-semibold text-base flex">
                                                            <div className="w-fit cursor-pointer flex items-center">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 32 32" fill="none"> <path  fillRule="evenodd"  clipRule="evenodd"  d="M11.1657 5.89319C10.2913 6.93421 10 8.19467 10 9V14H22V9C22 8.19467 21.7087 6.93421 20.8343 5.89319C19.9926 4.89115 18.5342 4 16 4C13.4658 4 12.0074 4.89115 11.1657 5.89319ZM24 14H26C27.1046 14 28 14.8954 28 16V28C28 29.1046 27.1046 30 26 30H6C4.89543 30 4 29.1046 4 28V16C4 14.8954 4.89543 14 6 14H8V9C8 7.80533 8.40875 6.06579 9.63429 4.60681C10.8926 3.10885 12.9342 2 16 2C19.0658 2 21.1074 3.10885 22.3657 4.60681C23.5913 6.06579 24 7.80533 24 9V14ZM6 16L6 28H26V16H6ZM16 19C15.4477 19 15 19.4477 15 20C15 20.5523 15.4477 21 16 21C16.5523 21 17 20.5523 17 20C17 19.4477 16.5523 19 16 19ZM17 22.8293C18.1652 22.4175 19 21.3062 19 20C19 18.3431 17.6569 17 16 17C14.3431 17 13 18.3431 13 20C13 21.3062 13.8348 22.4175 15 22.8293V26C15 26.5523 15.4477 27 16 27C16.5523 27 17 26.5523 17 26V22.8293Z"  fill="#999999"  /> </svg>
                                                            </div>
                                                            <span className="font-inter text-sm leading-5 font-medium text-[#a7adb2] ml-1.5">Lệnh Mua/Bán</span>
                                                        </h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex justify-between mt-1 border-b border-[#ffffff19] pb-4 items-center">
                                            <div>
                                                <div className="flex items-center flex-nowrap">
                                                    <h2 className="font-inter text-2xl leading-9 font-bold text-mauxanh">48.4%</h2>
                                                </div>
                                                <span className="font-inter text-xs leading-4 font-medium text-[#a7adb2]">Tổng lợi nhuận</span>
                                            </div>
                                            <div>
                                                <div className="h-14 gap-1.5 flex justify-center flex-col">
                                                    <h2 className="font-inter text-xl leading-9 font-bold text-[#f4f4f5] ml-auto">
                                                        <div className="w-fit cursor-pointer flex items-center">
                                                         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32" fill="none"> <path  fillRule="evenodd"  clipRule="evenodd"  d="M11.1657 5.89319C10.2913 6.93421 10 8.19467 10 9V14H22V9C22 8.19467 21.7087 6.93421 20.8343 5.89319C19.9926 4.89115 18.5342 4 16 4C13.4658 4 12.0074 4.89115 11.1657 5.89319ZM24 14H26C27.1046 14 28 14.8954 28 16V28C28 29.1046 27.1046 30 26 30H6C4.89543 30 4 29.1046 4 28V16C4 14.8954 4.89543 14 6 14H8V9C8 7.80533 8.40875 6.06579 9.63429 4.60681C10.8926 3.10885 12.9342 2 16 2C19.0658 2 21.1074 3.10885 22.3657 4.60681C23.5913 6.06579 24 7.80533 24 9V14ZM6 16L6 28H26V16H6ZM16 19C15.4477 19 15 19.4477 15 20C15 20.5523 15.4477 21 16 21C16.5523 21 17 20.5523 17 20C17 19.4477 16.5523 19 16 19ZM17 22.8293C18.1652 22.4175 19 21.3062 19 20C19 18.3431 17.6569 17 16 17C14.3431 17 13 18.3431 13 20C13 21.3062 13.8348 22.4175 15 22.8293V26C15 26.5523 15.4477 27 16 27C16.5523 27 17 26.5523 17 26V22.8293Z"  fill="#999999"  /> </svg>
                                                        </div>
                                                    </h2>
                                                    <span className="font-inter text-xs leading-4 font-medium text-[#a7adb2]">Số lượng cổ phiếu</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex justify-between mt-4">
                                            <div>
                                                <div className="flex flex-row-reverse justify-end">
                                                    <div className="flex items-center flex-nowrap flex-row gap-y-0">
                                                        <span className="font-inter text-xs leading-4 font-normal text-mauxanh">21.9%</span>
                                                    </div>
                                                    <span className="font-inter text-xs leading-4 font-normal text-[#a7adb2] pr-1.5">Tỷ lệ lãi bình quân</span>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="flex flex-row-reverse justify-end">
                                                    <div className="flex items-center flex-nowrap flex-row gap-y-0">
                                                        <span className="font-inter text-xs leading-4 font-normal text-maudo">21.9%</span>
                                                    </div>
                                                    <span className="font-inter text-xs leading-4 font-normal text-[#a7adb2] pr-1.5">Tỷ lệ lãi bình quân</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="block">
                            <div className="mb-6">
                                <a href="" className="cursor-pointer">
                                    <div className="p-6 cursor-pointer rounded-xl bg-background-chart shadow-[0px_0px_10px_0px_#00000019]">
                                        <div className="flex justify-between">
                                            <div className="flex items-center">
                                                <div className="relative w-12 h-12 bg-white rounded-full overflow-hidden border border-[#e6e6e6]">
                                                    <img src="https://cdn.simplize.vn/simplizevn/logo/HPG.jpeg" alt="" className="absolute w-full h-full object-contain"/>
                                                </div>
                                                <div className="ml-4">
                                                    <h3 className="font-inter text-xl leading-7 font-bold text-text-content">HPG</h3>
                                                    <div className="flex">
                                                        <span className="font-inter text-xs leading-4 font-semibold text-text-content">25,500</span>
                                                        <div className="bg-[#e14040] px-1 py-0.5 rounded-sm ml-1 flex items-center flex-nowrap">
                                                            <svg className="mr-0.5" width="8" height="5" viewBox="0 0 8 5" fill="#fff" > <path d="M4.28823 4.70046C4.13087 4.86399 3.86913 4.86399 3.71177 4.70046L0.321654 1.17735C0.077125 0.923228 0.25722 0.499999 0.609884 0.499999L7.39012 0.5C7.74278 0.5 7.92288 0.923229 7.67835 1.17735L4.28823 4.70046Z" /> </svg>
                                                            <span className="font-inter text-xs leading-4 font-medium text-text-content">0.39%</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex items-center">
                                                <div className="flex justify-end">
                                                    <div className="bg-[#ffffff0c] leading-[80px] flex justify-center items-center text-center w-auto h-8 px-3 py-1 rounded-lg mb-0">
                                                        <h3 className="font-inter leading-7 text-text-content font-semibold text-base flex">
                                                            <div className="w-fit cursor-pointer flex items-center">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 32 32" fill="none"> <path  fillRule="evenodd"  clipRule="evenodd"  d="M11.1657 5.89319C10.2913 6.93421 10 8.19467 10 9V14H22V9C22 8.19467 21.7087 6.93421 20.8343 5.89319C19.9926 4.89115 18.5342 4 16 4C13.4658 4 12.0074 4.89115 11.1657 5.89319ZM24 14H26C27.1046 14 28 14.8954 28 16V28C28 29.1046 27.1046 30 26 30H6C4.89543 30 4 29.1046 4 28V16C4 14.8954 4.89543 14 6 14H8V9C8 7.80533 8.40875 6.06579 9.63429 4.60681C10.8926 3.10885 12.9342 2 16 2C19.0658 2 21.1074 3.10885 22.3657 4.60681C23.5913 6.06579 24 7.80533 24 9V14ZM6 16L6 28H26V16H6ZM16 19C15.4477 19 15 19.4477 15 20C15 20.5523 15.4477 21 16 21C16.5523 21 17 20.5523 17 20C17 19.4477 16.5523 19 16 19ZM17 22.8293C18.1652 22.4175 19 21.3062 19 20C19 18.3431 17.6569 17 16 17C14.3431 17 13 18.3431 13 20C13 21.3062 13.8348 22.4175 15 22.8293V26C15 26.5523 15.4477 27 16 27C16.5523 27 17 26.5523 17 26V22.8293Z"  fill="#999999"  /> </svg>
                                                            </div>
                                                            <span className="font-inter text-sm leading-5 font-medium text-[#a7adb2] ml-1.5">Lệnh Mua/Bán</span>
                                                        </h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex justify-between mt-1 border-b border-[#ffffff19] pb-4 items-center">
                                            <div>
                                                <div className="flex items-center flex-nowrap">
                                                    <h2 className="font-inter text-2xl leading-9 font-bold text-mauxanh">48.4%</h2>
                                                </div>
                                                <span className="font-inter text-xs leading-4 font-medium text-[#a7adb2]">Tổng lợi nhuận</span>
                                            </div>
                                            <div>
                                                <div className="h-14 gap-1.5 flex justify-center flex-col">
                                                    <h2 className="font-inter text-xl leading-9 font-bold text-[#f4f4f5] ml-auto">
                                                        <div className="w-fit cursor-pointer flex items-center">
                                                         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32" fill="none"> <path  fillRule="evenodd"  clipRule="evenodd"  d="M11.1657 5.89319C10.2913 6.93421 10 8.19467 10 9V14H22V9C22 8.19467 21.7087 6.93421 20.8343 5.89319C19.9926 4.89115 18.5342 4 16 4C13.4658 4 12.0074 4.89115 11.1657 5.89319ZM24 14H26C27.1046 14 28 14.8954 28 16V28C28 29.1046 27.1046 30 26 30H6C4.89543 30 4 29.1046 4 28V16C4 14.8954 4.89543 14 6 14H8V9C8 7.80533 8.40875 6.06579 9.63429 4.60681C10.8926 3.10885 12.9342 2 16 2C19.0658 2 21.1074 3.10885 22.3657 4.60681C23.5913 6.06579 24 7.80533 24 9V14ZM6 16L6 28H26V16H6ZM16 19C15.4477 19 15 19.4477 15 20C15 20.5523 15.4477 21 16 21C16.5523 21 17 20.5523 17 20C17 19.4477 16.5523 19 16 19ZM17 22.8293C18.1652 22.4175 19 21.3062 19 20C19 18.3431 17.6569 17 16 17C14.3431 17 13 18.3431 13 20C13 21.3062 13.8348 22.4175 15 22.8293V26C15 26.5523 15.4477 27 16 27C16.5523 27 17 26.5523 17 26V22.8293Z"  fill="#999999"  /> </svg>
                                                        </div>
                                                    </h2>
                                                    <span className="font-inter text-xs leading-4 font-medium text-[#a7adb2]">Số lượng cổ phiếu</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex justify-between mt-4">
                                            <div>
                                                <div className="flex flex-row-reverse justify-end">
                                                    <div className="flex items-center flex-nowrap flex-row gap-y-0">
                                                        <span className="font-inter text-xs leading-4 font-normal text-mauxanh">21.9%</span>
                                                    </div>
                                                    <span className="font-inter text-xs leading-4 font-normal text-[#a7adb2] pr-1.5">Tỷ lệ lãi bình quân</span>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="flex flex-row-reverse justify-end">
                                                    <div className="flex items-center flex-nowrap flex-row gap-y-0">
                                                        <span className="font-inter text-xs leading-4 font-normal text-maudo">21.9%</span>
                                                    </div>
                                                    <span className="font-inter text-xs leading-4 font-normal text-[#a7adb2] pr-1.5">Tỷ lệ lãi bình quân</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
              
          </div>

      </div>
    </div>
  );
}
