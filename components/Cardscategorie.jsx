import React from "react";
import Image from "next/image";

const Cardscategorie = () => {
  return (
    <div className="max-w-[1240px] mx-auto">
      <h1 className="text-3xl font-bold text-center p-4">List Of Categories</h1>
      <div className="relative flex flex-wrap justify-center p-4 space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="max-w-sm bg-gray-800 border border-gray-200 rounded-lg shadow">
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                Criminal Law
              </h5>
              <p className="mb-3 font-normal text-gray-400 ">
                Criminal law deals with crimes and their punishment. This
                category of law covers a wide range of offenses, from minor
                infractions such as traffic violations to serious crimes such as
                murder or terrorism. Criminal law typically involves the
                government prosecuting an individual or organization for
                violating a law that has been established by the state or
                federal government. The purpose of criminal law is to maintain
                public order and safety, and to deter people from committing
                crimes in the future.
              </p>
            </div>
          </div>

          <div className="max-w-sm bg-gray-800  border border-gray-200 rounded-lg shadow">
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                Civil Law
              </h5>
              <p className="mb-3 font-normal text-gray-400 ">
                Civil law governs disputes between individuals, organizations,
                or entities. This category of law encompasses a broad range of
                legal issues, including contract disputes, property disputes,
                family law, and personal injury claims. Civil law cases
                typically involve one party seeking compensation or some other
                form of relief from another party. Unlike criminal law, civil
                law cases do not involve the government prosecuting anyone, but
                rather individuals or organizations suing one another.
              </p>
            </div>
          </div>

          <div className="max-w-sm bg-gray-800  border border-gray-200 rounded-lg shadow">
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                Administrative Law
              </h5>
              <p className="mb-3 font-normal text-gray-400 ">
                Administrative law is concerned with the actions of government
                agencies and the procedures they use to enforce regulations and
                laws. This category of law governs the behavior of government
                entities such as licensing boards, environmental protection
                agencies, and other regulatory bodies. Administrative law cases
                may involve issues such as permits, licenses, zoning, or
                environmental regulations.
              </p>
            </div>
          </div>

          <div className="max-w-sm border border-gray-200 rounded-lg shadow bg-gray-800 ">
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                International Law
              </h5>
              <p className="mb-3 font-normal text-gray-400 ">
                International law governs the relationships between countries
                and other international actors, such as multinational
                corporations and international organizations like the United
                Nations. This category of law deals with issues such as trade,
                diplomacy, human rights, and international disputes.
                International law is often based on treaties and agreements
                between nations and can be enforced through international courts
                and tribunals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cardscategorie;
