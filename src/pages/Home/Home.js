import { React,  useState, useEffect } from "react";

function Home() {
  const nilai = 120000;
  const [discount, setdDiscount] = useState();
  const [persen, setPersen] = useState();
  const [jumlah, setJumlah] = useState();
  
  useEffect(() => {
    const discountTotal = () => {
      if (nilai >= 70000){
        if(nilai*50/100 >= 45000 ){
          return ("Rp. " + 45000 + ",-")  
        }else{
          return ("Rp. " + nilai*50/100 + ",-")
        }
      }else if (nilai >= 50000) {
        if(nilai*50/100 >= 20000 ){
          return ("Rp." + 20000 + ",-")
        }else{
          return ("Rp." + nilai*25/100 + ",-")
        }
      }
      return "Anda tidak mendapatkan discount!";
    };
    setdDiscount(discountTotal());
  });

  useEffect(() => {
    const jumlahpersentasi = () => {
      if (nilai >= 70000){
        if(nilai*50/100 >= 45000 ){
          return ("Rp." + (nilai - 45000) + ",-")  
        }else{
          return ("Rp." + (nilai - (nilai*50/100)) + ",-")
        }
      }else if (nilai >= 50000) {
        if(nilai*50/100 >= 20000 ){
          return ("Rp." + (nilai - 20000) + ",-")
        }else{
          return ("Rp." + (nilai - (nilai*25/100)) + ",-")
        }
      }
      return "-";
    };
    setJumlah(jumlahpersentasi());
  });
  
  useEffect(() => {
    const persentase = () => {
      if (nilai >= 70000){
        if(nilai*50/100 >= 45000 ){
          return ("50%") 
        }else{
          return ("50%")
        }
      }else if (nilai >= 50000) {
        if(nilai*50/100 >= 20000 ){
          return ("25%")
        }else{
          return ("25%")
        }
      }
      return "-";
    };
    setPersen(persentase());
  });

  return (
    <div className="App">
      <div className="calculator">
        <h2>Voucher Discount Dumbmerch</h2>
        <div>- Total Belanja Rp.{nilai},-</div>
        <div>- Discount : {persen}</div>
        <div>- Potongan : {discount}</div>
        <div>- Total pembayaran : {jumlah}</div>
      </div>
    </div>
  );
}

export default Home;


