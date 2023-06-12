export const parseUrlParams = () => {
    const search = location.search;
    let URLSearch = new URLSearchParams(search);
    let entries = URLSearch.entries();
    const res = {};
    for (let [key, val] of entries) {
        res[key] = val;
    }
    return res;
};
