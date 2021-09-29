import axios from "axios";

export default axios.create({
    baseURL:"http://localhost:4000/api/v1/nechromatics",
});

function fetchQueryData(){

}

function encodeQueryData(data) {
    const ret = [];
    for (let d in data)
        ret.push(encodeURIComponent(d) + '=' + encodeURIComponent(data[d]));
    return ret.join('&');
}