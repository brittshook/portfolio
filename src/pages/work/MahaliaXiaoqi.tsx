import { CaseIntro } from "../../components/CaseIntro";
import { NavBar } from "../../components/NavBar";

export const MahaliaXiaoqi = () => {
  return (
    <main id="mahalia">
      <NavBar
        type="sub"
        items={[
          ["Overview", "#overview"],
          ["Background", "#background"],
          ["Research", "#research"],
          ["Design", "#design"],
          ["Test", "#test"],
          ["Development", "#development"],
          ["Next Steps", "#next-steps"],
        ]}
      />
      <div className="page-content"></div>
    </main>
  );
};
