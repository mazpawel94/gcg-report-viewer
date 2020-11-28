import { useEffect } from 'react';


const handleExport = (stageRef, callback) => {
    const link = document.createElement("a");
    link.download = `image.png`;
    link.href = stageRef.current.toDataURL();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    callback(false);
};

const useExportAsImage = (toDownload, stageRef, callback) => {

    useEffect(() => {
        if (toDownload) handleExport(stageRef, callback);
    });
}

export default useExportAsImage;
