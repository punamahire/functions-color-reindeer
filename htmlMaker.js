export const reinDeerHTMLMaker = (coloredReindeer) => {
    const reinDeerHTMLSection = []
    console.log('----------');
    console.log(coloredReindeer);
    for (let i = 0; i < coloredReindeer.length; i++) {
        reinDeerHTMLSection.push(`<section style="color: ${coloredReindeer[i].color}">${coloredReindeer[i].name}</section>`)
    }
    return reinDeerHTMLSection
}