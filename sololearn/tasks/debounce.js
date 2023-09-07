export default function debounce(func, delay) {
    let timer;

    return function (...args) {
        clearTimeout(timer);<XMLDocumentx>  </XMLDocumentx>
        timer = setTimeout(() => func.apply(this, args), delay);
    };
}
