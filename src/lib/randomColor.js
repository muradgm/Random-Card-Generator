export default function randomColor() {
  let randomClr = '#'
  const str = 'ABCDEF0123456789';
  for (let i = 0; i < 6; i++) {
    randomClr+= str[Math.floor(Math.random() * str.length)]
  }
  return randomClr;
}

export function randomGradient() {
  let colorOne = randomColor();
  let colorTwo = randomColor();
  let angle = Math.floor(Math.random() * 360);
  
  // let bgColor = `linear-gradient(180deg, ${colorOne} 0%, ${colorTwo} 100%)`
  // console.log(bgColor);
  let bgColor = randomColor();

  return bgColor;
}

randomGradient()