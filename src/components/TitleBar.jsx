import React, { useEffect, useState } from 'react';
import { getCurrentWindow } from '@tauri-apps/api/window';

const TitleBar = () => {
    const [appWindow, setAppWindow] = useState(null);

    useEffect(() => {
        try {
            setAppWindow(getCurrentWindow());
        } catch (e) {
            console.warn("Tauri window features not available");
        }
    }, []);

    const minimize = () => appWindow?.minimize();
    const toggleMaximize = () => appWindow?.toggleMaximize();
    const close = () => appWindow?.close();

    return (
        <div data-tauri-drag-region className="h-[30px] bg-black/20 flex justify-end items-center fixed top-0 left-0 right-0 z-[9999] backdrop-blur-[5px] rounded-t-lg select-none">
            <div onClick={minimize} className="inline-flex justify-center items-center w-[45px] h-[30px] cursor-pointer hover:bg-white/10 transition-colors">
                <img src="https://api.iconify.design/mdi:minus.svg" alt="minimize" className="w-4 h-4 invert" />
            </div>
            <div onClick={toggleMaximize} className="inline-flex justify-center items-center w-[45px] h-[30px] cursor-pointer hover:bg-white/10 transition-colors">
                <img src="https://api.iconify.design/mdi:window-maximize.svg" alt="maximize" className="w-4 h-4 invert" />
            </div>
            <div onClick={close} className="inline-flex justify-center items-center w-[45px] h-[30px] cursor-pointer hover:bg-[#ff5f56] transition-colors">
                <img src="https://api.iconify.design/mdi:window-close.svg" alt="close" className="w-4 h-4 invert" />
            </div>
        </div>
    );
};

export default TitleBar;
