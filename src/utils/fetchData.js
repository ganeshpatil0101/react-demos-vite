export function fetchData(URL) {
   return fetch(URL).then((res) => {
        const data = res.json()
        return data;
    }).catch((e)=>{
        console.error(e);
    });
}