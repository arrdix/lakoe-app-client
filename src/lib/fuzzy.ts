import fuzzy from "fuzzy";

const fuzzySkor = (kataTersedia: string[], kataInput: string) => {
  return fuzzy.filter(kataInput, kataTersedia||[""]);
};

export default fuzzySkor;
