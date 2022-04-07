export default function getTimeStamp() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    return `${hours >= 10 ? hours.toString() : hours.toString().padStart(2, "0")}:${minutes >= 10 ? minutes.toString() : minutes.toString().padStart(2, "0")}`;
}