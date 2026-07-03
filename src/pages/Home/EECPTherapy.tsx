import doctorImg from "../../assets/images/Doctor_img.png";

const leftItems = [
  {
    title: "Non-Invasive",
    text: "Unlike bypass surgery, EECP Therapy is non-invasive, meaning no incisions or cuts are involved. Patients experience no trauma to the body, resulting in a quicker recovery time and minimal discomfort.",
  },
  {
    title: "No Risk of Infection",
    text: "Since EECP Therapy doesn't involve any surgical incisions, the risk of infection is significantly reduced. Patients can undergo treatment with peace of mind, knowing there's no risk of post-procedural complications.",
  },
  {
    title: "Painless Procedure",
    text: "EECP Therapy is entirely painless. Patients can undergo treatment comfortably without the need for anesthesia or sedation. This eliminates the risks associated with anesthesia and post-operative pain management.",
  },
];

const rightItems = [
  {
    title: "No Hospitalization Required",
    text: "EECP Therapy is typically performed outpatient, meaning there's no need for hospitalization. Patients can return home immediately after treatment sessions, allowing them to resume their daily activities without interruption.",
  },
  {
    title: "No Side Effects",
    text: "EECP Therapy is associated with minimal to no side effects. Unlike traditional bypass surgeries, which can cause various adverse effects such as bleeding, infection, and allergic reactions to anesthesia, EECP Therapy provides a safe and effective alternative.",
  },
  {
    title: "Cost-Effective Solution",
    text: "EECP Therapy is a cost-effective treatment option compared to bypass surgery (CABG). It eliminates the need for hospitalization, anesthesia, and post-operative care, lowering patient healthcare costs.",
  },
];

function PopupBox({
  item,
  side,
}: {
  item: (typeof leftItems)[number];
  side: "left" | "right";
}) {
  return (
    <div className="relative group">
      <div className="relative bg-white rounded-2xl shadow-lg shadow-[#9ABAD1]/20 p-5 border border-[#9ABAD1]/20">
        <h3 className="text-base font-semibold text-slate-800 mb-2">
          {item.title}
        </h3>
        <p className="text-sm text-slate-600 leading-relaxed">{item.text}</p>
      </div>
      <div
        className={`absolute top-8 hidden lg:block ${
          side === "left"
            ? "right-0 translate-x-full"
            : "left-0 -translate-x-full"
        }`}
      >
        <div
          className={`w-0 h-0 border-y-8 border-y-transparent ${
            side === "left"
              ? "border-l-8 border-l-white"
              : "border-r-8 border-r-white"
          }`}
        />
      </div>
    </div>
  );
}

const EECPTherapy = () => {
  return (
    <section className="container mt-30">
      <div className="flex flex-col w-full items-center">
        <h1 className="text-5xl lg:text-6xl xl:text-7xl text-slate-900 bauhaus mb-4">
          Benefits of EECP Therapy
        </h1>
        <span className="text-[20px]">
          Compared To Bypass Surgery{" "}
          <span className="text-red-500">(CABG)</span>
        </span>
      </div>

      <div className="flex flex-col lg:flex-row items-end justify-center gap-6 mt-15">
        <div className="flex flex-col gap-5 w-full lg:w-[320px] xl:w-[360px] mb-12">
          {leftItems.map((item, i) => (
            <div key={i} className={i === 0 ? "ml-8" : i === 1 ? "mr-6" : "ml-4"}>
              <PopupBox item={item} side="left" />
            </div>
          ))}
        </div>

        <div className="shrink-0">
          <img
            src={doctorImg}
            alt="Doctor"
            className="w-[500px] xl:w-[580px] h-auto object-contain"
          />
        </div>

        <div className="flex flex-col gap-5 w-full lg:w-[320px] xl:w-[360px] mb-12">
          {rightItems.map((item, i) => (
            <div key={i} className={i === 0 ? "mr-8" : i === 1 ? "ml-6" : "mr-4"}>
              <PopupBox item={item} side="right" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EECPTherapy;
