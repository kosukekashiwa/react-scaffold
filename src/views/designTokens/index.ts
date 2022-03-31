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
  yellow020: '#F7E379',
  yellow010: '#FAF6CF',
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

export const palette = {
  white: '#FFFFFF',
  brack: '000000',
  ...greyPalette,
  ...redPalette,
  ...orangePalette,
  ...yellowPalette,
  ...greenPalette,
  ...aquaPalette,
  ...bluePalette,
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
