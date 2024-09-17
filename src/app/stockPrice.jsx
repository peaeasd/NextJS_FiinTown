import React, { useState  }  from "react";
import dynamic from 'next/dynamic';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });
 const StockPrice = ()=>{
   const [data, setData] = useState([
      [
        {
          name: 'VNINDEX',
          data: [
            { x: '2024-07-01', y: 1284 },
            { x: '2024-07-02', y: 1275 },
            { x: '2024-07-03', y: 1290 },
            { x: '2024-07-04', y: 1280 },
            { x: '2024-07-05', y: 1300 },
            { x: '2024-07-06', y: 1295 },
            { x: '2024-07-07', y: 1285 },
            { x: '2024-07-08', y: 1278 },
            { x: '2024-07-09', y: 1282 },
            { x: '2024-07-10', y: 1291 },
            { x: '2024-07-11', y: 1302 },
            { x: '2024-07-12', y: 1287 },
            { x: '2024-07-13', y: 1279 },
            { x: '2024-07-14', y: 1294 },
            { x: '2024-07-15', y: 1286 },
            { x: '2024-07-16', y: 1276 },
            { x: '2024-07-17', y: 1290 },
            { x: '2024-07-18', y: 1288 },
            { x: '2024-07-19', y: 1277 },
            { x: '2024-07-20', y: 1292 },
            { x: '2024-07-21', y: 1283 }
          ]
        }
      ],
      [
        {
          name: 'DowJones',
          data: [
            { x: '2024-01-01', y: 33000 },
            { x: '2024-01-02', y: 33100 },
            { x: '2024-01-03', y: 32950 },
            { x: '2024-01-04', y: 33200 },
            { x: '2024-01-05', y: 33150 },
            { x: '2024-01-06', y: 33075 },
            { x: '2024-01-07', y: 33180 },
            { x: '2024-01-08', y: 33250 },
            { x: '2024-01-09', y: 33300 },
            { x: '2024-01-10', y: 33020 },
            { x: '2024-01-11', y: 33140 },
            { x: '2024-01-12', y: 33060 },
            { x: '2024-01-13', y: 33210 },
            { x: '2024-01-14', y: 33190 },
            { x: '2024-01-15', y: 33280 },
            { x: '2024-01-16', y: 33120 },
            { x: '2024-01-17', y: 33300 },
            { x: '2024-01-18', y: 33400 },
            { x: '2024-01-19', y: 33270 },
            { x: '2024-01-20', y: 33150 }
          ]
        }
      ],
      [
        {
          name: 'Nikkei 225',
          data: [
            { x: '2024-01-01', y: 30000 },
            { x: '2024-01-02', y: 30100 },
            { x: '2024-01-03', y: 29950 },
            { x: '2024-01-04', y: 30200 },
            { x: '2024-01-05', y: 30075 },
            { x: '2024-01-06', y: 30150 },
            { x: '2024-01-07', y: 30250 },
            { x: '2024-01-08', y: 30300 },
            { x: '2024-01-09', y: 30400 },
            { x: '2024-01-10', y: 30090 },
            { x: '2024-01-11', y: 30170 },
            { x: '2024-01-12', y: 30020 },
            { x: '2024-01-13', y: 30210 },
            { x: '2024-01-14', y: 30190 },
            { x: '2024-01-15', y: 30300 },
            { x: '2024-01-16', y: 30130 },
            { x: '2024-01-17', y: 30350 },
            { x: '2024-01-18', y: 30450 },
            { x: '2024-01-19', y: 30280 },
            { x: '2024-01-20', y: 30120 }
          ]
        }
      ],
      [
        {
          name: 'Dầu thô',
          data: [
            { x: '2024-01-01', y: 85 },
            { x: '2024-01-02', y: 87 },
            { x: '2024-01-03', y: 84 },
            { x: '2024-01-04', y: 88 },
            { x: '2024-01-05', y: 86 },
            { x: '2024-01-06', y: 89 },
            { x: '2024-01-07', y: 90 },
            { x: '2024-01-08', y: 92 },
            { x: '2024-01-09', y: 93 },
            { x: '2024-01-10', y: 91 },
            { x: '2024-01-11', y: 85 },
            { x: '2024-01-12', y: 88 },
            { x: '2024-01-13', y: 87 },
            { x: '2024-01-14', y: 89 },
            { x: '2024-01-15', y: 90 },
            { x: '2024-01-16', y: 91 },
            { x: '2024-01-17', y: 92 },
            { x: '2024-01-18', y: 90 },
            { x: '2024-01-19', y: 94 },
            { x: '2024-01-20', y: 89 }
          ]
        }
      ],
      [
        {
          name: 'Vàng',
          data: [
            { x: '2024-01-01', y: 1900 },
            { x: '2024-01-02', y: 1910 },
            { x: '2024-01-03', y: 1895 },
            { x: '2024-01-04', y: 1920 },
            { x: '2024-01-05', y: 1905 },
            { x: '2024-01-06', y: 1915 },
            { x: '2024-01-07', y: 1930 },
            { x: '2024-01-08', y: 1940 },
            { x: '2024-01-09', y: 1950 },
            { x: '2024-01-10', y: 1925 },
            { x: '2024-01-11', y: 1910 },
            { x: '2024-01-12', y: 1905 },
            { x: '2024-01-13', y: 1920 },
            { x: '2024-01-14', y: 1915 },
            { x: '2024-01-15', y: 1945 },
            { x: '2024-01-16', y: 1935 },
            { x: '2024-01-17', y: 1920 },
            { x: '2024-01-18', y: 1955 },
            { x: '2024-01-19', y: 1940 },
            { x: '2024-01-20', y: 1925 }
          ]
        }
      ],
      [
        {
          name: 'Bitcoin',
          data: [
            { x: '2024-01-01', y: 27000 },
            { x: '2024-01-02', y: 27100 },
            { x: '2024-01-03', y: 26950 },
            { x: '2024-01-04', y: 27200 },
            { x: '2024-01-05', y: 27150 },
            { x: '2024-01-06', y: 27075 },
            { x: '2024-01-07', y: 27250 },
            { x: '2024-01-08', y: 27300 },
            { x: '2024-01-09', y: 27400 },
            { x: '2024-01-10', y: 27190 },
            { x: '2024-01-11', y: 27270 },
            { x: '2024-01-12', y: 27020 },
            { x: '2024-01-13', y: 27300 },
            { x: '2024-01-14', y: 27190 },
            { x: '2024-01-15', y: 27400 },
            { x: '2024-01-16', y: 27350 },
            { x: '2024-01-17', y: 27500 },
            { x: '2024-01-18', y: 27600 },
            { x: '2024-01-19', y: 27450 },
            { x: '2024-01-20', y: 27220 }
          ]
        }
      ]
    ]);
    const options = {
      chart: {
        id: 'Biểu đồ Cho 6 cái thằng nổi bật của simplize',
        type: 'line',
        toolbar: {
          show: false, // ẩn thanh công cụ
        },
      },
      xaxis: {
        labels: {
          show: false,  // ẩn các nhãn trên trục X
        },
        axisBorder: {
          show: false, // ẩn đường viền trục X
        },
        axisTicks: {
          show: false, // ẩn các dấu hiệu trên trục X
        },
        tickAmount: 0, // không hiển thị số lượng dấu hiệu
        crosshairs: {
          show: false // ẩn đường crosshair trên trục X
        }
      },
      yaxis: {
        labels: {
          show: false // ẩn các nhãn trên trục Y
        },
        axisBorder: {
          show: false // ẩn đường viền trục Y
        },
        axisTicks: {
          show: false // ẩn các dấu hiệu trên trục Y
        },
        tickAmount: 0, // không hiển thị số lượng dấu hiệu
        crosshairs: {
          show: false // ẩn đường crosshair trên trục Y
        }
      },
      grid: {
        show: false, // ẩn lưới
        padding: {
          left: -5,
          right: 0,
          top : -30,
          bottom : -30
        }
      },
      stroke: {
        curve: 'smooth', // Đường uốn éo
        width: 2,
        colors: ['#25B770'] 
      }
    }
   return (
      <div className="flex justify-between">
                {/* Mỗi biểu đồ nằm ở đây */}
                <div className="p-4 rounded-lg bg-background-chart w-[calc(16.67%-20px)] shadow-md">
                      <div className="flex items-center"> 
                          <div className="relative w-[24px] h-[24px] overflow-hidden rounded-full">
                            <img src="https://static.simplize.vn/static/logo/VNINDEX.png" className="bg-primary"/>
                          </div>  
                          <a className="font-inter text-sm leading-5 font-semibold ml-2 transition-all duration-300 text-text-content hover:text-red-50" href="#">VNINDEX</a>
                      </div>  
                      <div className="flex items-center mt-2">
                          <h6 className="font-inter text-sm leading-5 font-semibold text-text-content">1,234,56</h6>
                          <div style={{margin : "0px 6px"}}>
                              <h6 className="font-inter text-sm leading-5 font-semibold text-neutral" >+28.67</h6>
                          </div>
                          <div className="bg-neutral p-custom-1px px-custom-4px rounded text-white p-1 flex items-center">
                              <svg className="font-light fill-current" style={{marginRight : "2px"}}width="8" height="5" viewBox="0 0 8 5" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.28823 0.299539C4.13087 0.136006 3.86913 0.136005 3.71177 0.299538L0.321654 3.82265C0.077125 4.07677 0.25722 4.5 0.609884 4.5L7.39012 4.5C7.74278 4.5 7.92287 4.07677 7.67835 3.82265L4.28823 0.299539Z"></path>
                              </svg>
                              <span className="font-inter text-xs leading-3 font-semibold ">2.34%</span>
                          </div>
                      </div>
                          {/* Dưới này là để biểu đồ */}
                      <div className="chart">
                            <Chart
                            options={options}
                            series={data[0]}
                            type="line"
                            height="70"
                            />
                      </div>
                </div>
                <div className="p-4 rounded-lg bg-background-chart w-[calc(16.67%-20px)] shadow-md">
                      <div className="flex items-center"> 
                          <div className="relative w-[24px] h-[24px] overflow-hidden rounded-full">
                            <img src="https://static.simplize.vn/static/logo/VNINDEX.png" className="bg-primary"/>
                          </div>  
                          <a className="font-inter text-sm leading-5 font-semibold ml-2 transition-all duration-300 text-text-content hover:text-red-50" href="#">VNINDEX</a>
                      </div>  
                      <div className="flex items-center mt-2">
                          <h6 className="font-inter text-sm leading-5 font-semibold text-text-content">1,234,56</h6>
                          <div style={{margin : "0px 6px"}}>
                              <h6 className="font-inter text-sm leading-5 font-semibold text-neutral" >+28.67</h6>
                          </div>
                          <div className="bg-neutral p-custom-1px px-custom-4px rounded text-white p-1 flex items-center">
                              <svg className="font-light fill-current" style={{marginRight : "2px"}}width="8" height="5" viewBox="0 0 8 5" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.28823 0.299539C4.13087 0.136006 3.86913 0.136005 3.71177 0.299538L0.321654 3.82265C0.077125 4.07677 0.25722 4.5 0.609884 4.5L7.39012 4.5C7.74278 4.5 7.92287 4.07677 7.67835 3.82265L4.28823 0.299539Z"></path>
                              </svg>
                              <span className="font-inter text-xs leading-3 font-semibold ">2.34%</span>
                          </div>
                      </div>
                          {/* Dưới này là để biểu đồ */}
                      <div className="chart">
                            <Chart
                            options={options}
                            series={data[1]}
                            type="line"
                            height="70"
                            />
                      </div>
                </div>
                <div className="p-4 rounded-lg bg-background-chart w-[calc(16.67%-20px)] shadow-md">
                      <div className="flex items-center"> 
                          <div className="relative w-[24px] h-[24px] overflow-hidden rounded-full">
                            <img src="https://static.simplize.vn/static/logo/VNINDEX.png" className="bg-primary"/>
                          </div>  
                          <a className="font-inter text-sm leading-5 font-semibold ml-2 transition-all duration-300 text-text-content hover:text-red-50" href="#">VNINDEX</a>
                      </div>  
                      <div className="flex items-center mt-2">
                          <h6 className="font-inter text-sm leading-5 font-semibold text-text-content">1,234,56</h6>
                          <div style={{margin : "0px 6px"}}>
                              <h6 className="font-inter text-sm leading-5 font-semibold text-neutral" >+28.67</h6>
                          </div>
                          <div className="bg-neutral p-custom-1px px-custom-4px rounded text-white p-1 flex items-center">
                              <svg className="font-light fill-current" style={{marginRight : "2px"}}width="8" height="5" viewBox="0 0 8 5" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.28823 0.299539C4.13087 0.136006 3.86913 0.136005 3.71177 0.299538L0.321654 3.82265C0.077125 4.07677 0.25722 4.5 0.609884 4.5L7.39012 4.5C7.74278 4.5 7.92287 4.07677 7.67835 3.82265L4.28823 0.299539Z"></path>
                              </svg>
                              <span className="font-inter text-xs leading-3 font-semibold ">2.34%</span>
                          </div>
                      </div>
                          {/* Dưới này là để biểu đồ */}
                      <div className="chart">
                            <Chart
                            options={options}
                            series={data[2]}
                            type="line"
                            height="70"
                            />
                      </div>
                </div>
                <div className="p-4 rounded-lg bg-background-chart w-[calc(16.67%-20px)] shadow-md">
                      <div className="flex items-center"> 
                          <div className="relative w-[24px] h-[24px] overflow-hidden rounded-full">
                            <img src="https://static.simplize.vn/static/logo/VNINDEX.png" className="bg-primary"/>
                          </div>  
                          <a className="font-inter text-sm leading-5 font-semibold ml-2 transition-all duration-300 text-text-content hover:text-red-50" href="#">VNINDEX</a>
                      </div>  
                      <div className="flex items-center mt-2">
                          <h6 className="font-inter text-sm leading-5 font-semibold text-text-content">1,234,56</h6>
                          <div style={{margin : "0px 6px"}}>
                              <h6 className="font-inter text-sm leading-5 font-semibold text-neutral" >+28.67</h6>
                          </div>
                          <div className="bg-neutral p-custom-1px px-custom-4px rounded text-white p-1 flex items-center">
                              <svg className="font-light fill-current" style={{marginRight : "2px"}}width="8" height="5" viewBox="0 0 8 5" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.28823 0.299539C4.13087 0.136006 3.86913 0.136005 3.71177 0.299538L0.321654 3.82265C0.077125 4.07677 0.25722 4.5 0.609884 4.5L7.39012 4.5C7.74278 4.5 7.92287 4.07677 7.67835 3.82265L4.28823 0.299539Z"></path>
                              </svg>
                              <span className="font-inter text-xs leading-3 font-semibold ">2.34%</span>
                          </div>
                      </div>
                          {/* Dưới này là để biểu đồ */}
                      <div className="chart">
                            <Chart
                            options={options}
                            series={data[3]}
                            type="line"
                            height="70"
                            />
                      </div>
                </div>
                <div className="p-4 rounded-lg bg-background-chart w-[calc(16.67%-20px)] shadow-md">
                      <div className="flex items-center"> 
                          <div className="relative w-[24px] h-[24px] overflow-hidden rounded-full">
                            <img src="https://static.simplize.vn/static/logo/VNINDEX.png" className="bg-primary"/>
                          </div>  
                          <a className="font-inter text-sm leading-5 font-semibold ml-2 transition-all duration-300 text-text-content hover:text-red-50" href="#">VNINDEX</a>
                      </div>  
                      <div className="flex items-center mt-2">
                          <h6 className="font-inter text-sm leading-5 font-semibold text-text-content">1,234,56</h6>
                          <div style={{margin : "0px 6px"}}>
                              <h6 className="font-inter text-sm leading-5 font-semibold text-neutral" >+28.67</h6>
                          </div>
                          <div className="bg-neutral p-custom-1px px-custom-4px rounded text-white p-1 flex items-center">
                              <svg className="font-light fill-current" style={{marginRight : "2px"}}width="8" height="5" viewBox="0 0 8 5" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.28823 0.299539C4.13087 0.136006 3.86913 0.136005 3.71177 0.299538L0.321654 3.82265C0.077125 4.07677 0.25722 4.5 0.609884 4.5L7.39012 4.5C7.74278 4.5 7.92287 4.07677 7.67835 3.82265L4.28823 0.299539Z"></path>
                              </svg>
                              <span className="font-inter text-xs leading-3 font-semibold ">2.34%</span>
                          </div>
                      </div>
                          {/* Dưới này là để biểu đồ */}
                      <div className="chart">
                            <Chart
                            options={options}
                            series={data[4]}
                            type="line"
                            height="70"
                            />
                      </div>
                </div>
                <div className="p-4 rounded-lg bg-background-chart w-[calc(16.67%-20px)] shadow-md">
                      <div className="flex items-center"> 
                          <div className="relative w-[24px] h-[24px] overflow-hidden rounded-full">
                            <img src="https://static.simplize.vn/static/logo/VNINDEX.png" className="bg-primary"/>
                          </div>  
                          <a className="font-inter text-sm leading-5 font-semibold ml-2 transition-all duration-300 text-text-content hover:text-red-50" href="#">VNINDEX</a>
                      </div>  
                      <div className="flex items-center mt-2">
                          <h6 className="font-inter text-sm leading-5 font-semibold text-text-content">1,234,56</h6>
                          <div style={{margin : "0px 6px"}}>
                              <h6 className="font-inter text-sm leading-5 font-semibold text-neutral" >+28.67</h6>
                          </div>
                          <div className="bg-neutral p-custom-1px px-custom-4px rounded text-white p-1 flex items-center">
                              <svg className="font-light fill-current" style={{marginRight : "2px"}}width="8" height="5" viewBox="0 0 8 5" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.28823 0.299539C4.13087 0.136006 3.86913 0.136005 3.71177 0.299538L0.321654 3.82265C0.077125 4.07677 0.25722 4.5 0.609884 4.5L7.39012 4.5C7.74278 4.5 7.92287 4.07677 7.67835 3.82265L4.28823 0.299539Z"></path>
                              </svg>
                              <span className="font-inter text-xs leading-3 font-semibold ">2.34%</span>
                          </div>
                      </div>
                          {/* Dưới này là để biểu đồ */}
                      <div className="chart">
                            <Chart
                            options={options}
                            series={data[5]}
                            type="line"
                            height="70"
                            />
                      </div>
                </div>
          </div>
   )
 }
 export default StockPrice;