import React from "react";

enum Volatility {
  Low = "Low",
  Medium = "Medium",
  High = "High",
}

export default function Table() {
  const labels = ["Stategy", "TVL", "Volatility", "Collateral", "PNL"];

  const getColorFromVolatility = (volatility: Volatility): string => {
    switch (volatility) {
      case Volatility.Low: {
        return "#7879F1";
      }
      case Volatility.Medium: {
        return "#9B51E0";
      }
      case Volatility.High: {
        return "#6148C2";
      }
    }
  };

  const data = {
    "Strategy 1": {
      TVL: 100_000,
      volatility: Volatility.Low,
      collateral: 1000,
      PNL: 100,
    },
    "Strategy 2": {
      TVL: 12_500,
      volatility: Volatility.Medium,
      collateral: 1000,
      PNL: -100,
    },
    "Strategy 3": {
      TVL: 12_500,
      volatility: Volatility.Medium,
      collateral: 1000,
      PNL: 100,
    },
    "Strategy 4": {
      TVL: 25_000,
      volatility: Volatility.High,
      collateral: 1000,
      PNL: 100,
    },
  };

  const formatMoney = (tvl: number): string => {
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
      signDisplay: "never",
    });
    return formatter.format(tvl);
  };

  return (
    <div className="h-440 w-855 rounded-md px-4 pb-20 shadow-lg">
      <div className=" pb-4 pt-6 text-lg text-black">
        <p>Stategy Performance</p>
      </div>
      <div className={`grid grid-cols-5 rounded-md border text-xs`}>
        {labels.map((label, index) => (
          <div
            key={`label-${index}`}
            className="border-b px-4 pb-13px pt-26 font-bold"
          >
            {label}
          </div>
        ))}
        {Object.entries(data).map(([key, value], index) => {
          return (
            <React.Fragment key={`row-${index}`}>
              <div
                className="border-b px-4 py-5 text-black"
                key={`row-${index}-column-1`}
              >
                {key}
              </div>
              <div
                className="border-b px-4 py-5 text-black"
                key={`row-${index}-column-2`}
              >
                {formatMoney(value.TVL)}
              </div>
              <div
                className="flex items-center justify-start border-b text-white"
                key={`row-${index}-column-3`}
              >
                <div
                  style={{
                    backgroundColor: getColorFromVolatility(value.volatility),
                  }}
                  className="w-min rounded-full px-3 py-1"
                >
                  {value.volatility}
                </div>
              </div>
              <div
                key={`row-${index}-column-4`}
                className="border-b px-4 py-5 text-black"
              >
                {formatMoney(value.collateral)}
              </div>
              <div
                key={`row-${index}-column-5`}
                className={`border-b px-4 py-5 font-bold ${
                  value.PNL > 0 ? "text-green-600" : "text-red-600"
                }`}
              >
                {value.PNL > 0 ? "+" : "-"} {formatMoney(value.PNL)}
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}
