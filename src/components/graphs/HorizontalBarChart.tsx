import { Product } from "@/types/product";
import React from "react";

interface GraphProps<K extends keyof Product> {
  data: Product[];
  dataTarget: K | string;
  barColor?: string;
  barBorderRadius?: string;
  toolTip?: boolean;
  tooltipTarget?: K;
}

// Helper function to get nested property value like rating.rate
const getNestedValue = (obj: any, path: string) => {
  return path
    .split(".")
    .reduce(
      (currentObject, key) => (currentObject ? currentObject[key] : undefined),
      obj
    );
};

const HorizontalBarChart = <K extends keyof Product>({
  data,
  dataTarget,
  barColor = "#16a34a",
  barBorderRadius = "4px",
  toolTip = false,
  tooltipTarget,
}: GraphProps<K>) => {
  const maxDataTargetValue = Math.max(
    ...data.map((item) => getNestedValue(item, dataTarget) as number)
  );

  return (
    <div className="w-full h-5/6 border-l-2 border-b-2 border-gray-300 py-2 flex flex-col gap-2 overflow-scroll">
      {/* Render bars */}
      {data.map((bar) => (
        <div
          key={bar.id}
          className="flex items-center group relative overflow-visible"
        >
          <div
            className="h-8 flex items-center justify-center"
            style={{
              backgroundColor: barColor,
              borderRadius: `0 ${barBorderRadius} ${barBorderRadius} 0`,
              width: `${
                ((getNestedValue(bar, dataTarget) as number) /
                  maxDataTargetValue) *
                100
              }%`,
            }}
          >
            <div className="text-white text-xs">
              {getNestedValue(bar, dataTarget as string)}
            </div>

            {/* Tooltip or other bar content */}
            {toolTip && tooltipTarget && (
              <div className="text-xs text-center opacity-0 bg-white text-black p-4 rounded absolute top-0 left-1/2 -translate-x-1/2 group-hover:-translate-y-7 group-hover:opacity-100 duration-150 cursor-default">
                {getNestedValue(bar, tooltipTarget)}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default HorizontalBarChart;
