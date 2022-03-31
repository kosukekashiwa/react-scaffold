const hex2rgba = (hex: string, alpha: number): string => {
  console.log(hex);
  const red = parseInt(hex.substring(1, 3), 16);
  const green = parseInt(hex.substring(3, 5), 16);
  const blue = parseInt(hex.substring(5, 7), 16);
  return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
};

export const greyPalette = {
  grey100: '#0E171F',
  grey090: '#1C2B36',
  grey080: '#2A3F4D',
  grey070: '#3E5463',
  grey060: '#5B7282',
  grey050: '#7A909E',
  grey040: '#9FB1BD',
  grey030: '#C1CCD6',
  grey020: '#DCE3E8',
  grey010: '#F2F5F7',
};
export const redPalette = {
  red100: '#24120C',
  red090: '#4F150F',
  red080: '#75160C',
  red070: '#A1160A',
  red060: '#D91F11',
  red050: '#FA5343',
  red040: '#FC9086',
  red030: '#FABBB4',
  red020: '#FADCD9',
  red010: '#FCF3F2',
};
export const orangePalette = {
  orange100: '#1F1410',
  orange090: '#402117',
  orange080: '#632B17',
  orange070: '#8F3415',
  orange060: '#BF4815',
  orange050: '#E86427',
  orange040: '#FC9162',
  orange030: '#FCBC97',
  orange020: '#FCDDC7',
  orange010: '#FCF2EB',
};
export const yellowPalette = {
  yellow100: '#1C1613',
  yellow090: '#38251B',
  yellow080: '#54341F',
  yellow070: '#70491C',
  yellow060: '#946613',
  yellow050: '#B3870E',
  yellow040: '#D9A514',
  yellow030: '#F5C518',
  yellow20: '#F7E379',
  yellow010: '#FAF6CF',
};
export const limePalette = {
  lime100: '#121A0D',
  lime090: '#1C2E10',
  lime080: '#254211',
  lime070: '#2E5C0E',
  lime060: '#3C7D0E',
  lime050: '#52A31D',
  lime040: '#78BF39',
  lime030: '#AAD971',
  lime020: '#D5F0B1',
  lime010: '#EBF7DA',
};
export const greenPalette = {
  green100: '#081A15',
  green090: '#092E25',
  green080: '#094536',
  green070: '#075E45',
  green060: '#077D55',
  green050: '#16A163',
  green040: '#43C478',
  green030: '#88DBA8',
  green020: '#C7EBD1',
  green010: '#EBF7ED',
};
export const tealPalette = {
  teal100: '#0C1A19',
  teal090: '#102E2D',
  teal080: '#124241',
  teal070: '#155C5E',
  teal060: '#167B7D',
  teal050: '#279C9C',
  teal040: '#4EBFB9',
  teal030: '#86D9D4',
  teal020: '#BEEBE7',
  teal010: '#EBF5F4',
};
export const turquoisePalette = {
  turquoise100: '#0F181A',
  turquoise090: '#102D33',
  turquoise080: '#0C424D',
  turquoise070: '#09596B',
  turquoise060: '#067A91',
  turquoise050: '#159AB3',
  turquoise040: '#45BCD1',
  turquoise030: '#81D8E6',
  turquoise020: '#C7E8ED',
  turquoise010: '#EBF5F4',
};
export const aquaPalette = {
  aqua100: '#0B1724',
  aqua090: '#0C2B45',
  aqua080: '#0E3D66',
  aqua070: '#08548A',
  aqua060: '#0073BA',
  aqua050: '#1195D6',
  aqua040: '#48B8F0',
  aqua030: '#8BD3F7',
  aqua020: '#C9E7F5',
  aqua010: '#EBF3F7',
};
export const bluePalette = {
  blue100: '#0D1826',
  blue090: '#11294D',
  blue080: '#103A75',
  blue070: '#0D4EA6',
  blue060: '#186ADE',
  blue050: '#3D8DF5',
  blue040: '#75B1FF',
  blue030: '#ADCCF7',
  blue020: '#D4E4FA',
  blue010: '#F0F4FA',
};
export const ultramarinePalette = {
  ultramarine100: '#141429',
  ultramarine090: '#23254D',
  ultramarine080: '#2F337D',
  ultramarine070: '#3A45B0',
  ultramarine060: '#545FE8',
  ultramarine050: '#7681FC',
  ultramarine040: '#A0A7FA',
  ultramarine030: '#C2C7FC',
  ultramarine020: '#DEE0FA',
  ultramarine010: '#F2F3FA',
};
export const purplePalette = {
  purple100: '#1C1229',
  purple090: '#331F4D',
  purple080: '#4C277D',
  purple070: '#6B30AB',
  purple060: '#8F49DE',
  purple050: '#AC71F0',
  purple040: '#C89AFC',
  purple030: '#DABEFA',
  purple020: '#EADCFC',
  purple010: '#F7F2FC',
};
export const pinkPalette = {
  pink100: '#241020',
  pink090: '#47153F',
  pink080: '#6B155A',
  pink070: '#961574',
  pink060: '#CC1D92',
  pink050: '#ED4CB7',
  pink040: '#FA87D4',
  pink030: '#F7B7E2',
  pink020: '#F7DAED',
  pink010: '#FCF0F8',
};

export const palette = {
  white: '#FFFFFF',
  brack: '000000',
  ...greyPalette,
  ...redPalette,
  ...orangePalette,
  ...yellowPalette,
  ...limePalette,
  ...greenPalette,
  ...tealPalette,
  ...turquoisePalette,
  ...aquaPalette,
  ...bluePalette,
  ...ultramarinePalette,
  ...purplePalette,
  ...pinkPalette,
};

export const dt = {
  mui: {
    palette: {
      primary: palette.blue060,
      primaryDark: palette.blue030,
      secondary: palette.grey040,
      secondaryDark: palette.grey050,
      error: palette.red060,
      errorDark: palette.red040,
      info: palette.aqua050,
      infoDark: palette.aqua070,
      warning: palette.yellow030,
      warningDark: palette.yellow050,
      success: palette.green060,
      successDark: palette.green030,
    },
  },
  surface: {
    overlay: hex2rgba(palette.grey090, 0.8),
  },
  text: {
    primary: palette.grey090,
    reversed: palette.white,
  },
  header: {
    global: {
      primary: palette.grey010,
      reversed: palette.grey100,
    },
  },
};
