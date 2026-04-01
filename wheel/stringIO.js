//Khalyutkin Victor

function inputString() {
    str = prompt('Input name\n Maximum length = 10', 'some input');
    if (str.length > 10) {
        str = str.substr(0, 10);
    }
    s.arr[s.size] = str;
    s.size++;
    crcl.add();
}
