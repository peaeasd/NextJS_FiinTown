"use client";
import React, { useState  } from "react";
import dynamic from 'next/dynamic';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function AboutPage() {
      const options = {
        chart: {
          id: 'basic-bar',
          type: 'line' as const,
          toolbar: {
            show: false,
          },
        },
        xaxis: {
          labels: {
            show: false, 
          },
          axisBorder: {
            show: false // đường kẻ ngang trên trục x 
          },
          axisTicks: {
            show: false // đường kẻ đánh dấu điểm của trục x
          }
        },
        yaxis: {
          labels: {
            show: false
          }
        },
        grid:{
          show : false,
          padding: {
            left: 0,
            right: 0
          }
        },
        toolbar: {
          show: false,
        },
        stroke: {
          curve: 'straight' as const, // Đường uốn éo
          colors : ['#25B770'],
          width: 3,
        }
      };

      const series = [
        {
          name: 'Doanh thu',
          data: [
            { x: '2024-01-01', y: 30 },
            { x: '2024-01-02', y: 50 },
            { x: '2024-01-03', y: 35 },
            { x: '2024-01-04', y: 60 },
            { x: '2024-01-05', y: 70 },
            { x: '2024-01-06', y: 50 }
          ]
        }
      ];
      
    return (
      <div>
          <Chart
            options={options}
            series={series}
            type="line"
            width="500"
            height={"80px"}
          />
      </div>
      );
}
