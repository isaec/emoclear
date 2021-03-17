/*
copy and paste the entire contents of this script into the console of discord
use control/command shift i to open the developer console

written by isaec - https://github.com/isaec/emopin
*/
console.clear() //hide all the gunk in the console
/*
localStorage access method from https://stackoverflow.com/a/53773662

this is needed because the discord developers deleted window.localStorage

If we create an <iframe> and connect it to our document, its
contentWindow property will return a new Window object with
a freshly created `localStorage` property. Once we obtain the
property descriptor, we can disconnect the <iframe> and let it
be collected — the getter function itself doesn’t depend on
anything from its origin realm to work**.
*/
function getLocalStoragePropertyDescriptor() {
    const iframe = document.createElement('iframe');
    document.head.append(iframe);
    const pd = Object.getOwnPropertyDescriptor(iframe.contentWindow, 'localStorage');
    iframe.remove();
    return pd;
}
//redefine window.localStorage
Object.defineProperty(window, 'localStorage', getLocalStoragePropertyDescriptor());

console.log(window.localStorage)