const CenterDetails = () => {
  return (
    <section className="container my-30">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* 1/3 - Details */}
        <div className="w-full lg:w-1/3 bg-white rounded-2xl shadow-lg shadow-[#9ABAD1]/10 border border-[#9ABAD1]/15 p-6 lg:p-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 bauhaus mb-6">
            Center Details
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-semibold text-[#6B8FA3] uppercase tracking-wider mb-2">
                Timing
              </h3>
              <p className="text-slate-700 text-base">10:00 AM - 7:00 PM (Sat-Thu)</p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-[#6B8FA3] uppercase tracking-wider mb-2">
                Phone No.
              </h3>
              <div className="space-y-1">
                <p className="text-slate-700 text-base">+8801744251222</p>
                <p className="text-slate-700 text-base">+8801755660777</p>
                <p className="text-slate-700 text-base">+8801777780851</p>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-[#6B8FA3] uppercase tracking-wider mb-2">
                Location
              </h3>
              <p className="text-slate-700 text-base leading-relaxed">
                Saaol Heart Center Dhaka: House # 26, Eskaton Garden Road, Ramna, Dhaka-1000
              </p>
            </div>
          </div>
        </div>

        {/* 2/3 - Map */}
        <div className="w-full lg:w-2/3 rounded-2xl overflow-hidden shadow-lg shadow-[#9ABAD1]/10 border border-[#9ABAD1]/15">
          <iframe
            src="https://www.google.com/maps?q=26+Eskaton+Garden+Road+Ramna+Dhaka+1000+Bangladesh&output=embed"
            width="100%"
            height="100%"
            style={{ minHeight: "400px" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="SAAOL Heart Center Dhaka Location"
          />
        </div>
      </div>
    </section>
  );
};

export default CenterDetails;
