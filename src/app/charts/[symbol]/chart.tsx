"use client";
import { useEffect, useRef } from 'react';
import { createChart, ColorType } from 'lightweight-charts'; 

export default function Chart() {
  const chartContainerRef = useRef(null);
  useEffect(() => {
    if (chartContainerRef.current) {
      const chartOptions = {
        layout: {
          textColor: '#A6ACB1',
          background: { type: ColorType.Solid, color: '#171B26' }, 
        },
        grid: {
         vertLines: {
           color: 'rgba(70, 130, 180, 0.2)',
           style: 0, 
         },
         horzLines: {
           color: 'rgba(70, 130, 180, 0.2)', 
           style: 0, 
         },
       },
      };
      const chart = createChart(chartContainerRef.current, chartOptions);
      
      // Tạo chuỗi nến
      const candlestickSeries = chart.addCandlestickSeries({
         upColor: '#26a69a',
         downColor: '#ef5350',
         borderVisible: false,
         wickUpColor: '#26a69a',
         wickDownColor: '#ef5350',
       });
       
      // Tạo hai chuỗi biểu đồ cột (Histogram Series) cho màu xanh và đỏ
      const histogramUpSeries = chart.addHistogramSeries({
        color: 'rgba(38, 166, 154, 0.5)', // Màu xanh cho các cột tăng
        priceLineVisible: false,
      });

      const histogramDownSeries = chart.addHistogramSeries({
        color: 'rgba(239, 83, 80, 0.5)',
        priceLineVisible: false,
      });

      const candlestickData = [
        { time: '2018-12-22', open: 75.16, high: 82.84, low: 36.16, close: 45.72 },
        { time: '2018-12-23', open: 45.12, high: 53.90, low: 45.12, close: 48.09 },
        { time: '2018-12-24', open: 60.71, high: 60.71, low: 53.39, close: 59.29 },
        { time: '2018-12-25', open: 68.26, high: 68.26, low: 59.04, close: 60.50 },
        { time: '2018-12-26', open: 67.71, high: 105.85, low: 66.67, close: 91.04 },
        { time: '2018-12-27', open: 91.04, high: 121.40, low: 82.70, close: 111.40 },
        { time: '2018-12-28', open: 111.51, high: 142.83, low: 103.34, close: 131.25 },
        { time: '2018-12-29', open: 131.33, high: 151.17, low: 77.68, close: 96.43 },
        { time: '2018-12-30', open: 106.33, high: 110.20, low: 90.39, close: 98.10 },
        { time: '2018-12-31', open: 109.87, high: 114.69, low: 85.66, close: 111.26 },
      ];
      const histogramUpData:any = [];
      const histogramDownData: any = [];
      const histogramValues = [
        { time: '2018-12-22', value: 32.51 },
        { time: '2018-12-23', value: 31.11 },
        { time: '2018-12-24', value: 27.02 },
        { time: '2018-12-25', value: 27.32 },
        { time: '2018-12-26', value: 25.17 },
        { time: '2018-12-27', value: 28.89 },
        { time: '2018-12-28', value: 25.46 },
        { time: '2018-12-29', value: 23.92 },
        { time: '2018-12-30', value: 22.68 },
        { time: '2018-12-31', value: 22.67 },
      ];

      histogramValues.forEach((item, index) => {
        const candle = candlestickData[index];
        if (candle.close > candle.open) {
          histogramUpData.push({ time: item.time, value: item.value });
        } else {
          histogramDownData.push({ time: item.time, value: item.value });
        }
      });
      histogramUpSeries.setData(histogramUpData);
      histogramDownSeries.setData(histogramDownData);
      candlestickSeries.setData(candlestickData);
      chart.timeScale().fitContent();
    }
  }, []);

  return (
        <div ref={chartContainerRef} className="w-full h-full"></div>
  );
}
