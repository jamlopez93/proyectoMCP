import React from "react";
const personaje = {
  name: "Spider-man",
  alias: "Peter Parker",
  statLine: [
    {
      name: "stamina",
      value: 6,
    },
    {
      name: "movement",
      value: "L",
    },
    {
      name: "height",
      value: 2,
    },
    {
      name: "threat",
      value: 5,
    },
  ],
  defense: {
    physical: 4,
    energy: 4,
    mystical: 3,
  },
  attacks: [
    {
      attackType: "Physical",
      attackName: "Spider strike",
      isBeam: false,
      isArea: false,
      range: 3,
      strength: 5,
      powerCost: 0,
      abilities: ["dis is an attack"],
    },
  ],
  leadership: {
    name: "Friendly",
    affiliation: "Web warriors",
    leadershipText: "dis is a leadership",
  },
  superPowers: [
    {
      powerType: "Reactive",
      name: "Web line",
      cost: "2",
      powerText: "dis is text",
    },
  ],
};
const main = () => {
  return (
    <section className="m-8 rounded-lg border-2 border-slate-400 drop-shadow-md bg-neutral-300 p-4 flex-col justify-evenly items-start">
      <div className="font-bold text-slate-600 rounded border border-slate-400 p-2">
        <h3>{personaje.name}</h3>
        <p className="text-[8px] text-slate-600 uppercase">{personaje.alias}</p>
      </div>
      <div>{personaje.statLine.map((stat)=>{return <p>{stat.name} : {stat.value}</p>})}</div>
    </section>
  );
};

export default main;
