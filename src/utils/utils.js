import { darken } from 'polished';
export const colorTypeGradients = (type1, type2, length) => {

  // debugger
  let color1, color2;

  switch (type1) {
      case "grass":
          color1 = darken(0.25, '#92BC2C');
          break;
      case "poison":
          color1 = darken(0.05, '#d6a2e4');
          break;
      case "normal":
          color1 = darken(0.05, '#dcdcdc');
          break;
      case "fire":
          color1 = darken(0.25, '#ffb971');
          break;
      case "water":
          color1 = darken(0.35, '#8cc4e2');
          break;
      case "electric":
          color1 = darken(0.35, '#ffe662');
          break;
      case "ice":
          color1 = darken(0.35, '#8cf5e4');
          break;
      case "fighting":
          color1 = darken(0.35, '#da7589');
          break;
      case "ground":
          color1 = darken(0.35, '#e69a74');
          break;
      case "flying":
          color1 = darken(0.35, '#bbc9e4');
          break;
      case "psychic":
          color1 = darken(0.15, '#ffa5da');
          break;
      case "bug":
          color1 = darken(0.35, '#bae05f');
          break;
      case "rock":
          color1 = darken(0.35, '#C9BB8A');
          break;
      case "ghost":
          color1 = darken(0.35, '#8291e0');
          break;
      case "dark":
          color1 = darken(0.35, '#8e8c94');
          break;
      case "dragon":
          color1 = darken(0.35, '#88a2e8');
          break;
      case "steel":
          color1 = darken(0.35, '#9fb8b9');
          break;
      case "fairy":
          color1 = darken(0.15, '#fdb9e9');
          break;
      default:
          color1 = "gainsboro";
          break;
  }

  if (length === 2) {

      switch (type2) {
          case "grass":
              color2 = darken(0.35, '#92BC2C');
              break;
          case "poison":
              color2 = darken(0.35, '#d6a2e4');
              break;
          case "normal":
              color2 = darken(0.35, '#dcdcdc');
              break;
          case "fire":
              color2 = darken(0.35, '#ffb971');
              break;
          case "water":
              color2 = darken(0.35, '#8cc4e2');
              break;
          case "electric":
              color2 = darken(0.35, '#ffe662');
              break;
          case "ice":
              color2 = darken(0.35, '#8cf5e4');
              break;
          case "fighting":
              color2 = darken(0.35, '#da7589');
              break;
          case "ground":
              color2 = darken(0.35, '#e69a74');
              break;
          case "flying":
              color2 = darken(0.35, '#bbc9e4');
              break;
          case "psychic":
              color2 = darken(0.35, '#ffa5da');
              break;
          case "bug":
              color2 = darken(0.35, '#bae05f');
              break;
          case "rock":
              color2 = darken(0.35, '#C9BB8A');
              break;
          case "ghost":
              color2 = darken(0.35, '#8291e0');
              break;
          case "dark":
              color2 = darken(0.35, '#8e8c94');
              break;
          case "dragon":
              color2 = darken(0.35, '#88a2e8');
              break;
          case "steel":
              color2 = darken(0.35, '#9fb8b9');
              break;
          case "fairy":
              color2 = darken(0.35, '#fdb9e9');
              break;
          default:
              color2 = "gainsboro";
              break;
      }
  } else if (length === 1) {
      color2 = color1;
  }

  const finalColor = [color1,color2];

  return finalColor;

}