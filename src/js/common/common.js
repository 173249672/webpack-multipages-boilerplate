export const changeFileName = (newName) => {
    let pro = window.location.protocol;
    let host = window.location.host;
    let pathname = window.location.pathname;
    let n = pathname.lastIndexOf('/');
    let path = pathname.substring(0,n+1);
    window.location.href = pro + '//' + host + path + newName +'.html';
}

