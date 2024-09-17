"use client";

import { useEffect, useState } from 'react';
import { Stock } from '@/src/types';

const mockStockData: Stock[] = [
  { id: 1, name: 'Apple', symbol: 'AAPL', price: 150 },
  { id: 2, name: 'Tesla', symbol: 'TSLA', price: 700 },
  { id: 3, name: 'Google', symbol: 'GOOGL', price: 2800 },
];

export default function StockList() {
  const [stocks, setStocks] = useState<Stock[]>([]);

  useEffect(() => {
    setStocks(mockStockData);
  }, []);

  return (
    <ul className="space-y-2">
      {stocks.map((stock) => (
        <li key={stock.id} className="border p-4 rounded ">
          <div className="text-lg font-bold text-primary-content bg-primary">{stock.name}</div>
          <div>{stock.symbol} - ${stock.price}</div>
        </li>
      ))}
    </ul>
  );
}
