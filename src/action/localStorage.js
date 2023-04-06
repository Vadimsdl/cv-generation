function addMinutes(date, minutes) {
    date.setMinutes(date.getMinutes() + minutes);
    return date;
}
export function checkStorage(key) {
    const object = JSON.parse(localStorage.getItem(key));
    if (object) {
        const dateString = addMinutes(new Date(object.timestamp), 5);
        const dateNow = new Date().getTime().toString();

        if (dateNow < dateString) {
            return object.data;
        } else {
            localStorage.removeItem(key);
            return null;
        }
    }

    return null;
}

export function setItem(key, data) {
    localStorage.setItem(key, JSON.stringify({data: data, timestamp: new Date().getTime()}));
    return data;
}
