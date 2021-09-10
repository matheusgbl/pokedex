import { darken, lighten } from 'polished';
export const colorTypeGradients = (type1, type2, length) => {
  let color1, color2;

  switch (type1) {
    case 'grass':
      color1 = darken(0.02, '#5FBD58');
      color2 = lighten(0.1, '#5FBD58');
      break;
    case 'poison':
      color1 = darken(0.04, '#B763CF');
      color2 = lighten(0.1, '#B763CF');
      break;
    case 'normal':
      color1 = darken(0.08, '#A0A29F');
      color2 = lighten(0.12, '#A0A29F');
      break;
    case 'fire':
      color1 = darken(0.08, '#FBA54C');
      color2 = lighten(0.2, '#FBA54C');
      break;
    case 'water':
      color1 = darken(0.1, '#539DDF');
      color2 = lighten(0.2, '#539DDF');
      break;
    case 'electric':
      color1 = darken(0.15, '#F2D94E');
      color2 = darken(0.02, '#F2D94E');
      break;
    case 'ice':
      color1 = darken(0.15, '#75D0C1');
      color2 = lighten(0.05, '#75D0C1');
      break;
    case 'fighting':
      color1 = darken(0.15, '#D3425F');
      color2 = lighten(0.1, '#D3425F');
      break;
    case 'ground':
      color1 = darken(0.2, '#DA7C4D');
      color2 = lighten(0.15, '#DA7C4D');
      break;
    case 'flying':
      color1 = darken(0.35, '#A1BBEC');
      break;
    case 'psychic':
      color1 = darken(0.1, '#FA8581');
      color2 = lighten(0.1, '#FA8581');
      break;
    case 'bug':
      color1 = darken(0.1, '#92BC2C');
      color2 = lighten(0.1, '#92BC2C');
      break;
    case 'rock':
      color1 = darken(0.25, '#C9BB8A');
      color2 = lighten(0.2, '#C9BB8A');
      break;
    case 'ghost':
      color1 = darken(0.2, '#5F6DBC');
      color2 = lighten(0.1, '#5F6DBC');
      break;
    case 'dark':
      color1 = darken(0.35, '#595761');
      color2 = darken(0.05, '#595761');
      break;
    case 'dragon':
      color1 = darken(0.1, '#0C69C8');
      color2 = lighten(0.25, '#0C69C8');
      break;
    case 'steel':
      color1 = darken(0.35, '#5695A3');
      color2 = lighten(0.25, '#5695A3');
      break;
    case 'fairy':
      color1 = darken(0.1, '#EE90E6');
      color2 = lighten(0.05, '#EE90E6');
      break;
    default:
      color1 = 'gainsboro';
      break;
  }

  if (length === 2) {
    switch (type2) {
      case 'grass':
        color2 = lighten(0.2, '#92BC2C');
        break;
      case 'poison':
        color2 = lighten(0.1, '#B763CF');
        break;
      case 'normal':
        color2 = lighten(0.05, '#A0A29F');
        break;
      case 'fire':
        color2 = lighten(0.1, '#FBA54C');
        break;
      case 'water':
        color2 = lighten(0.1, '#539DDF');
        break;
      case 'electric':
        color2 = darken(0.35, '#F5BC4E');
        break;
      case 'ice':
        color2 = lighten(0.1, '#75D0C1');
        break;
      case 'fighting':
        color2 = lighten(0.1, '#D3425F');
        break;
      case 'ground':
        color2 = lighten(0.1, '#DA7C4D');
        break;
      case 'flying':
        color2 = darken(0.1, '#A1BBEC');
        break;
      case 'psychic':
        color2 = lighten(0.1, '#FA8581');
        break;
      case 'bug':
        color2 = darken(0.25, '#92BC2C');
        break;
      case 'rock':
        color2 = lighten(0.15, '#C9BB8A');
        break;
      case 'ghost':
        color2 = darken(0.25, '#5F6DBC');
        break;
      case 'dark':
        color2 = darken(0.25, '#595761');
        break;
      case 'dragon':
        color2 = lighten(0.1, '#0C69C8');
        break;
      case 'steel':
        color2 = lighten(0.05, '#5695A3');
        break;
      case 'fairy':
        color2 = lighten(0.08, '#EE90E6');
        break;
      default:
        color2 = 'gainsboro';
        break;
    }
  }

  const finalColor = [color1, color2];

  return finalColor;
};
