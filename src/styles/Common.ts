type FontPropsType = {
    family?: string,
    weight?: number,
    lineHeight?: number,
    Fmin?: number,
    Fmax?: number
}

export const font = ({family, weight, lineHeight, Fmin, Fmax}: FontPropsType) => `
    font-family: ${family || 'Poppins'};
    font-weight: ${weight || 400};
    lineHeight: ${lineHeight || 1.2};
    font-size: clamp(${Fmin}px, calc( (100vw - 360px) / (1440 - 360) * (${Fmax} - ${Fmin}) + ${Fmin}px), ${Fmax}px);
` 