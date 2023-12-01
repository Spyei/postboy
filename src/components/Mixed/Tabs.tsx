"use client"
import { useState } from "react";

export default function Tabs({ tabs }: { tabs: { name: string; action?: (() => void) | (() => Promise<void>) }[] }) {
    const [activeTab, setActiveTab] = useState<number>(1);

    const handleTabClick = (index: number) => {
        setActiveTab(index);
    };

    return (
        <>
            <div className="relative w-max h-12 grid grid-cols-3 items-center transition text-white">
                <div
                    className="absolute top-0 left-0 rounded-lg bg-neutral-700 transition-transform w-1/3 h-12"
                    style={{
                        transform: `translateX(${(activeTab - 1) * 100}%)`,
                        transition: "transform 0.2s ease-in-out",
                    }}
                />
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        role="tab"
                        aria-selected={activeTab === index + 1}
                        tabIndex={activeTab === index + 1 ? 0 : -1}
                        className="relative h-10 px-3 tab rounded-lg"
                        onClick={() => {
                            handleTabClick(index + 1);
                            
                            return tab.action;
                        }}
                    >
                        <span>{tab.name}</span>
                    </button>
                ))}
            </div>
        </>
    );
};