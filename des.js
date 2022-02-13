export const des = () => {
  try {
    const regex = /XX\.[A-Za-z0-9]*\((.*?),\s*([0-9A-Za-z]{2})\)/g
    const l = f.toString().match(regex);

    function replacer(match) {
      // p1 is nondigits, p2 digits, and p3 non-alphanumerics
      return hex2a(match);
    }
    let obj = {};
    for (let i = 0; i < l.length; i++) {
      const e = l[i]
      console.log(e)
      obj[e] = eval(e)
    }
    console.log(obj);
  } catch (error) {
    console.log(error)
  }
}
