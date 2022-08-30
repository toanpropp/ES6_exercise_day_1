const khoi1 = document.getElementById('btnKhoi1');
const khoi2 = document.getElementById('btnKhoi2');
(tinhDTB = (...i) => {
    let n = 0;
    return (
      i.map(i => {
        n += parseFloat(i);
      }),
      (n / i.length).toFixed(2)
    );
  })
(khoi1.onclick = () =>{
    let T = document.getElementById('inpToan').value,
        L = document.getElementById('inpLy').value,
        H = document.getElementById('inpHoa').value;
    document.getElementById('tbKhoi1').innerHTML= tinhDTB(T, L, H);
}),
(khoi2.onclick = () =>{
    let V = document.getElementById('inpVan').value,
     S = document.getElementById('inpSu').value,
     D = document.getElementById('inpDia').value,
     E = document.getElementById('inpEnglish').value;
     document.getElementById('tbKhoi2').innerHTML= tinhDTB(V, S, D, E);
    console.log(V, S, D, E);
})