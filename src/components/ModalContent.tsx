import React from "react";
interface ModalContentProps {
  scrollToBlock: any;
  onClose: () => void;
}

const ModalContent = ({ onClose, scrollToBlock }: ModalContentProps) => {
  return (
    <div className="text-xs/">
      <h1 className="text-center text-2xl md:text-4xl font-bold text-blue-500 mb-4">
        🔥 ATTENTION METAL ROOFING <br /> CONTRACTORS 🔥
      </h1>
      <h2 className="text-center text-xl md:text-3xl font-bold mb-9">
        Get Consistent, High-Paying Jobs Without Chasing <br /> Builders Or
        Dealing With Slow Payments!
      </h2>
      <div className="bg-blue-50 p-4 rounded-lg mb-8">
        <p className="mb-3">
          Let’s be real… If you’re a metal roofing contractor, you know the #1
          biggest headache is dealing with:
        </p>
        <ul className="mb-4 space-y-2">
          <li className="flex items-center">
            <span className="text-red-500 mr-2">❌</span>Slow-paying builders
            who string you along for weeks
          </li>
          <li className="flex items-center">
            <span className="text-red-500 mr-2">❌</span>Inconsistent
            work—you're flat out one month, dead the next
          </li>
          <li className="flex items-center">
            <span className="text-red-500 mr-2">❌</span>Admin
            nightmares—filling out paperwork, chasing approvals, and waiting for
            jobs to start
          </li>
        </ul>
        <p className="mb-4">
          Meanwhile, you’re out there grinding every day—climbing roofs,
          managing your team, and making sure every job gets done right…
        </p>
        <p className="mb-4">
          So why should you ALSO have to chase work, chase payments, and deal
          with builders who don’t respect your time?
        </p>
        <p className="mb-4">That's where The Metal Roofing Group comes in.</p>
        <p>
          We connect elite metal roofing crews with steady, high-paying
          insurance jobs—so you can skip the BS and focus on roofing.
        </p>
      </div>
      <div className="bg-green-50 p-4 rounded-lg mb-8">
        <h3 className="text-lg font-bold mb-3">🔥 HERE’S HOW IT WORKS…</h3>
        <ul className="mt-2 space-y-2 mb-4">
          <li className="flex items-center">
            <span className="text-blue-600 mr-2">1️⃣</span>
            <strong>JOIN OUR NETWORK</strong> – Apply in under 60 seconds (free
            to join).
          </li>
          <li className="flex items-center">
            <span className="text-blue-600 mr-2">2️⃣</span>
            <strong>GET PRE-QUALIFIED</strong> – We verify your skills &
            experience.
          </li>
          <li className="flex items-center">
            <span className="text-blue-600 mr-2">3️⃣</span>
            <strong>START GETTING JOBS</strong> – No bidding, no chasing—just
            solid work.
          </li>
        </ul>
        <p className="mb-2">
          No more feast-and-famine cycles. No more slow-paying builders.
        </p>
        <p>Just reliable jobs, fast payments, and ZERO admin headaches.</p>
      </div>
      <div className="bg-yellow-50 p-4 rounded-lg mb-8">
        <h3 className="font-bold text-lg">🔨 WHO WE'RE LOOKING FOR:</h3>
        <ul className="mt-3 space-y-2">
          <li>🚀 Licensed & insured metal roofing subcontractors</li>
          <li>
            🚀 Experienced with tin-on, tin-off, battens, tiedown upgrades
          </li>
          <li>
            🚀 Teams that can handle labor-only OR supply & install (we prefer
            both!)
          </li>
          <li>
            🚀 Roofers who want consistent, high-volume work WITHOUT the drama
          </li>
        </ul>
      </div>
      <div className="bg-blue-50 p-4 rounded-lg mb-8">
        <h3 className="font-bold text-lg">
          🔥 WHY METAL ROOFING CREWS LOVE WORKING WITH US:
        </h3>
        <ul className="mt-3 space-y-2">
          <li>
            ✅ <strong>Consistent Work—No More Gaps Between Jobs!</strong>
            <br />
            We send you steady insurance jobs, so you can focus on roofing
            instead of hunting for work.
          </li>
          <li>
            ✅ <strong>Get Paid FAST—No More Chasing Invoices!</strong>
            <br />
            We eliminate the delays—so you can get paid on time, every time.
          </li>
          <li>
            ✅ <strong>No Paperwork, No Admin—Just Show Up & Roof!</strong>
            <br />
            We handle approvals, scopes, and insurance admin, so you don’t waste
            hours dealing with red tape.
          </li>
          <li>
            ✅{" "}
            <strong>
              We Prefer Contractors Who Can Do BOTH Labor-Only & Supply &
              Install!
            </strong>
            <br />
            That means you'll get priority access to high-value jobs over those
            who only do labor.
          </li>
        </ul>
      </div>
      <div className="bg-green-50 p-4 rounded-lg mb-8">
        <h3 className="font-bold text-lg mb-3">
          🔥 DON'T TAKE OUR WORD FOR IT—SEE WHAT OTHER ROOFERS SAY…
        </h3>
        <p className="mb-3 border-l-3 border-green-500 pl-3">
          “The Metal Roofing Group made it so easy to get steady work. No more
          fighting for jobs, no more chasing payments. I just focus on roofing
          and get paid.”
        </p>
        <p className="border-l-3 border-green-500 pl-3">
          “Finally, a system that works FOR roofers, not against them. No admin,
          no hassle—just jobs on <br /> autopilot.”
        </p>
      </div>
      <div className="bg-yellow-50 p-4 rounded-lg mb-8">
        <h3 className="font-bold text-lg">🔥 FREQUENTLY ASKED QUESTIONS</h3>
        <p className="font-bold mt-2">🔷 Do I have to pay to join?</p>
        <p>NO. It’s free to apply and join. You only get paid jobs.</p>
        <p className="font-bold mt-2">🔷 How soon can I start getting jobs?</p>
        <p>Once approved, we start sending work right away.</p>
        <p className="font-bold mt-2">🔷 What if I only do labor-only?</p>
        <p>
          You can still apply, but contractors who can do BOTH labor-only and
          supply & install will get first priority.
        </p>
        <p className="font-bold mt-2">🔷 Do I need insurance?</p>
        <p>Yes, you need public liability insurance to qualify.</p>
      </div>
      <div className="text-center">
        <button
          onClick={() => {
            scrollToBlock("sectionJobApp");
            onClose();
          }}
          className="cursor-pointer bg-blue-600 text-white inline-block font-bold py-2 px-6 md:py-3 rounded-full text-xs md:text-lg shadow-md hover:bg-blue-700 mb-3"
        >
          🚀 APPLY NOW & START GETTING JOBS THIS WEEK! 🚀
        </button>
        <p className="text-gray-500 text-xs">
          (Spots are limited—we only take a certain number of crews per region!)
        </p>
      </div>
    </div>
  );
};

export default ModalContent;
