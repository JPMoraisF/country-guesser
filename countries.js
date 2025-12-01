import fetch from "node-fetch";
import fs from "fs";

(async () => {
  const data = await fetch("https://restcountries.com/v3.1/all?fields=name,cioc,capital,region,subregion,population,languages,borders,flag").then(r => r.json());

  const simplified = [];

  for (const c of data) {
    const code = c.cioc || ""; 

    simplified.push({
      code,
      name: c.name.common,
      capital: c.capital?.[0] || "N/A",
      region: c.region,
      subregion: c.subregion,
      population: c.population,
      languages: c.languages ? Object.values(c.languages) : [],
      borders: c.borders || [],
      flag: c.flag
    });
  }

  fs.writeFileSync("./countries.json", JSON.stringify(simplified, null, 2));
})();
