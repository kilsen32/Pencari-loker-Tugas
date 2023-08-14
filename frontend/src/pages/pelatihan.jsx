import Benefit from "../components/benefit/beefit";
import CoverPelatihan from "../components/coverPelatihan/coverPelatihan";
import Komentar from "../components/komentar/komentar";
import ProgresMateri from "../components/progresMateri/progresMateri";

const Pelatihan = () => {
  return (
    <>
      <br></br>
      <h4 style={{ color: "black", fontWeight: "bold", marginLeft: "70px" }}>
        Judul Pelatihan
      </h4>
      <br />
      <CoverPelatihan />
      <div style={{ display: "flex" }}>
        <ProgresMateri />
        <div>
          <Benefit />
          <Komentar />
        </div>
      </div>
    </>
  );
};

export default Pelatihan;
