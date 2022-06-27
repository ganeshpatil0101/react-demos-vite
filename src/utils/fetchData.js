export function fetchData(URL) {
   return fetch(URL).then((res) => {
        return res.json();
    }).catch((e)=>{
        console.error(e);
    });
}